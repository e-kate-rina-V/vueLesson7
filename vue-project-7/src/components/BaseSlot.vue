<!--Створіть компонент з одним слотом та використайте його, 
передаючи різний контент у слот з різних компонентів.-->

<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseSlot',
};
</script>