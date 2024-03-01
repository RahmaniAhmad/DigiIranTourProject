import { City } from "@/models/city/city";
import { CityViewModel } from "@/models/city/cityViewModel";
import axios from "axios";

const mapToViewModel = (city: City): CityViewModel => {
  debugger;
  return new CityViewModel(city.id, city.province, city.name);
};

export const getCity = async (id: number) => {
  const api = `http://localhost:3001/api/city/${id}`;
  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  debugger;
  const cityViewModel: CityViewModel = mapToViewModel(data);

  return cityViewModel;
};
