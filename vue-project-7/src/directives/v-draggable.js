// Розробіть директиву, яка дозволяє зробити елемент перетягуваним.

export default {
  mounted(el) {
    let startX, startY, initialX, initialY;

    const onMouseMove = (e) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      el.style.left = `${initialX + dx}px`;
      el.style.top = `${initialY + dy}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    el.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      startY = e.clientY;

      initialX = parseInt(getComputedStyle(el).left, 10) || 0;
      initialY = parseInt(getComputedStyle(el).top, 10) || 0;

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    el.style.position = 'absolute';
  }
};
