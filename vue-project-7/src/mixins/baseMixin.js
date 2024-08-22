// Створіть базовий міксін, який додає декілька методів або даних у компонент.

export default {
  data() {
    return {
      mixinData: 'This is data from the mixin',
      count: 0
    };
  },
  methods: {
    incrementCount() {
      this.count++;
      console.log('Count incremented:', this.count);
    },
    resetCount() {
      this.count = 0;
      console.log('Count reset');
    }
  }
};
