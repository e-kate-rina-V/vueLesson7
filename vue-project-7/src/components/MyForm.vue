<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="email">Email:</label>
      <input v-model="form.email" @blur="validateField('email', form.email)" type="email" id="email" />
      <span v-if="errors.email">{{ errors.email }}</span>
    </div>
    <div>
      <label for="password">Password:</label>
      <input v-model="form.password" @blur="validateField('password', form.password)" type="password" id="password" />
      <span v-if="errors.password">{{ errors.password }}</span>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import validationMixin from '../mixins/validationMixin';

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      if (this.validateForm([
        { name: 'email', value: this.form.email },
        { name: 'password', value: this.form.password }
      ])) {
        console.log('Form submitted');
      }
    }
  }
};
</script>
