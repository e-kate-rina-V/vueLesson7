export default {
    created() {
        console.log('Global mixin - Component has been created.');
    },
    methods: {
        globalMethod() {
            console.log('This is a global method.');
        }
    }
};
