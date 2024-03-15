import { createRouter, createWebHistory } from 'vue-router';
//import SeatSelection from './components/SeatSelection.vue'; // Assuming correct path
// router.js

import MovieCard from './components/MovieCard.vue'; // Assuming correct path
import SeatSelection from './components/SeatSelection.vue'; // Assuming correct path

const routes = [
  // Other routes
  
  { path: '/home', name: 'MovieCard',  component: MovieCard },
  { path: '/seat-selection', name: 'SeatSelection',  component: SeatSelection },
];

const router = createRouter({
  history: createWebHistory(), // Assuming history mode
  routes,
});

export default router;