<template>
  <button v-on:click="slideUp">Test</button>  
</template>

<script>
export default {
  methods: { 
    slideUp: 
      function () {
        document.getElementsByClassName('project')[0].style.display = 'none'
      }
  }
}
</script>
