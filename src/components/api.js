import axios from 'axios';


const API_KEY = '38398823-58dfcc6099d652ecdba70c123';
const apiAdress = 'https://pixabay.com/api/';

export const itemsPerPage = 12; 

export async function fetchPhotoByQ(q, page)  {
    const config = {
    method: 'get',
    baseURL: apiAdress,
    params: {
        key: API_KEY,
        q: q,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: itemsPerPage,
    }
   }
   try {
    const {data} = await axios.get('', config);
    return data;
   } catch (error) {
    console.log(error);
   }
}
