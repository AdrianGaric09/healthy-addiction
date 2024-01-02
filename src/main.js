    import { createApp } from 'vue';
    import App from './App.vue';
    import router from './router';
    import i18n from './i18n'
    import store from './store/index'
    import { IonIcon } from '@ionic/vue';

    store.dispatch('fetchUser')


    const app = createApp(App);

    app.component('ion-icon', IonIcon);

    app.use(router);
    app.use(i18n);
    app.use(store);
    app.mount('#app');
