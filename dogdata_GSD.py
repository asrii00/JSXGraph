import pandas as pd
import json

# BY CHATGPT

# === Load and trim data ===
df = pd.read_excel("data-for-publication_GSD.xlsx")
df.columns = df.columns.str.strip()


# === Filter to only German Shepherd dogs ===
df = df[df["breed_group"] == "German_Shepherd_Dog"]

# === Columns to keep ===
columns_to_keep = [
    "sex", "weight_kg", "Socialization_dogs", "daily_exercise", "hobby_frequency_home",
    "hobby_frequency_out", "alone_time", "Playful_dogs", "Anxious", "Fearful_dogs",
    "Impulsive", "Aggressive_dogs_samegender", "Aggressive_dogs_oppositegender", "Erratic",
    "Obedient", "Calm", "Insecure", "Prey_driven_chase", "Energetic", "Provocative",
    "Active", "Vocal", "inattention_score", "impulsivity_score"
]

# Drop rows with any missing values in the selected columns
df = df.dropna(subset=columns_to_keep)

# Compute average aggression column
df["avg_aggression"] = df[["Aggressive_dogs_samegender", "Aggressive_dogs_oppositegender"]].mean(axis=1)

# === Function to convert row to JS object ===
def row_to_js_dict(row):
    return {
        "sex": row["sex"],
        "weight": row["weight_kg"],
        "Socialization_dogs": row["Socialization_dogs"],
        "daily_exercise": row["daily_exercise"],
        "hobby_frequency_home": row["hobby_frequency_home"],
        "hobby_frequency_out": row["hobby_frequency_out"],
        "alone_time": row["alone_time"],
        "Playful_dogs": row["Playful_dogs"],
        "Anxious": row["Anxious"],
        "Fearful_dogs": row["Fearful_dogs"],
        "Impulsive": row["Impulsive"],
        "avg_aggression": row["avg_aggression"],
        "Erratic": row["Erratic"],
        "Obedient": row["Obedient"],
        "Calm": row["Calm"],
        "Insecure": row["Insecure"],
        "Prey_driven_chase": row["Prey_driven_chase"],
        "Energetic": row["Energetic"],
        "Provocative": row["Provocative"],
        "Active": row["Active"],
        "Vocal": row["Vocal"],
        "inattention_score": row["inattention_score"],
        "impulsivity_score": row["impulsivity_score"]
    }

# Convert all valid rows to JS dicts
gsd_data = [row_to_js_dict(row) for _, row in df.iterrows()]

# === Output as JavaScript ===
with open("german_shepherd_data.js", "w", encoding="utf-8") as f:
    f.write(f"const germanShepherdData = {json.dumps(gsd_data, indent=2)};\n")

print(f"{len(gsd_data)} German Shepherd entries saved to german_shepherd_data.js")
