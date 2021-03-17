import { createApp } from 'vue'
import App from './App.vue'

window.app = createApp(App).mount('#app')
window.prevW = window.innerWidth;
console.log(window.app);
