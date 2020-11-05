<template>
  <div class="pres">
    <div class="left">
      <div class="profil">
        <img src="../assets/profil.jpeg" alt="profil">
      </div>
      <h1>FLORIAN LEHUÉDÉ</h1>
      <div class="dev"></div>
      <h2>DÉVELOPPEUR WEB ET WEB MOBILE</h2>
    </div>
    <div class="right">
      <h3>QUI</h3>
      <h2>Qui suis-<b>je</b> ?</h2>
      <div class="texte">
        <p>Je suis tout d'abord un passionné de développement web !</p>
        <hr>
        <p>Étant curieux et autodidacte, je cherche à étoffer mes connaissances et mes compétences tous les jours.</p>
        <hr>
        <p>Je cherche en ce moment un poste de développeur au sein d'une entreprise qui saura me faire confiance et m'aider à acquérir de l'expérience.</p>
      </div>
    </div>
  </div>
</template>

<style>
  .pres {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    place-items: center;
    overflow: hidden;
  }

  .left {
    height: 100%;
    display: flex;
    flex: 1.5;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    overflow: hidden;
  }

  .right {
    flex: 2;
  }

  .pres .right h3 {
    color: #f52e55;
    opacity: 0.2;
    position: relative;
    font-size: 270px;
    z-index: 0;
    font-weight: bold;
  }

  .right h2 {
    margin-bottom: 40px;
  }

  .right h2 b {
    color: #f52e55;
  }

  .right .texte {
    text-align: justify;
    width: 60%;
    margin: auto;
  }

  .right .texte, .right h2 {
    position: relative;
    top: -100px;
  }

  .right hr {
    border-top: 1px solid #f52e55;
    width: 50%;
    margin: 20px auto;
  }

  img {
    width: 180px;
  }

  .pres h1 {
    margin: 0;
    font-size: 3vw;
  }

  .pres .left h2 {
    margin: 0;
    font-size: 2.5vw;
  }

  .profil {
    margin: 0 auto;
    margin-bottom: 20px;
    width: 180px;
    height: 180px;
    border-radius: 100%;
    overflow: hidden;
    z-index: 2;
    filter: drop-shadow(0 1px 5px rgba(0,0,0,0.7));
  }

  .dev::before {
    content: "< / >";
    color: #f52e55;
    font-size: 22px;
  }

  .dev {
    margin: 10px;
  }

  @media screen and (max-width: 640px) {
    .pres {
      display: flex;
      flex-direction: column;
      justify-content:space-evenly;
      padding-top: 20px;
    }

    .pres .right h3 {
      display: none;
    }

    .pres h1 {
      margin: 0;
      font-size: 24px;
    }

    .pres .left h2 {
      margin: 0;
      font-size: 22px;
    }

    .pres .right {
      margin-top: 50px;
    }

    .right .texte, .right h2 {
      position: relative;
      top: 0px;
    }
  }

</style>
