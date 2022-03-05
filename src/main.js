import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.mixin({
    created() {
        console.log('Mixin global criado!');
    },
});

Vue.filter('inverter', function (value) {
    return value.split('').reverse().join('');
});

new Vue({
    render: (h) => h(App),
}).$mount('#app');
