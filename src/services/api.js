import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "BuRgL-lsvO2dkqQqS4V_nhuQc8Twzb8Cg__Fve4QiI0";

const fetchImages = async (query, page = 1) =>{
    const res = await axios.get(API_URL,{
        params: {
            query,
            page,
            per_page: 12,
            client_id: ACCESS_KEY,
        },
});
return res.data;
}

export default fetchImages;