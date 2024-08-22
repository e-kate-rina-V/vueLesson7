<template>
  <div id="app">
    <BaseSlot>
      <p>This is content in the default slot</p>
    </BaseSlot>

    <MultiSlot>
      <template v-slot:header>
        <h1>Custom Header</h1>
      </template>
      <template v-slot:body>
        <p>Custom Body Content</p>
      </template>
      <template v-slot:footer>
      </template>
    </MultiSlot>

    <FallbackSlot>
      <template v-slot:content>
        <p>Custom Content</p>
      </template>
    </FallbackSlot>

    <ScopedSlot v-slot:message="scopedData">
      <p>{{ scopedData.message }}</p>
    </ScopedSlot>

    <Modal>
      <template v-slot:header>
        <h2>Modal Header</h2>
      </template>
      <template v-slot:body>
        <p>This is the modal body.</p>
      </template>
      <template v-slot:footer>
      </template>
    </Modal>

    <MyForm />

    <div v-color="'green'">This text is green.</div>
    <div v-directive:background="'yellow'">This background is yellow.</div>
    <div v-tooltip="'Tooltip text'">Hover over me for a tooltip.</div>
    <div v-draggable class="draggable-box">Drag me!</div>
  </div>
</template>

<script>
import BaseSlot from './components/BaseSlot.vue';
import MultiSlot from './components/MultiSlot.vue';
import FallbackSlot from './components/FallbackSlot.vue';
import ScopedSlot from './components/ScopedSlot.vue';
import Modal from './components/Modal.vue';
import MyForm from './components/MyForm.vue';

export default {
  name: 'App',
  components: {
    BaseSlot,
    MultiSlot,
    FallbackSlot,
    ScopedSlot,
    Modal,
    MyForm,
  },
};
</script>
