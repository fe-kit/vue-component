<template>
  <transition-group
    name="anim-fade"
    tag="div"
    ref="el"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <slot :visible="visible"></slot>
  </transition-group>
</template>
<script>
import Velocity from "velocity-animate";
import { throttle } from "throttle-debounce";
export default {
  name: "ScrollAnim",
  props: {
    // translate方向
    direction: {
      type: String,
      default: "translateY",
    },
    // transition-group 容器额外class
    className: {
      type: String,
    },
  },
  data() {
    return {
      container: null,
      visible: false,
    };
  },
  mounted() {
    const evt = new Event("scroll");
    this.init();
    this.throttledScrollHandler = throttle(100, this.onScroll);
    window.addEventListener("scroll", this.throttledScrollHandler);
    window.dispatchEvent(evt);
  },
  methods: {
    init() {
      const el = this.$refs.el.$el;
      el.children.forEach((item, index) => {
        item.dataset.index = index;
      });
      el.classList.add(this.className);
    },

    onScroll() {
      const el = this.$refs.el && this.$refs.el.$el;
      const { top } = el.getBoundingClientRect();
      this.visible = top < window.innerHeight - 80;
    },

    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.transform = `${this.direction}(${8 *
        (el.dataset.index * 1 + 1)}px)`;
    },
    enter: function(el) {
      const delay = el.dataset.index * 50;
      setTimeout(() => {
        Velocity(el, "stop");
        Velocity(
          el,
          { opacity: 1, [this.direction]: 0 },
          { easing: "ease-out", duration: 500 }
        );
      }, delay);
    },
    leave: function(el) {
      const delay = el.dataset.index * 50;
      setTimeout(() => {
        Velocity(el, "stop");
        Velocity(
          el,
          {
            opacity: 0,
            [this.direction]: `${8 * (el.dataset.index * 1 + 1)}px`,
          },
          { easing: "ease-in", duration: 500 }
        );
      }, delay);
    },
  },
  destroyed() {
    document.removeEventListener("scroll", this.throttledScrollHandler);
  },
};
</script>
