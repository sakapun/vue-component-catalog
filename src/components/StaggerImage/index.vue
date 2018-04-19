<template>
    <div class="wrap">
      <div v-if="!isLoad">読み込み中</div>
      <img @load="loaded" :key="hash" :src="imgSrc" class="clip-img" v-show="false"/>
      <template v-for="index in 5" >
        <transition >
          <img class="clip-img" :src="imgSrc" :style="clip(index - 1)" v-if="isLoad"/>
        </transition>
      </template>

    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return ({
            isLoad: false,
            imgSrc: ""
          })
      },
      methods: {
        loaded() {
          this.isLoad = true;
        },
        clip(index) {
          return {
            clip: `rect(${index * 120}px, 800px, ${index * 120 + 120}px, 0)`,
            "transition-delay": `.${index}s`
          }
        }
      },
      mounted () {
          fetch("https://source.unsplash.com/800x600/?rabbit")
            .then(r => {
              this.imgSrc = r.url
            });
      }
    }
</script>

<style scoped>
  .wrap {
    position: relative;
    width: 800px;
    min-height: 600px;
  }
.clip-img {
  clip: rect(0, 100vw, 20vw, 0);
  position: absolute;
  width: 100%;
  height: 100%;
}
  .v-enter {
    transform:  translateX(-100%);
  }
  .v-enter-active {
    transition: all 1s;
  }
</style>
