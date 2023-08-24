<template>
    <div>
      <!-- Bouton qui déclenche la génération d'une carte utilisateur aléatoire -->
      <button @click="generateRandomUserCard" class="btn btn-primary">Générer une carte utilisateur</button>
      
      <!-- Condition pour afficher la carte utilisateur seulement si randomUser est défini -->
      <div v-if="randomUser" class="card" :style="cardStyle">
        <!-- Image de l'utilisateur -->
        <img :src="randomUser.image" class="card-img-top" alt="User Image">
        
        <!-- Contenu de la carte -->
        <div class="card-body">
          <!-- Nom complet de l'utilisateur -->
          <h5 class="card-title">{{ randomUser.firstName }} {{ randomUser.lastName }}</h5>

                              <!-- Age de l'utilisateur -->
          <p class="card-text">{{ randomUser.age }} ans</p>
          
          <!-- Adresse e-mail de l'utilisateur -->
          <p class="card-text">{{ randomUser.email }}</p>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        randomUser: null,
      };
    },
    methods: {
      generateRandomUserCard() {
        // Générer un index aléatoire pour sélectionner un utilisateur de la liste
        const randomIndex = Math.floor(Math.random() * this.users.length);
        this.randomUser = this.users[randomIndex];
      },
    },
    computed: {
      cardStyle() {
        // Définir le style du fond de la card en fonction du genre de l'utilisateur
        return {
          backgroundColor: this.randomUser.gender === 'male' ? 'navy' : 'maroon',
          color: 'white',
        };
      },
    },
    props: ['users'],
  };
  </script>
  
  <style>
  .card {
    margin-top: 20px;
    max-width: 300px;
  }
  </style>
  