import AccommodationTypeList from "./components/accommodationList";

export default async function Page() {
  return (
    <div className="p-2 space-y-4 overflow-x-auto shadow-md sm:rounded-md">
      <AccommodationTypeList />
    </div>
  );
}
