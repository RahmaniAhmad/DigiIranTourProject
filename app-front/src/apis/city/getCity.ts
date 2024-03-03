import { City } from "@/models/city/city";
import { CityViewModel } from "@/models/city/cityViewModel";
import axios from "axios";

const mapToViewModel = (city: City): CityViewModel => {
  return new CityViewModel(city.id, city.province, city.name);
};

export const getCityApi = async (id: number) => {
  const api = `http://localhost:3001/api/city/${id}`;
  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  const cityViewModel: CityViewModel = mapToViewModel(data);

  return cityViewModel;
};
