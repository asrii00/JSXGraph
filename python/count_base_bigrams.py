from collections import defaultdict, Counter

def parse_fasta(filename):
    chroms = defaultdict(str)
    current_chrom = None
    with open(filename, 'r') as f:
        for line in f:
            line = line.strip()  # Removes spaces and newline characters
            if line.startswith('>'):
                current_chrom = line[1:].split()[0]  # Get the name (first word after >)
            else:
                chroms[current_chrom] += line.upper()  # Add sequence in uppercase
    return chroms

# Load FASTA
chrom_seqs = parse_fasta("sacCer3.fasta")

# Combine all sequences into one string (you said you don’t need them separated)
full_sequence = ''.join(chrom_seqs.values())

# Filter out non-letters (just in case, e.g., N or symbols)
cleaned_sequence = ''.join(filter(str.isalpha, full_sequence))

# Now count all successive 2-base combinations (bigrams)
# We take pairs like cleaned_sequence[i] + cleaned_sequence[i+1]
bigram_counts = Counter(
    cleaned_sequence[i:i+2] for i in range(len(cleaned_sequence) - 1)
)

# Print the bigram counts
for bigram, count in bigram_counts.items():
    print(f"{bigram}: {count}")
