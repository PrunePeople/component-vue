<template>
  <!-- Le contenu de ce composant est défini dans le template -->
  <div>
    <!-- Un titre affiché dans le composant -->
    <h1>Hello from APP component</h1>
    <div>
      <!-- Utilisation du composant 'Component-one' importé -->
      <Component-one/>
    </div>
  </div>
</template>

<script>
// Dans cette section <script>, vous pouvez ajouter des scripts logiques liés au composant
export default {
  // Aucune donnée ou méthode spécifiée dans cet exemple
}
</script>

<style>
/* Styles spécifiques à ce composant */
h1 {
  /* Propriétés de style pour le titre h1 */
  line-height: 1.5; /* Hauteur de ligne */
  max-height: 100vh; /* Hauteur maximale égale à 100% de la hauteur de la vue */
}
</style>
