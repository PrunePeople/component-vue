<template>
  <!-- Le contenu de ce composant est défini dans le template -->
  <div>
    <!-- Un titre affiché dans le composant -->
    <h1>Hello from APP component</h1>
    <div>
      <!-- Utilisation du composant 'Component-one' importé -->
      <Component-one/>
      <Component-two/> <!-- Utilisation directe du composant dans le template -->
    </div>
  </div>
</template>

<script>
// Dans cette section <script>, vous pouvez ajouter des scripts logiques liés au composant
import ComponentTwo from './components/Component-two.vue' // Import du composant en local

export default {
  //  Pour enregistrer des composants qui seront utilisés dans le template du composant parent
  components: {
    ComponentTwo
  }
}
</script>

<style>
h1 {
  line-height: 1.5; 
  max-height: 100vh; 
}
</style>
