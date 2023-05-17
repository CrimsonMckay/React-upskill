import axios from "axios";
const baseUrl = `https://api.unsplash.com`;

const searchImages = async(term) => {
    const response = await axios.get(`${baseUrl}/search/photos`, {
        headers: {
            Authorization: "Client-ID dSI0ID7RY_gqBE1TUYWYa0y2tIbF2r--x-cJFt5nn7Q",
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
};

export default searchImages;