<!--Створіть компонент з слотами, які мають фолбек контент, 
що відображається, якщо немає переданого контенту.-->

<template>
  <div>
    <slot name="content">Default Content</slot>
  </div>
</template>

<script>
export default {
  name: 'FallbackSlot',
};
</script>