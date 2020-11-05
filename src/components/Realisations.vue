<template>
  <div class="real">
    <div class="project">
      a
    </div>
    <div class="project">
      a
    </div>
    <div class="project">
      a
    </div>
    <div class="project">
      a
    </div>
    <div class="project">
      a
    </div>
    <div class="project">
      a
    </div>
  </div>
</template>

<style>
  .real {
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
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
