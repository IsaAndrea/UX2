import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import listado from './listadoDocumento.vue';
import ListaE from './listaEmpleado.vue';
import VueResource from 'vue-resource';
import VModal from 'vue-js-modal';
import VueCharts from 'vue-chartjs'

require("./style.scss");



import App from './Menu.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VModal, { dialog: true, dynamic : true , injectModalsContainer : true });
Vue.use(VueCharts);


const routes = [
  { path: '/index', alias: '/', component: Index},
  { path: '/documentos', alias: '/listado', component: listado},
  { path: '/reclamosF', alias: '/reclamos', component: ListaE}
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})