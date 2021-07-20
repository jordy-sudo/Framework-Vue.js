<template>
  <div class="general">
    <slider titulo="Esta es una pagina creada con vue" 
    :showBtn="'true'" :home="'true'"/>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!--Listado articulos-->
        <div id="articles">
          <Article :articuloRe="articles"/>
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
  name: "LastArticles",
    mounted() {
    this.getlastArticles();
  },
  data() {
    return { 
        url:Global.url,
        articles: [] };
  },
  methods: {
    getlastArticles() {
      axios.get(this.url+"articles/true").then((res) => {
        if (res.data.status == "succes") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    },
  },
};
</script>