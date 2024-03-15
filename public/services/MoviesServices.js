import axios from "axios";

const API_URL = "http://localhost:8080/movies/all"; // Assuming your server is running on port 3000

class MoviesService {
  async getMovies() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  }
}

export default new MoviesService();
