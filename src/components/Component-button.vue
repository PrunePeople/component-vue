<template>
    <div>
        <button :style = " { backgroundColor: color}">
            {{ title }}
        </button>
    </div>
</template>

<script>
// Dans cette section <script>, vous exportez le composant pour qu'il puisse être utilisé ailleurs
export default {
  // Le nom du composant, utilisé pour le débogage et le rendu conditionnel
  props: ["title", "color"],
}
</script>

