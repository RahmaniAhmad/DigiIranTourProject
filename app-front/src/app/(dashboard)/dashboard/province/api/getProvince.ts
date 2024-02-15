import axios from "axios";

export const getProvince = async (id?: number) => {
  debugger;
  const api = `http://localhost:3001/api/province/${id}`;

  const data = await axios.get(api).then((response) => {
    debugger;
    return response.data;
  });
  return data;
};
