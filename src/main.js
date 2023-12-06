import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '../src/assets/base.css'

import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Button from 'primevue/button';

const app = createApp(App)

app.use(createPinia())

app.use(PrimeVue);
app.use(router);

app.component('Prime_Card', Card);
app.component('Prime_Button', Button);

app.use(router)
// app.use(PrimeVue)

app.mount('#app')
