import useSwr from "swr";

const fetcher = (url) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: 1, name: "felipe" }),
  }).then((res) => res.json());
// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSwr("/api/test-method", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
