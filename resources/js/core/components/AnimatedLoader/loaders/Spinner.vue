<template>
  <div class="loader loader--spinner" :style="styles"></div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    background: {
      default: 'transparent'
    },
    color: {
      default: '#000000'
    },
    size: {
      default: '40px'
    },
    width: {
      default: '40px'
    },
    height: {
      default: '40px'
    },
    speed: {
      default: '0.6s'
    },
    stroke: {
      default: '5px'
    }
  },
  computed: {
    styles () {
      return {
        'width': this.size || this.width,
        'height': this.size || this.width,
        'border': this.stroke + ' solid ' + this.background,
        'border-top-color': this.color,
        'border-right-color': this.color,
        'animation-duration': this.speed,
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .loader {
    box-sizing: border-box;
    border-radius: 100%;
    border: 5px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    animation: spinner-animation 0.6s infinite linear;
  }
  @keyframes spinner-animation {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
