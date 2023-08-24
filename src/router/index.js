// Importation des fonctions nécessaires depuis vue-router
import { createRouter, createWebHistory } from 'vue-router'

// Création d'une instance de router
const router = createRouter({
  // Configuration de l'historique de navigation en utilisant WebHistory
  history: createWebHistory(import.meta.env.BASE_URL),

  // Configuration des routes
  routes: [
    // Exemple de définition de route
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // Code-splitting au niveau de la route
    //   // Cela génère un chunk séparé (About.[hash].js) pour cette route
    //   // qui est chargé de manière différée lorsque la route est visitée.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

// Exportation de l'instance du router pour être utilisée ailleurs dans l'application
export default router
