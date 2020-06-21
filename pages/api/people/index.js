// Fake users data
const people = [
  { id: 1592702905539, name: "Felipe", siblings: true },
  { id: 1592702906404, name: "Cunha", siblings: false },
  { id: 1592702908524, name: "Muner", siblings: true },
  { id: 1592702931895, name: "Person 4 name", siblings: false },
];

export default function handler(req, res) {
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      console.log("passei pelo get121331");
      res.status(200).json(people);
      break;
    case "POST":
      console.log("passei pelo post");
      people.push({ id: Date.now(), name: "Felipe 5", siblings: true });
      // Update or create data in your database
      res.status(200).json(people);
      break;
    case "DELETE":
      console.log("passei pelo delete");
      // Update or create data in your database
      res.status(200).json(people);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
