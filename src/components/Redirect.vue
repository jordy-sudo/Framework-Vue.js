<template>
    <h2>Redirigiendo....!</h2>
</template>

<script>
export default {
    name:'Redirect',
    mounted(){
        var busqueda = this.$route.params.busqueda;
        this.$router.push('/busqueda/'+busqueda)
    }
}
</script>