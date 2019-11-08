<template lang="pug">
div#app
  v-app
    transition(name="overlay-appearance")
      .grey.lighten-5.layout.column.align-center.justify-center(
        v-if="!isAppReady"
        style="position: fixed; height: 100vh; width: 100vw; z-index: 9999")

        v-progress-circular(:width="3" color="red" indeterminate)

    template(v-if="isAppReady")
      //- Drawer
      //- Toolbar

      v-content
        transition(name="route-appearance" mode="out-in")
          router-view
</template>

<script>
// import Drawer from './Drawer.vue';
// import Toolbar from './Toolbar.vue';

export default {
  components: {},

  data: () => ({
    isAppReady: true,
  }),

  mounted() {
    this.setup();
  },

  methods: {
    async setup() {
      // setTimeout(() => { this.isAppReady = true; }, 500);
    },
  },
};
</script>


<style lang="sass">
// @import '../styles/global'

html
  scroll-behavior: smooth
  overscroll-behavior: none

.overlay-appearance
  &-enter-active, &-leave-active
    transition: all .4s

  &-enter, &-leave-to
    opacity: 0

.route-appearance
  &-enter-active, &-leave-active
    transition: all .4s

  &-enter, &-leave-to
    transform: translateY(4px)
    opacity: 0

</style>
