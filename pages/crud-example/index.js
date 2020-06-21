import Head from "next/head";
import Link from "next/link";
import useSwr from "swr";
import LayoutCrud, { siteTitle } from "../../components/layoutCrud";
import Table from "../../components/tableCrud";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
  }).then((res) => res.json());

export default function Index() {
  const { data, error } = useSwr("/api/people", fetcher);
  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <LayoutCrud>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Table data={data}></Table>
      <ul>
        {data.map((people) => (
          <li key={people.id}>
            <Link href="/people/[id]" as={`/people/${people.id}`}>
              <a>{`User ${people.id}`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </LayoutCrud>
  );
}
