<template>
    <!-- Le contenu de ce composant est défini dans le template -->
    <div>
      <!-- Un titre affiché dans le composant -->
      <h1>
        Je suis component One en global
      </h1>
    </div>
  </template>
  
  <script>
  // Dans cette section <script>, vous exportez le composant pour qu'il puisse être utilisé ailleurs
  export default {
    // Le nom du composant, utilisé pour le débogage et le rendu conditionnel
    name: 'Component one'
  }
  </script>

<style scoped>
h1 {
  background-color: lightblue;
  padding: 20px;
  border: 5px solid rgb(51, 51, 171);
}
</style>