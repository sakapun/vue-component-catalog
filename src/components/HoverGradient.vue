<template>
    <div>
      adfadf
      <span class="uho">uhdddo</span>
    </div>
</template>

<script>
    export default {
        name: "HoverGradient"
    }
</script>

<style scoped type="scss">
div {
  padding: 1em;
  position: relative;
}
div:before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  background-image: linear-gradient(left,red 0%, blue 40%, pink 100%);
  width: 0;
  height: 100%;
  transition: .3s all;
}

  div:hover {
    padding: 2em;
  }
  div:hover:before {
    width: 100%
  }
  div:hover .uho {
    opacity: 0.95;
    transform: translateY(0);
  }

.uho {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translateY(10px);
  transition: .2s all;
  transition-delay: .1s;
}
</style>
