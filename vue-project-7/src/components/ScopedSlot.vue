<!--Реалізуйте компонент, який передає дані назад у батьківський компонент через scoped slot.-->

<template>
  <div>
    <slot :message="message"></slot>
  </div>
</template>

<script>
export default {
  name: 'ScopedSlot',
  data() {
    return {
      message: 'Hello from scoped slot!',
    };
  },
};
</script>