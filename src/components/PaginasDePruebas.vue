<template>
<div class="general">
    <slider :titulo="'Esta es una pagina creada con vue'"
    />
    <div class="center">
  <section id="content">
    <h2 class="subheader">Pagina de pruebas</h2>
    <h3>{{ id_desde_url }}</h3>
    <button @click="actualizarNombre()">Actualizar nombre</button>
    <h4>{{nombre}}</h4>
    <input type="text" v-model="datos">
    <h2>Cambiado datos desde el input: {{datos}}</h2>
  </section>
    </div>
</div>
</template>

<script>
import Slider from './Slider.vue'
export default {
  components:{
    Slider
  },
  name: "Pruebas",
    created() {
    console.log("Componente creado");
  },
  mounted() {
    this.id_desde_url = "estoy mandando datos :)";
    console.log("Componente montado");
  },

  update() {
    console.log("Componente actualizado");
  },
  destroyed() {
    console.log("Componente eliminado");
  },
  methods:{
      actualizarNombre(){
          this.nombre='Jordy Frameworks';
          console.log(this.nombre)
      }
  },

  data() {
    return {
      id_desde_url: null,
      nombre:'Jordy Sudo',
      datos:''
    };
  },
};
</script>