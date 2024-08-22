// Створіть базову власну директиву, яка змінює колір тексту елемента, 
//на якому вона використовується.

export default {
  mounted(el, binding) {
    el.style.color = binding.value || 'black';
  }
};
