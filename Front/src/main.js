import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import listado from './listadoDocumento.vue';
import Ingreso from './rellenarDocumento.vue';
import Gestion from './gestionDocumento.vue';
import Sugerir from './sugerir.vue';
import Ingresar from './ingresarSolicitud.vue';
import ListaE from './listaEmpleado.vue';
import VueResource from 'vue-resource';
import VModal from 'vue-js-modal'
require("./style.scss");



import App from './Menu.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VModal, { dialog: true, dynamic : true , injectModalsContainer : true });

const routes = [
  { path: '/index', alias: '/', component: Index},
  { path: '/documentos', alias: '/listado', component: listado},
  { path: '/ingreso', alias: '/documento', component: Ingreso},
  { path: '/gestion', alias: '/gestionD', component: Gestion},
  { path: '/ingresar', alias: '/registro', component: Ingresar},
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