export default function userHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case "GET":
      console.log("to no get");
      // Get data from your database
      res.status(200).json({ id, name: `User ${id}` });
      break;
    case "PUT":
      console.log("to no put");
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` });
      break;
    case "POST":
      console.log("to no post");
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
