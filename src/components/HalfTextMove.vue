<template>
    <div class="wrap">
      <div class="hide">hide</div>
      <span class="half top">
        <span class="trans">{{text}}</span>
      </span>
      <span class="half bottom">
        <span class="trans">{{text}}</span>
      </span>
    </div>
</template>

<script>
    export default {
        name: "HalfTextMove",
      props: {
          text: {
            type: String,
            required: true
          }
      }
    }
</script>

<style scoped>
.wrap {
  position: relative;
  width: 200px;
  font-size: 2em;
}
.hide {
  visibility: hidden;
}
  .half {
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
  }
  .half span {
    height: 100%;
  }
  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
    color: red;
  }
  .bottom .trans {
    bottom: 100%;
    position: absolute;
    transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
    /*transform: translateY(-100%);*/
    width: 100%;
  }
</style>
