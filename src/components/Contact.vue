<template>
  <div class="contact">
    <div class="confirm" v-if="isSubmit">Votre message a bien été envoyé</div>
    <h1>Contact</h1>
    <h2>
      Pour me <b>contacter</b> :
    </h2>
    <div class="formulaire">
      <form @submit.prevent="sendEmail">
        <div class="form-row">
          <input type="text" name="user_name" placeholder="votre nom / entreprise"/>
        </div>

        <div class="form-row">
          <input type="email" name="user_email" placeholder="votre email" ref="email"/>
        </div>

        <div class="form-row">
          <textarea type="text" name="user_message" placeholder="votre message"/>
        </div>

        <input type="submit" value="Envoyer">

      </form>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
emailjs.init(process.env.USER_ID)
export default {
  data () {
    return { isSubmit: false }
  },
  methods: {
    sendEmail: function (e) {
      emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target)
      e.target[0].value = ''
      e.target[1].value = ''
      e.target[2].value = ''
      this.isSubmit = true
    }
  }
}
</script>

<style>
  *:focus {
    outline: none;
  }

  a {
    color: #fff;
    transition: color 0.3s ease;
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: auto;
  }

  .contact .confirm {
    position: absolute;
    width: calc(100vw - 100px);
    top: 0;
    margin: auto;
    background: rgba(0,255,0,0.3);
    z-index: 1000;
    padding: 15px 0;
    animation: confirm 3s ease-out;
    transform: translateY(-100px);
  }

  @keyframes confirm {
    0% {transform: translateY(-100px);}
    20% {transform: translateY(0px);}
    80% {transform: translateY(0px);}
    100% {transform: translateY(-100px);}
  }

  .contact h1 {
    color: #f52e55;
    opacity: 0.2;
    position: relative;
    font-size: 230px;
    z-index: 0;
    font-weight: bold;
  }

  .contact h2 {
    transform: translateY(-100px);
  }

  .contact h2 b {
    color: #f52e55;
  }

  .formulaire {
    z-index: 5;
    display: flex;
    justify-content: center;
    width: 40%;
    margin: 10px auto;
    transform: translateY(-100px);
  }

  form {
    width: 100%;
  }

  .form-row {
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
  }

  input, textarea {
    background: #080d1a;
    border: 0;
    color: white;
    padding: 5px 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 1);
  }

  input::placeholder, textarea::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }

  form > input {
    background: #080d1a;
    border: 0;
    color: white;
    transition: all 0.3s ease;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 1);
  }

  form > input:hover {
    color: #f52e55;
  }

  @media screen and (max-width: 640px) {

    .contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      margin: auto;
    }

    .contact h1 {
      display: none;
    }

    .contact h2 {
      transform: translateY(0);
    }

    .contact .formulaire {
      transform: translateY(0);
      width: 60%;
    }

    .contact .confirm {
      position: absolute;
      width: 100vw;
      top: 0px;
      margin: auto;
      background: rgba(0,255,0,0.5);
      z-index: 1;
      padding: 15px 0;
      height: 50px;
      animation: confirm 3s ease-out;
    }

    @keyframes confirm {
    0% {transform: translateY(0px);}
    20% {transform: translateY(65px);}
    80% {transform: translateY(65px);}
    100% {transform: translateY(0px);}
  }
  }
</style>
