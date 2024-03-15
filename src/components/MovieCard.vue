<template>
  <div>
    <h1>Movies</h1>
    <div class="filter-container">
      <label for="genreFilter">Filter by Genre:</label>
      <select v-model="genreFilter" id="genreFilter" @change="filterMovies">
        <option value="">All Genres</option>
        <option v-for="genre in allGenres" :key="genre">{{ genre }}</option>
      </select>

      <label for="sortBy">Sort by:</label>
      <select v-model="sortBy" id="sortBy">
        <option value="name">Movie Name (A-Z)</option>
        <option value="release_year">Release Year (Newest - Oldest)</option>
      </select>
    </div>
    <div class="row">
      <div v-for="movie in filteredMovies" :key="movie.id" class="col-md-4 mb-4">
        <div class="card shadow-sm">
          <img alt="Vue logo" src="@/assets/bg-image.jpg">
          <div class="card-body">
            <h5 class="card-title">{{ movie.name }}</h5>
            <p class="card-text">{{ movie.director }}</p>
            <p class="card-text">{{ movie.release_year }}</p>
            <p class="card-text">{{ movie.genre }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <router-link
                  :to="{ name: 'SeatSelection', params: { movieCode: movie.movieCode } }"
                  class="btn btn-sm btn-outline-secondary"
                  @click="markMovieSeen(movie)"
                >
                  Select Seat
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoviesService from '/public/services/MoviesServices'; // Replace with your actual service

export default {
  name: 'MoviesList',
  data() {
    return {
      movies: [],
      allGenres: [], // Store all unique movie genres
      genreFilter: '', // Selected genre filter
      sortBy: 'name', // Sorting criteria
      processedMovies: [], // Array with added 'seen' flag
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      try {
        const response = await MoviesService.getMovies();
        this.movies = response.data || response; // Handle API response structure

        // Pre-process movies for filtering and recommendations
        this.processedMovies = this.movies.map(movie => ({
          ...movie,
          seen: false // Add a flag to track if the user has seen the movie
        }));

        // Extract all unique genres from fetched movies (optional)
        this.allGenres = [...new Set(this.processedMovies.map(movie => movie.genre))];

      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
    filterMovies() {
      if (this.genreFilter === '') {
        this.filteredMovies = this.processedMovies;
      } else {
        this.filteredMovies = this.processedMovies.filter(
          movie => movie.genre === this.genreFilter && !movie.seen
        );
      }
    },
    markMovieSeen(movie) {
      movie.seen = true; // Update the movie object to mark it as seen
    },
  },
  computed: {
    filteredMovies() {
      // Filtering logic with sorting applied
      let filteredMovies = this.processedMovies;
      if (this.genreFilter) {
        filteredMovies = filteredMovies.filter(
          movie => movie.genre === this.genreFilter && !movie.seen
        );
      }
      return filteredMovies.sort((a, b) => {
        if (this.sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (this.sortBy === 'release_year') {
          return b.release_year - a.release_year;
        } else {
          // Default to name sorting
          return a.name.localeCompare(b.name);
        }
      });
    },
  },
};
</script>


<style scoped>
/* Add your styles here */
</style>
