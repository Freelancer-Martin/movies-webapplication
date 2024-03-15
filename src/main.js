import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-vue/dist/bootstrap-vue.css'; // Import BootstrapVue CSS



const app = createApp(App).use(router)

app.mount('#app');
