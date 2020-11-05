<template>
  <div class='logo' data-aos="fade-up" data-aos-duration=1000 :data-aos-delay='aosDelay' data-aos-anchor-placement="top-bottom">
    <img :src='require(`@/assets/${imageSrc}`)' :alt='alt' />
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: ['title', 'aosDelay', 'imageSrc', 'alt']
}
</script>

<style>
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #080d1a;
  }

  .logo > img {
    width: 40px;
    transition: all 0.5s ease;
    filter: drop-shadow(0 3px 3px rgba(0,0,0,1));
    margin-bottom: 10px;
  }

  .logo:hover > img {
    transform: translateY(-10px);
    filter: drop-shadow(0 8px 3px rgba(0,0,0,0.6));
  }

  .logo p {
    transition: 0.3s ease;
  }

  .logo:hover > p {
    color: #f52e55;

  }

  .logo p {
    margin: 0;
  }
  
  @media screen and (max-width: 640px) {
    .logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #080d1a;
      padding: 15px 0px;
    }
  }
</style>
