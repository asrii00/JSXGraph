import pandas as pd
import json
### BY CHATGPT ###

# === Load the Excel file ===
file_name = 'data-for-publication_edited.xlsx'
df = pd.read_excel(file_name)

# === Filter only Collie breeds ===
collie_df = df[df['breed_group'].isin(['Collie_Smooth', 'Collie_Rough'])]

# === Desired columns ===
desired_columns = [
    'breed_group', 'sex', 'weight_kg', 'daily_exercise',
    'Calm', 'Energetic', 'Active',
    'Human_oriented', 'Willing_to_learn',
    'Impulsive', 'Vocal'
]
collie_df = collie_df[desired_columns]

# === Drop rows with NA in any of the personality traits ===
personality_traits = ['Calm', 'Energetic', 'Active', 'Human_oriented',
                      'Willing_to_learn', 'Impulsive', 'Vocal']
collie_df = collie_df.dropna(subset=personality_traits)

# === Convert to JavaScript arrays ===
def row_to_dict(row):
    return {
        "sex": row["sex"],
        "weight_kg": row["weight_kg"],
        "daily_exercise": row["daily_exercise"],
        "Calm": row["Calm"],
        "Energetic": row["Energetic"],
        "Active": row["Active"],
        "Human_oriented": row["Human_oriented"],
        "Willing_to_learn": row["Willing_to_learn"],
        "Impulsive": row["Impulsive"],
        "Vocal": row["Vocal"]
    }

collie_smooth = [row_to_dict(row) for _, row in collie_df[collie_df['breed_group'] == 'Collie_Smooth'].iterrows()]
collie_rough = [row_to_dict(row) for _, row in collie_df[collie_df['breed_group'] == 'Collie_Rough'].iterrows()]

# === Output JavaScript format ===
js_output = f"""const collieSmooth = {json.dumps(collie_smooth, indent=2)};
const collieRough = {json.dumps(collie_rough, indent=2)};
"""

# === Save to .js file or print ===
with open('collie_data.js', 'w', encoding='utf-8') as f:
    f.write(js_output)

print("Data successfully processed and written to collie_data.js")
