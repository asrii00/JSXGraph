from PIL import Image
import numpy as np
#by GPT
# Load greyscale image
img = Image.open('predation_small.png').convert('L')  # 'L' = greyscale

# Normalize pixel values to 0..1
arr = np.array(img) / 255.0

# Write to JS file
with open('predationMapSmall.js', 'w') as f:
    f.write('export const predationMapSmall = [\n')
    for row in arr:
        f.write('  [' + ', '.join(f'{v:.4f}' for v in row) + '],\n')
    f.write('];\n')
