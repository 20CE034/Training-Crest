import useSWR from "swr";
export default function ListUsers() {
  const { data, error } = useSWR(
    "https://20ce034.github.io/profiles-json-api/db.json"
  );
  console.log(data);

  //   useEffect();
}
ListUsers();
