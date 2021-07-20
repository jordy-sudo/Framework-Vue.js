<template>
  <article class="article-item">
    <div class="image-wrap">
      <img :src="peliculaRsv.img" :alt="peliculaRsv.title" :title="peliculaRsv.title" />
    </div>

    <h2>{{ peliculaRsv.title }}</h2>
    <span class="date"> Hace 5 minutos </span>
    <a href="#">Leer más</a>
    <input type="button" value="marcar como favorita" @click="PasarFavoritaAlPadre(peliculaRsv)"/>
    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Pelicula",
  props: ["peliculaRsv"],

  methods:{
    PasarFavoritaAlPadre(peliculaAlpadre){
      //alert('se paso datos al padre')
      this.$emit('favorita',peliculaAlpadre)
    }
  }
  
};
</script>