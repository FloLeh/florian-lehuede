<template>
  <div class="comp">
    <div class="left">
      <h1>TECHNO</h1>
      <h2>Voici quelques exemples de <b>technologies</b> sur lesquelles je travaille actuellement :</h2>

      <p>Je suis en constant apprentissage et le serai durant toute ma carrière de développeur.</p>
      <hr>
      <p>C'est pourquoi je reste informé des nouvelles sorties concernant les langages et frameworks qui m'intéressent.</p>
      
    </div>
    <div class="skills">
      <Logo class="logo" title="HTML" aos-delay=200 image-src='html-5.png' alt='html'/>
      <Logo class="logo" title="CSS3" aos-delay=250 image-src='css.png' alt='css'/>
      <Logo class="logo" title="Wordpress" aos-delay=300 image-src='wordpress.png' alt='wordpress'/>
      <Logo class="logo" title="Javascript" aos-delay=350 image-src='javascript.png' alt='javascript'/>
      <Logo class="logo" title="NodeJS" aos-delay=400 image-src='nodejs.png' alt='nodejs'/>
      <Logo class="logo" title="Typescript" aos-delay=450 image-src='typescript.png' alt='typescript'/>
      <Logo class="logo" title="VueJS" aos-delay=500 image-src='logo.png' alt='vuejs'/>
      <Logo class="logo" title="ReactJS" aos-delay=550 image-src='reactjs.png' alt='reactjs'/>
      <Logo class="logo" title="PHP" aos-delay=600 image-src='PHP.png' alt='php'/>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style>
  .comp {
    display: flex;
    height: 100%;
  }

  .comp .left {
    flex: 1.4;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .comp .left h1 {
    color: #f52e55;
    opacity: 0.2;
    position: absolute;
    font-size: 270px;
    z-index: 0;
    transform: translateY(-100px) translateX(20px);
    font-weight: bold;
  }

  .comp .left h2 b {
    color: #f52e55;
  }

  .comp .left h2 {
   margin-bottom: 40px;
   z-index: 2;
  }

  .comp .left p {
   text-align: justify;
   padding: 20px 120px;
   margin: 0;
   font-size: 1.1rem;
   z-index: 2;
  }

  .comp .left hr {
    border-top: 1px solid #f52e55;
    width: 50%;
    margin: 2px auto;
  }

  .skills {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2px;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 640px) {
    .comp {
      display: flex;
      flex-direction: column;
      height: auto;
    }

    .comp .left {
      flex: 1;
      text-align: center;
      padding: 0;
    }

    .comp .left h1 {
      display: none;
    }

    .comp .left p {
      text-align: justify;
      padding: 20px 30px;
      margin: 0;
      font-size: 1.1rem;
      z-index: 2;
    }

    .skills {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 2px;
      width: 100%;
      height: auto;
      transform: none;
      margin-bottom: 10px;
    }
  }

</style>
