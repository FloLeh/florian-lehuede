<template>
  <div class='parcours'>
    <h3>PARCOURS</h3>
    <h1>Mon <b>Parcours</b></h1>
    <div class="time">
      <div class="experiences">
        <div class="exp">
          <div class="bot"></div>
        </div>
        <div class="exp">
          <div class="duree">2013 - 2015</div>
          <div class="title">DUT Mesures Physiques</div>
          <div class="lieu">IUT de Saint-Nazaire</div>
          <div class="bot"></div>
        </div>
        <div class="exp">
          <div class="duree">2015 - 2018</div>
          <div class="title">Licence Informatique</div>
          <div class="lieu">Université de Rennes - Université de Caen-Normandie</div>
          <div class="bot"></div>
        </div>
        <div class="exp">
          <div class="duree">2018 (3 mois)</div>
          <div class="title">The Hacking Project</div>
          <div class="lieu">Nantes</div>
          <div class="bot"></div>
        </div>
        <div class="exp">
          <div class="duree">2018 - 2020</div>
          <div class="title">Formation Développeur Web et Web Mobile</div>
          <div class="lieu">CEFii Angers</div>
          <div class="bot"></div>
        </div>
        <div class="exp">
          <div class="duree">2020 (6 mois)</div>
          <div class="title">Stage Développeur Back-End </div>
          <div class="lieu">Kinow - Nantes</div>
          <div class="bot"></div>
        </div>
        <div class="exp">
          <div class="bot"></div>
        </div>
      </div>
      <div class="timeline">
        <div class="date">2013</div>
        <div class="date">2015</div>
        <div class="date">2017</div>
        <div class="date">2019</div>
        <div class="date">2020</div>
      </div>
    </div>
    
  </div>
</template>

<style>
  .parcours {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }

  .parcours h1 b {
    color: #f52e55;
  }

  .parcours h3 {
    color: #f52e55;
    opacity: 0.2;
    position: relative;
    font-size: 200px;
    z-index: 0;
    font-weight: bold;
  }

  .time, .parcours h1 {
    position: relative;
    top: -150px;
  }

  .timeline {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    border-bottom: 1px solid #f52e5599;
    height: 12px;
  }

  .experiences{
    display: flex;
    align-items: flex-end;
  }

  .exp {
    height: auto;
    flex: 0.8;
  }

  .duree {
    font-size: 10px;
    color: grey;
  }

  .lieu {
    font-size: 12px;
  }

  .exp:first-of-type .bot {
    border-radius: 20px;
    background: linear-gradient(90deg, #0F1932, #f52e55);
    height: 10px;
    align-content: bottom;
  }

  .exp:nth-of-type(2) {
    flex: 2;
  }

  .exp:nth-of-type(2) .bot {
    border-radius: 20px;
    background: rgb(170, 115, 12);
    height: 10px;
    align-content: bottom;
    margin-bottom: 20px;
  }

  .exp:nth-of-type(2) .title {
    color: rgb(170, 115, 12);
  }

  .exp:nth-of-type(3) {
    flex: 2.5;
  }

  .exp:nth-of-type(3) .bot {
    border-radius: 20px;
    background: rgb(56, 56, 141);
    height: 10px;
    align-content: bottom;
    margin-bottom: 40px;
  }

  .exp:nth-of-type(3) .title {
    color: rgb(56, 56, 141);
  }

  .exp:nth-of-type(4) {
    flex: 0.7;
  }

  .exp:nth-of-type(4) .bot {
    border-radius: 20px;
    background: rgb(163, 20, 20);
    height: 10px;
    align-content: bottom;
    margin-bottom: 60px;
  }

  .exp:nth-of-type(4) .title {
    color: rgb(163, 20, 20);
  }

  .exp:nth-of-type(5) {
    flex: 2;
  }

  .exp:nth-of-type(5) .bot {
    border-radius: 20px;
    background: rgb(88, 228, 130);
    height: 10px;
    align-content: bottom;
    margin-bottom: 80px;
  }

  .exp:nth-of-type(5) .title {
    color: rgb(88, 228, 130);
  }

  .exp:nth-of-type(6) .bot {
    border-radius: 20px;
    background: rgb(216, 38, 177);
    height: 10px;
    align-content: bottom;
    margin-bottom: 100px;
  }

  .exp:nth-of-type(6) .title {
    color: rgb(216, 38, 177);
  }

  .exp:last-of-type .bot {
    border-radius: 20px;
    background: linear-gradient(90deg, #f52e55, #0F1932);
    height: 10px;
    align-content: bottom;
    margin-bottom: 120px;
  }

  @media screen and (max-width: 640px) {
    .parcours {
      display: flex;
      justify-content: center;
    }

    .parcours h1 {
      z-index: 5;
    }

    .time {
      display: flex;
      flex-direction: row-reverse;
      height: 100vh;
    }
    .time, .parcours h1 {
      position: relative;
      top: 0px;
    }

    .parcours h3 {
      display: none;
    }

    .timeline {
      display: flex;
      flex: 0.7;
      flex-direction: column;
      justify-content: space-evenly;
      border-bottom: 0;
      border-right: 1px solid #f52e5599;
      transform: none;
      height: calc(100% + 30px);
      transform: translateY(-100px);
      margin-right: 10px;
    }

    .date {
      padding: 0;
    }

    .experiences{
      flex: 2.5;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .exp {
      display: flex;
      flex-direction: column;
      max-width: 70%;
      margin: 0;
      justify-content: center;
      padding: 0 15%;
    }

    .bot {
      display: none;
    }

    .exp:first-of-type {
      display: none;
    }

    .exp:nth-of-type(2) {
      flex: 2;
      border-left: 12px solid rgb(170, 115, 12);
    }

    .exp:nth-of-type(2) .title {
      color: rgb(170, 115, 12);
    }

    .exp:nth-of-type(3) {
      flex: 1.7;
      border-left: 12px solid  rgb(56, 56, 141);
    }

    .exp:nth-of-type(3) .title {
      color: rgb(56, 56, 141);
    }

    .exp:nth-of-type(4) {
      flex: 0.8;
      border-left: 12px solid  rgb(163, 20, 20);
    }

    .exp:nth-of-type(4) .title {
      color: rgb(163, 20, 20);
    }

    .exp:nth-of-type(5) {
      flex: 2;
      border-left: 12px solid rgb(88, 228, 130);
    }

    .exp:nth-of-type(5) .title {
      color: rgb(88, 228, 130);
    }

    .exp:nth-of-type(6) {
      flex: 1;
      border-left: 12px solid rgb(216, 38, 177);
    }

    .exp:nth-of-type(6) .title {
      color: rgb(216, 38, 177);
    }

  }
</style>
