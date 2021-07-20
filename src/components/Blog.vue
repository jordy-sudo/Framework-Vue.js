<template>
  <div class="general">
    <slider :titulo="'Blog'" />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
        <div id="articles">
          
            <Article :articuloRe="articles"/>
          <!--AÑADIR ARTICULOS VIA JS-->
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
  name: "Blog",
  mounted() {
    this.getArticles();
  },
  data() {
    return { 
        url:Global.url,
        articles: [] };
  },
  methods: {
    getArticles() {
      axios.get(this.url+"articles").then((res) => {
        if (res.data.status == "succes") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    },
  },
};
</script>