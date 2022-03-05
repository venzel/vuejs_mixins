import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.mixin({
    created() {
        console.log('Mixin global criado!');
    },
});

new Vue({
    render: (h) => h(App),
}).$mount('#app');
