import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//importo los componentes
import LastArticles from './components/LastArticles.vue' 
import Blog from './components/Blog.vue'
import Formulario from './components/Formulario.vue'
import Pruebas from './components/PaginasDePruebas.vue'
import Error404 from './components/Error404.vue'
import Peliculas from './components/Peliculas.vue'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

//hacer que vue utilice esta dependencia
Vue.use(VueRouter);
Vue.use(Vuelidate);

//creo las rutas
const routes=[
  {path:'/home', component:LastArticles},
  {path:'/blog', component:Blog},
  {path:'/formulario', component:Formulario},
  {path:'/peliculas', component:Peliculas},
  {path:'/paginaPruebas/:id?',name:'pagina',component:Pruebas},
  {path:'/', component:LastArticles},
  {path:'*', component:Error404}
];

//objeto del router
const router= new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
