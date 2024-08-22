// Розробіть міксін, який додає валідацію для форми в компоненті.

export default {
  data() {
    return {
      errors: {}
    };
  },
  methods: {
    validateField(fieldName, value) {
      switch (fieldName) {
        case 'email':
          if (!this.validateEmail(value)) {
            this.errors[fieldName] = 'Invalid email address';
          } else {
            delete this.errors[fieldName];
          }
          break;
        case 'password':
          if (value.length < 6) {
            this.errors[fieldName] = 'Password must be at least 6 characters long';
          } else {
            delete this.errors[fieldName];
          }
          break;
      }
    },
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    validateForm(formFields) {
      this.errors = {};
      formFields.forEach(field => {
        this.validateField(field.name, field.value);
      });
      return Object.keys(this.errors).length === 0;
    }
  }
};
