<!--Розробіть компонент з декількома іменованими слотами та передайте у них різний контент.-->

<template>
  <div>
    <header>
      <slot name="header">Default Header</slot>
    </header>
    <main>
      <slot name="body">Default Body</slot>
    </main>
    <footer>
      <slot name="footer">Default Footer</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MultiSlot',
};
</script>