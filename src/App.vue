<template>
  <!-- Le contenu de ce composant est défini dans le template -->

  
  <div>

    <Navbar/>

    <!-- Un titre affiché dans le composant -->
    <h1>Hello from APP component</h1>
    <div>
      <!-- Utilisation du composant 'Component-one' importé -->
      <Component-one/>
      <Component-two/>
    </div>
  </div>
</template>

<script>
// Dans cette section <script>, vous pouvez ajouter des scripts logiques liés au composant
import ComponentTwo from './components/Component-two.vue' // Import du composant en local

export default {
  //  Pour enregistrer des composants qui seront utilisés dans le template du composant parent
  components: {
    ComponentTwo,
  }
}
</script>

<style scoped>

h1 {
  background-color: lightgray;
  padding: 40px;
  border: 5px solid rgb(94, 94, 101);
}

</style>
