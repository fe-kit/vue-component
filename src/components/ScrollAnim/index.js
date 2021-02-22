import Anim from "./src/anim";

/* istanbul ignore next */
Anim.install = function(Vue) {
  Vue.component(Anim.name, Anim);
};

export default Anim;
