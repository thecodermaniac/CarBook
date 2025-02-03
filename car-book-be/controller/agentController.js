import axios from "axios";
import Car from "../model/CarSchema.js";

class CarSearchTool {
  name = "car_search";
  description = "Search cars based on user requirements.";

  async search(input) {
    console.log(input);

    const params = this.parseInput(input);
    return await Car.find({
      capacity: { $gte: params.passengers },
      ppD: { $lte: params.budget },
      carType: params.carType,
    });
  }

  parseInput(input) {
    const passengers = parseInt(input.match(/passengers?:\s*(\d+)/i)?.[1]) || 4;
    const budget = parseInt(input.match(/(?:\$|₹|€)?(\d+)/i)?.[1]) || 50;
    const typeMatch = input.match(/(SUV|sedan|hatchback|van)/i);
    const carType = typeMatch ? typeMatch[0].toLowerCase() : "sedan";
    console.log({ passengers, budget, carType });


    return { passengers, budget, carType };
  }
}

const carSearchTool = new CarSearchTool();

export const processAgentQuery = async (req, res) => {
  try {
    // Send user query to Python AI service
    const aiResponse = await axios.post("http://localhost:8000/query", {
      query: req.body.query,
    });

    // AI's processed intent -> Query database
    const searchResults = await carSearchTool.search(aiResponse.data.response);

    res.json({
      success: true,
      response: searchResults,
    });
  } catch (error) {
    console.error("Error querying AI model:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
