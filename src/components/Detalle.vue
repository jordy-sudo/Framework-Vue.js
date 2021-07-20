<template>
  <div class="center">
    <section id="content">
      <article class="article-item article-detail">
        <div class="image-wrap">
          <img
            :src="url+'get-image/'+articles.img"
            :alt="articles.title"
          />
        </div>

        <h1 class="subheader">{{articles.title}}</h1>
        <span class="date"> {{articles.date | moment("from","now")}} </span>
         <p>{{articles.content}}</p>
        <div class="clearfix"></div>
        <router-link :to="'/editar/'+articles._id" class="btn btn-warning">Editar</router-link>
        <a @click="deleteArticle(articles._id)" class="btn btn-danger">Borrar</a>
      </article>
    </section>
  </div>
</template>

<script>
import Global from '../Global';
import axios from 'axios';
import swal from 'sweetalert2';
export default {
  name: "Detalle",
  mounted() {
      var id = this.$route.params.id
    this.getArticles(id);
  },
  data() {
    return { 
        url:Global.url,
        articles: [] };
  },
  methods: {
    getArticles(id) {
      axios.get(this.url+"article/"+id).then((res) => {
        if (res.data.status == "succes") {
          this.articles = res.data.articulo_consultado;
          console.log(this.articles);
        }
      });
    },
     deleteArticle(id){
    axios.delete(this.url+'article/'+id).then((resp)=>{
      console.log(resp)
       swal.fire(
                  "Eliminar Registro",
                  "El registro se a eliminado correctamente :)",
                  "success")
        this.$router.push('/blog')
    })
  }
  },
 

  
};
</script>