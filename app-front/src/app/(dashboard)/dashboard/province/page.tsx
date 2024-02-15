import axios from "axios";
import ProvinceList from "./compoents/provinceList";

async function fetchData(page: number = 1, filter?: string) {
  "use server";
  const api = filter
    ? `http://localhost:3001/api/province?page=${page}&filter=${filter}`
    : `http://localhost:3001/api/province?page=${page}`;
  const res = await axios.get(api);

  return res.data;
}

export default async function Page() {
  return (
    <div className="p-2 space-y-4 overflow-x-auto shadow-md sm:rounded-md">
      <ProvinceList getAll={fetchData} />
    </div>
  );
}
