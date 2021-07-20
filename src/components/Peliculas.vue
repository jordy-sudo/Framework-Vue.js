
<template>
  <div class="general">

    <div class="center">
      <section id="content">
        <h1 class="subheader">Lisitado de Peliculas</h1>
        <h2>La pelicula favorita es : {{favorita}}</h2>
        <!--Listado articulos-->
        <div id="articles">
          <div v-for="pelicula in peliculas" v-bind:key="pelicula.title">
            <Pelicula :peliculaRsv="pelicula"  @favorita="HalleguadoDelhijo" />
          </div>
          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula.vue";

export default {
  components: {
    Pelicula,

  },
  name: "Peliculas",
  methods:{
    HalleguadoDelhijo(LLeguaalpadre){
      this.favorita=LLeguaalpadre;
    }
  },
  data() {
    return {
      favorita:null,
      peliculas: [
        {
          title: "Fores Gump",
          img: "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/93/24/15/20244789.jpg",
        },
        {
          title: "Spiderman",
          img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-remastered-ps5-esquire-4-1605525077.jpg?crop=0.524xw:1.00xh;0.298xw,0&resize=640:*",
        },
        {
          title: "Una voz silenciosa Anime",
          img: "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/05/02/1331856063825_2/rese%C3%B1a-una-voz-silenciosa.jpeg",
        },
      ],
    };
  },
};
</script>