// Importation du fichier CSS principal
import './assets/main.css'

// Importation du composant ComponentOne depuis le fichier Component-one.vue
import ComponentOne from './components/Component-one.vue'

// Importation de la fonction createApp depuis Vue.js
import { createApp } from 'vue'

// Importation du composant App depuis le fichier App.vue
import App from './App.vue'

// Importation du router défini dans le fichier router.js
import router from './router'

// Création d'une instance d'application Vue
const app = createApp(App)

// Définition du composant local 'Component-one' pour être utilisé dans le template
app.component('Component-one', ComponentOne) // Utilisation: <Component-one>

// Utilisation du router dans l'application Vue
app.use(router)

// Montage de l'application Vue sur l'élément avec l'ID 'app' dans le HTML
app.mount('#app')
