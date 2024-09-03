import axios from "axios";
import { Photos } from "../AppTypes";

export const fetchPhoto = async (query: string, page: number) : Promise<Photos[]> => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      per_page: 5,
      page,
      client_id: "oVlIOsaX75GGNo4uFhQZvWzCTPnyPqNUnzW0wEoqoF4",
    },
  });
  return res.data.results;
};
