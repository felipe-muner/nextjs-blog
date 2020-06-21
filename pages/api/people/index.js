// Fake users data
const people = [
  { id: 1592702905539, name: "Felipe", siblings: true },
  { id: 1592702906404, name: "Cunha", siblings: false },
  { id: 1592702908524, name: "Muner", siblings: true },
  { id: 1592702931895, name: "Person 4 name", siblings: false },
];

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(people);
}
