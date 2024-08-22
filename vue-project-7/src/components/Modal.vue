<!--Стовріть слот для модального вікна за допомогою которого можно будет встановлювати 
контент для хедера, футера та тіла.-->

<template>
  <div class="modal">
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
  name: 'Modal',
};
</script>
