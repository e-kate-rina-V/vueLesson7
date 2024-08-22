// Розробіть власну директиву, яка приймає параметр і 
// виконує різні дії в залежності від його значення.

export default {
  mounted(el, binding) {
    el.style.backgroundColor = binding.value || 'lightgray';
  }
};
