import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';

// Реєструйте вашу власну директиву глобально, щоб вона була доступна в усьому додатку.
import colorDirective from './directives/v-color';
import directive from './directives/v-directive';
import tooltip from './directives/v-tooltip';
import draggable from './directives/v-draggable';

// Створіть глобальний міксін і додайте його глобально в вашому основному файлі main.js або main.ts.
import globalMixin from './mixins/globalMixin';

const app = createApp(App);

app.directive('color', colorDirective);
app.directive('directive', directive);
app.directive('tooltip', tooltip);
app.directive('draggable', draggable);

app.mixin(globalMixin);

app.mount('#app');


