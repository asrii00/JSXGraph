const probabilitySets = {
      neutral: {
        Up: [
          ['Up', 0.48],
          ['End', 0.02],
          ['Right', 0.25],
          ['Left', 0.25],
        ],
        Left: [
          ['Up', 0.24],
          ['End', 0.01],
          ['Right', 0.25],
          ['Left', 0.5],
        ],
        Right: [
          ['Up', 0.24],
          ['End', 0.01],
          ['Right', 0.5],
          ['Left', 0.25],
        ]
      },
      left: {
        Up: [
          ['Up', 0.3],
          ['End', 0.02],
          ['Right', 0.15],
          ['Left', 0.53],
        ],
        Left: [
          ['Up', 0.2],
          ['End', 0.02],
          ['Right', 0.1],
          ['Left', 0.68],
        ],
        Right: [
          ['Up', 0.25],
          ['End', 0.02],
          ['Right', 0.25],
          ['Left', 0.48],
        ]
      },
      right: {
        Up: [
          ['Up', 0.3],
          ['End', 0.02],
          ['Right', 0.53],
          ['Left', 0.15],
        ],
        Left: [
          ['Up', 0.25],
          ['End', 0.02],
          ['Right', 0.48],
          ['Left', 0.25],
        ],
        Right: [
          ['Up', 0.2],
          ['End', 0.02],
          ['Right', 0.68],
          ['Left', 0.1],
        ]
      }
    };