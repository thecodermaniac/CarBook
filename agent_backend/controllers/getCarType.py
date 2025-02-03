import re


# List of car types to match (expand this list as needed)
CAR_TYPES = [
    "sedan", "coupe", "convertible", "suv", "minivan", "hatchback",
    "truck", "crossover", "wagon", "pickup", "sports car", "van"
]

# Build regex pattern (case-insensitive, whole-word match)
pattern = re.compile(r"\b(" + "|".join(CAR_TYPES) + r")\b", re.IGNORECASE)

def extract_car_types(cartext:str):
    matches = pattern.findall(cartext.lower())  # Lowercase to deduplicate
    unique_matches = list(set(matches))  # Remove duplicates
    return unique_matches