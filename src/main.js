import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import ProjectDetailView from './views/ProjectDetailView.vue'
import './style.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/:slug', component: ProjectDetailView }
  ],
  scrollBehavior: () => ({ top: 0 })
})

createApp(App).use(router).mount('#app')
