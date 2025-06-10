from collections import defaultdict, Counter

def parse_fasta(filename):
    chroms = defaultdict(str)
    current_chrom = None
    with open(filename, 'r') as f:
        for line in f:
            line = line.strip()
            if line.startswith('>'):
                current_chrom = line[1:].split()[0]
            else:
                chroms[current_chrom] += line.upper()
    return chroms

chrom_seqs = parse_fasta("sacCer3.fasta")

base_counts = {chrom: Counter(''.join(filter(str.isalpha, seq)))
               for chrom, seq in chrom_seqs.items()}

for chrom, counts in base_counts.items():
    print(f"{chrom}: {dict(counts)}")
