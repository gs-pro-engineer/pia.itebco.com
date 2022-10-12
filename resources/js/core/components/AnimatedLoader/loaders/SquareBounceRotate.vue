<template>
  <div class="loader loader--square-bounce-rotate" :style="styles"></div>
</template>

<script>
export default {
  name: 'SquareBounceRotate',
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
      default: '0.5s'
    },
  },
  computed: {
    styles () {
      return {
        'width': this.size || this.width,
        'height': this.size || this.width,
        '--color': this.color,
        '--speed': this.speed,
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .loader {
    position: relative;
    * {
        line-height: 0;
        box-sizing: border-box;
    }
    &:before {
      content: '';
      width: 100%;
      height: 20%;
      min-width: 5px;
      background: var(--color);
      opacity: 0.1;
      position: absolute;
      bottom: 0%;
      left: 0;
      border-radius: 50%;
      animation: square-bounce-rotate-shadow var(--speed) linear infinite;
    }
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      background: var(--color);
      animation: square-bounce-rotate-animate var(--speed) linear infinite;
      position: absolute;
      bottom:40%;
      left: 0;
      border-radius: 3px;
    }
  }

  @keyframes square-bounce-rotate-animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(20%) rotate(22.5deg);
    }
    50% {
      transform: translateY(40%) scale(1, .9) rotate(45deg);
      border-bottom-right-radius: 50%;
    }
    75% {
      transform: translateY(20%) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes square-bounce-rotate-shadow {
    0%, 100% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1);
    }
  }
</style>
