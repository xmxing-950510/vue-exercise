const data = {
  "nodes": [
    {"id": "0", "label": "n0", "class": "0" },
    {"id": "1", "label": "n1", "class": "0" },
    {"id": "2", "label": "n2", "class": "0" },
    {"id": "3", "label": "n3", "class": "1" },
    {"id": "4", "label": "n4", "class": "1" },
    {"id": "5", "label": "n5", "class": "1" },
    {"id": "6", "label": "n6", "class": "2" },
    {"id": "7", "label": "n7", "class": "2"},
    {"id": "8", "label": "n8", "class": "2"},
    {"id": "9", "label": "n9", "class": "3" },
    {"id": "10", "label": "n10", "class": "3" },
    {"id": "11", "label": "n11", "class": "4" },
    {"id": "12", "label": "n12", "class": "4" },
    {"id": "13", "label": "n13", "class": "5" },
    {"id": "14", "label": "n14", "class": "5" },
    {"id": "15", "label": "n15", "class": "5" },
    {"id": "16", "label": "n16", "class": "6" },
    {"id": "17", "label": "n17", "class": "6" },
    {"id": "18", "label": "n18", "class": "6" },
    {"id": "19", "label": "n19", "class": "6" }
  ],
  "edges": [
    {"source": "0", "target": "1", "label": "e0-1", "weight": 1 },
    {"source": "1", "target": "2", "label": "e0-2", "weight": 1 },
    {"source": "0", "target": "3", "label": "e0-3", "weight": 1 },
    {"source": "3", "target": "4", "label": "e0-4", "weight": 1 },
    {"source": "4", "target": "5", "label": "e0-5", "weight": 1 },
    {"source": "6", "target": "7", "label": "e0-7", "weight": 1 },
    {"source": "7", "target": "8", "label": "e0-8", "weight": 1 },
    {"source": "9", "target": "10", "label": "e0-10", "weight": 1 },
    {"source": "11", "target": "12", "label": "e0-11", "weight": 1 },
    {"source": "13", "target": "14", "label": "e2-3", "weight": 1 },
    {"source": "14", "target": "15", "label": "e4-5", "weight": 1 },
    {"source": "16", "target": "17", "label": "e4-6", "weight": 1 },
    {"source": "17", "target": "18", "label": "e5-6", "weight": 1 },
    {"source": "18", "target": "19", "label": "e7-13", "weight": 1 },
    {"source": "0", "target": "6", "label": "e0-6", "weight": 1 },
    {"source": "0", "target": "9", "label": "e0-9", "weight": 1 },
    {"source": "0", "target": "11", "label": "e0-11", "weight": 1 },
    {"source": "0", "target": "13", "label": "e0-13", "weight": 1 },
    {"source": "0", "target": "16", "label": "e0-16", "weight": 1 }
  ]
}
const colors = [
  '#BDD2FD',
  '#BDEFDB',
  '#C2C8D5',
  '#FBE5A2',
  '#F6C3B7',
  '#B6E3F5',
  '#D3C6EA',
  '#FFD8B8',
  '#AAD8D8',
  '#FFD6E7',
];
const strokes = [
  '#5B8FF9',
  '#5AD8A6',
  '#5D7092',
  '#F6BD16',
  '#E8684A',
  '#6DC8EC',
  '#9270CA',
  '#FF9D4D',
  '#269A99',
  '#FF99C3',
];
export {
  data,
  colors,
  strokes
} 