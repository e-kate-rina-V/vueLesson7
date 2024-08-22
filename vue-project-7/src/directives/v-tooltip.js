// Створіть власну директиву для відображення тултипа при наведенні миші.

export default {
  mounted(el, binding) {
    const tooltip = document.createElement('div');
    tooltip.textContent = binding.value;
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = 'black';
    tooltip.style.color = 'white';
    tooltip.style.padding = '5px';
    tooltip.style.borderRadius = '3px';
    tooltip.style.visibility = 'hidden';
    tooltip.style.zIndex = '1000';
    tooltip.style.left = "65%";
    el.style.position = 'relative';
    el.appendChild(tooltip);

    el.addEventListener('mouseenter', () => {
      tooltip.style.visibility = 'visible';
    });

    el.addEventListener('mouseleave', () => {
      tooltip.style.visibility = 'hidden';
    });
  }
};
