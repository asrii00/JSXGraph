import pandas as pd
import json

## BY CHATGPT 

# === Load and clean data ===
df = pd.read_excel("data-for-publication_edited_random.xlsx")

df.columns = df.columns.str.strip()

# === Columns to keep ===
columns_to_keep = [
    "breed_group", "weight_kg",
    "Lazy", "Calm", "Energetic", "Erratic", "Restless", "Aggressive_people"
]

# Drop rows with missing values in any of the selected columns
df = df.dropna(subset=columns_to_keep)

# Compute average calmness and activity
df["avg_calm"] = df[["Lazy", "Calm"]].mean(axis=1)
df["avg_activity"] = df[["Energetic", "Restless"]].mean(axis=1)

# === Convert to JS dicts ===
def row_to_js_dict(row):
    return {
        "breed_group": row["breed_group"],
        "weight": row["weight_kg"],
        "Lazy": row["Lazy"],
        "Calm": row["Calm"],
        "Energetic": row["Energetic"],
        "Erratic": row["Erratic"],
        "Restless": row["Restless"],
        "avg_calm": row["avg_calm"],
        "avg_activity": row["avg_activity"],
        "aggression_people": row["Aggressive_people"]
    }

all_breeds_data = [row_to_js_dict(row) for _, row in df.iterrows()]

# === Output as JavaScript ===
with open("all_breeds_temperament_data.js", "w", encoding="utf-8") as f:
    f.write(f"const allBreedsTemperamentData = {json.dumps(all_breeds_data, indent=2)};\n")

print(f"{len(all_breeds_data)} entries saved to all_breeds_temperament_data.js")
