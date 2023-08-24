<template>
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">
            <router-link to="/" class="navbar-link">
                Accueil
            </router-link>
        </li>
        <li class="navbar-item">
            <router-link to="/component-two" class="navbar-link">
                A propos
            </router-link>
        </li>
        <li class="navbar-item">
            <router-link to="/component-two" class="navbar-link">
                Contact
            </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavigationBar'
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
  }
  
  .navbar-list {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }
  
  .navbar-item {
    margin-right: 20px;
  }
  
  .navbar-link {
    text-decoration: none;
    color: #333;
    transition: color 0.3s;
    font-weight: bold;
  }
  
  .navbar-link:hover {
    color: #34197a;
  }
  </style>
  