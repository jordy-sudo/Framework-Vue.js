<template>
     <div  id="slider" :class="{
             'slider-big':home,
             'slider-small':!home
             
             }">
       <h1>{{titulo}}</h1>
       <router-link to='/blog' class="btn-white" v-if="showBtn">Ir al blog</router-link>
   </div>
</template>

<script>
export default {

        name:'Slider',
        props:['titulo','showBtn','home']

}
</script>