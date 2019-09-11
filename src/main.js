// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
// BUS
Vue.use(function(Vue) {
    const bus = new Vue({
        methods: {
            emit(event, ...args) {
                this.$emit(event, ...args);
            },
            on(event, callback) {
                this.$on(event, callback);
            },
            off(event, callback) {
                this.$on(event, callback);
            },
        },
    });
    Vue.prototype.$bus = bus;
});
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
