<template>
    <div class="articulo">
        <article class="article-item" v-for="article in articuloRe" :key="article._id">
            <div class="image-wrap">
              <img
                :src="url+'get-image/'+article.img"
                :alt="article.title"
                v-if="article.img"
              />
              <img
                src="https://us.123rf.com/450wm/salamatik/salamatik1801/salamatik180100019/92979836-perfil-an%C3%B3nimo-icono-de-la-cara-persona-silueta-gris-avatar-masculino-por-defecto-foto-de-marcador-d.jpg?ver=6"
                :alt="article.title"
                v-if="!article.img"
              />
            </div>

            <h2>
              <router-link :to="{name:'detalle', params:{id:article._id}}">
                {{article.title}}
              </router-link>
              </h2>
            <span class="date"> {{article.date | moment("from","now")}} </span>
            <a href="#">Leer más</a>

            <div class="clearfix"></div>
          </article>
    </div>
</template>

<script>
import Global from '../Global';
export default {
    components:{
        
    },
    data(){
        return{url:Global.url}
    },
    props:['articuloRe']
    
}
</script>