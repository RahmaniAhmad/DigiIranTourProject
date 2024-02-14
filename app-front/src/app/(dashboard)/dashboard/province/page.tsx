import Table from "@/components/UI/table";
import ProvinceList from "./compoents/provinceList";

async function getData() {
  const res = await fetch("http://localhost:3001/api/province");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Page() {
  // const data = await getData();
  async function getAll(filter?: string, page?: number) {
    "use server";
    return await getData();
  }
  return (
    <div className="p-2 space-y-4 overflow-x-auto shadow-md sm:rounded-md">
      {/* <Table heads={["استان"]} data={data}></Table> */}
      <ProvinceList getAll={getAll} />
    </div>
  );
}
