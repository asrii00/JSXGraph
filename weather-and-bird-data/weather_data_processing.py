import pandas as pd

## provided by ChatGPT, I didn't write this, but it does what is needed :)

# Load CSV
df = pd.read_csv("2014-2024.csv")

# Combine date columns into a single datetime column
df['date'] = pd.to_datetime(df[['Year', 'Month', 'Day']])

# Convert temperature to numeric (safeguard)
df['Average temperature [°C]'] = pd.to_numeric(df['Average temperature [°C]'], errors='coerce')

# Filter for April–June only
df = df[df['Month'].between(4, 6)]

# Calculate daily averages
daily_avg = df.groupby('date')['Average temperature [°C]'].mean().reset_index()
daily_avg.rename(columns={'Average temperature [°C]': 'daily_avg_temp'}, inplace=True)

# Add year column
daily_avg['year'] = daily_avg['date'].dt.year

# Save per year for plotting (grouped export)
# Save as JSON object: { "2014": [...], "2015": [...] }
yearly_data = {
    str(year): group[['date', 'daily_avg_temp']].to_dict(orient='records')
    for year, group in daily_avg.groupby('year')
}

import json
with open("daily_averages_by_year2.json", "w") as f:
    json.dump(yearly_data, f, indent=2, default=str)

# Optional: also export per-year CSVs if preferred
for year, group in daily_avg.groupby('year'):
    group.to_csv(f"daily_averages_{year}.csv", index=False)

# --- Optional: Thermal summer detection for full year ---

# Load full daily averages again (April–September or full year recommended for this)
df_full = pd.read_csv("2014-2024.csv")
df_full['date'] = pd.to_datetime(df_full[['Year', 'Month', 'Day']])
df_full['Average temperature [°C]'] = pd.to_numeric(df_full['Average temperature [°C]'], errors='coerce')
daily_full = df_full.groupby('date')['Average temperature [°C]'].mean().reset_index()
daily_full.rename(columns={'Average temperature [°C]': 'daily_avg_temp'}, inplace=True)
daily_full['year'] = daily_full['date'].dt.year

# Thermal summer starts
thermal_summer_starts = []

for year, group in daily_full.groupby('year'):
    temps = group['daily_avg_temp'].values
    dates = group['date'].values
    for i in range(len(temps) - 4):
        if all(t >= 10 for t in temps[i:i+5]):
            thermal_summer_starts.append({'year': int(year), 'thermal_summer_start': str(dates[i])})
            break

thermal_df = pd.DataFrame(thermal_summer_starts)
thermal_df.to_json("thermal_summer_starts2.json", orient="records", indent=2)

print("✅ Daily averages (April–June) and thermal summer starts exported.")
