import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50',
    },
    headers: {
        // process.env.REACT_APP_RAPID_API_KEY
    //   'X-RapidAPI-Key': '2a026eed26mshea0f7baf48dd053p1732c0jsn5044e52318de',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}