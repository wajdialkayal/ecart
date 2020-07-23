/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import { BootstrapVue, BootstrapVueIcons  } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('categories-component', require('./components/Categories.vue').default);
Vue.component('products-component', require('./components/Products.vue').default);
Vue.component('orders-component', require('./components/Orders.vue').default);
Vue.component('settings-component', require('./components/Settings.vue').default);
Vue.component('banners-component', require('./components/Banners.vue').default);
Vue.component('checkout-component', require('./components/Checkout.vue').default);
Vue.component('contact-component', require('./components/Contact.vue').default);
Vue.component('cart-component', require('./components/Cart.vue').default);
Vue.component('cart-total-component', require('./components/Total.vue').default);
Vue.component('products-menu-component', require('./components/ProductsMenu.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    //TotalStore,
});
