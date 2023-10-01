import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "User Name is required"],
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please provide password"],
            minlength: 6,
        }
    },
    { timestamps: true }
)

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(5);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


userSchema.methods.matchPassword = async function (providedPassword) {
    const isMatched = await bcrypt.compare(providedPassword, this.password);
    return isMatched;
};

const Customer = mongoose.model("Customer", userSchema);

export default Customer;