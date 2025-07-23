import pandas as pd
import json

# === Load and trim data ===
df = pd.read_excel("data-for-publication_edited.xlsx")
df.columns = df.columns.str.strip()  # Clean up column names
df = df.head(1500)  # Only use the first 5000 rows

# === Columns to keep ===
columns_to_keep = [
    "breed_group", "sterilization_status",
    "Aggressive_dogs_samegender", "Aggressive_dogs_oppositegender",
    "Aggressive_people", "Erratic"
]

# Keep only rows with no NAs in those columns
df = df.dropna(subset=columns_to_keep + ["sex"])  # "sex" is also required

# Keep only relevant columns
df = df[["sex"] + columns_to_keep]

# === Function to convert row to dictionary ===
def row_to_js_dict(row):
    return {
        "breed_group": row["breed_group"],
        "sterilization": row["sterilization_status"],
        "aggressive_dogs_samegender": row["Aggressive_dogs_samegender"],
        "aggressive_dogs_oppositegender": row["Aggressive_dogs_oppositegender"],
        "aggressive_people": row["Aggressive_people"],
        "Erratic": row["Erratic"]
    }

# === Split by sex ===
females = [row_to_js_dict(row) for _, row in df[df["sex"] == "female"].iterrows()]
males = [row_to_js_dict(row) for _, row in df[df["sex"] == "male"].iterrows()]

# === Output as JavaScript ===
js_output = f"""const femaleDogs = {json.dumps(females, indent=2)};
const maleDogs = {json.dumps(males, indent=2)};
"""

with open("aggression_by_sex.js", "w", encoding="utf-8") as f:
    f.write(js_output)

print("JavaScript data saved to aggression_by_sex.js")
