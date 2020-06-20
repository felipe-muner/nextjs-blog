const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function handler(req, res) {
  const {
    body: { id, name },
    method,
  } = req;

  console.log(method);
  console.log(id);
  // Get data from your database
  res.status(200).json(users);
}
