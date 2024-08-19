import axios from "axios"

export const fetchPhoto = async (query) =>{
    const {data} = await axios.get(`https://api.unsplash.com/photos/?client_id=oVlIOsaX75GGNo4uFhQZvWzCTPnyPqNUnzW0wEoqoF4&query=${query}`)
    return data;
}