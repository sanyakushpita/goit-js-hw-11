import axios from 'axios';

const API_KEY = '49785510-c79f1c3ac74fac394468dbc2f';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}
