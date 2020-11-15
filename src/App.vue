<template>
  <div id="app">
    <div id="loader">
      <img src="./assets/loader.gif" alt="logo">
    </div>
    <nav>
      <ul>
        <li><router-link to="/" exact>
          <font-awesome-icon icon="user" /> <br>
          <span>Présentation</span>
        </router-link></li>
        <li><router-link to="Competences">
          <font-awesome-icon icon="code" /> <br>
          <span>Compétences</span>
        </router-link></li>
        <!-- <li><router-link to="Realisations">
          <font-awesome-icon icon="laptop" /> <br>
          <span>Réalisations</span>
        </router-link></li> -->
        <li><router-link to="Parcours">
          <font-awesome-icon icon="school" /><br>
          <span>Parcours</span>
        </router-link></li>
        <li><router-link to="Contact">
          <font-awesome-icon icon="envelope" /><br>
          <span>Contact</span>
        </router-link></li>
      </ul>
    </nav>
    <div class="content">
      <transition name="fade" mode="out-in">
          <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
setTimeout(function () {
  document.getElementById('loader').style.opacity = 0
  document.getElementById('loader').style.zIndex = 0
}, 2000)

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');

#app {
  font-family: 'Fjalla One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  overflow: hidden;
}

#loader {
  position: absolute;
  width: 100vw;
  padding-left: 100px;
  height: 100vh;
  background-color: #0F1932;
  transition: all 0.5s ease;
  opacity: 1;
  z-index: 1000;
  display: flex;
}

#loader img {
  margin: auto;
}

.svg-inline--fa {
  transform: scale(1.5);
  margin-bottom: 8px;
}

.content {
  padding-left: 100px;
  height: 100vh;
  background-color: #0F1932;
  color: #fff;
}

nav {
  height: 100%;
  position: fixed;
  width: 100px;
  font-size: .7em;
  z-index: 1000;
  background: #0F1932;
  border-right: 1px solid rgba(0,0,0,0.2);
  box-shadow: 0px 0px 7px 0px black;
  padding: 0;
}

nav ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  height: 100%;
}

nav a {
  color: #fff;
  transition: color 0.3s ease;
}

nav a:hover {
  text-decoration: none;
  color: #f52e55;
}

nav li {
  list-style: none;
}

.fade-enter-active, .fade-leave-active {
  transition: ease-in-out 0.8s;
}

.fade-leave-active {
  opacity: 0;
  transform: translateX(-300px);
}

.fade-enter {
  opacity: 0;
  transform: translateX(-300px);
}

.router-link-active {
  color:#f52e55;
}

@media screen and (max-width: 640px) {
  #app {
    font-family: 'Fjalla One', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
    height: 100%;
    overflow: hidden;
  }

  #loader {
    padding-left: 0px;
  }

  nav {
    height: 65px;
    position: fixed;
    width: 100vw;
    font-size: .7em;
    z-index: 1000;
    background: #0F1932;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    box-shadow: 0px 0px 7px 0px black;
    padding: 15px 0;
  }

  nav ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
    height: auto;
  }

  .content {
    padding-left: 0;
    padding-top: 120px;
    height: 100%;
    min-height: 100vh;
    background-color: #0F1932;
    color: #fff;
  }

  .fade-enter-active, .fade-leave-active {
    transition: ease-in-out 0.8s;
  }

  .fade-leave-active {
    opacity: 0;
    transform: translateY(-300px);
  }

  .fade-enter {
    opacity: 0;
    transform: translateY(-300px);
  }
}

</style>
