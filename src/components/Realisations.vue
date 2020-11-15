<template>
  <div class="real">
    <div class="project">
      a
    </div>
    <slide-up/>
  </div>
</template>

<script>
import slideUp from './slideUp'
export default {
  components: {slideUp}
}
</script>

<style>
  .real {
    padding: 40px;
    display: grid;
    width: 100%;
    height: 100%;
  }

  .project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #080d1a;
  }
</style>
