import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export const fetchPhotos = async (query) => {
  try {
    const response = await axios.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query,
          page: 1,
          per_page: 10,
        },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchVideos = async (query) => {
    try {
        const response = await axios.get(
            "https://api.pexels.com/v1/videos/search",
      {
        params: {
          query,
          per_page: 1,
        },
        headers: {
          Authorization: `${PEXELS_KEY}`,
        },
      }
    )
    return response.data
    } catch (error) {
        console.error(error);
        
    }
}