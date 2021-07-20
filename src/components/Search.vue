<template>
  <div class="general">
    <slider :titulo="'Busqueda: '+id" />
    <div class="center">
      <section id="content" >
        <h2 class="subheader" v-if="articles != 0">Articulos Encontrados</h2>
        <h2 class="subheader" v-if="articles.length == 0">Sin resultados</h2>
        <div id="articles" v-if="articles !=0">
          
            <Article :articuloRe="articles"/>
          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
        <div v-if="articles.length == 0">
            <h2>No se a encontrado resultados con tu busqueda</h2>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import axios from "axios";
import Global from '../Global'
import  Article from './Article.vue';
export default {
  components: {
    Slider,
    Article
  },
  name: "Search",
  mounted() {
   this.id = this.$route.params.id
    this.getArticlesSearch(this.id);
  },
  data() {
    return { 
        url:Global.url,
        articles: [],
        id:null };
  },
  methods: {
    getArticlesSearch(id) {
      axios.get(this.url+"search/"+id).then((res) => {
        if (res.data.status == "successs") {
          this.articles = res.data.article;
          console.log(this.articles);
        }
      })
    },
  },
};
</script>