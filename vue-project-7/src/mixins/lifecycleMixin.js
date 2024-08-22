// Створіть міксін, який включає хуки життєвого циклу для логування повідомлень при 
// створенні та знищенні компоненту.

export default {
  created() {
    console.log(`${this.$options.name} component has been created.`);
  },
  beforeDestroy() {
    console.log(`${this.$options.name} component is about to be destroyed.`);
  },
  unmounted() {
    console.log(`${this.$options.name} component has been unmounted.`);
  }
};
