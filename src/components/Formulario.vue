<template>
<div class="general">
    <div class="center">
    <section id="content">

                   <h1 class="subheader">Formulario</h1>

                   <form class="mid-form" @submit.prevent="mostrarUsuario()">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" v-model="user.nombre" />
                            <div v-if="!$v.user.nombre.required">
                                Estos campos son requeridos
                            </div>
                            <div v-if="!$v.user.nombre.minLength">
                                El campo debe tener mas caracteres
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" v-model="user.apellido"/>
                            <div v-if="!$v.user.apellidos.required">
                                Estos campos son requeridos
                            </div>
                            <div v-if="!$v.user.apellidos.minLength">
                                El campo debe tener mas caracteres
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="bio">Biografia</label>
                            <textarea name="bio" v-model="user.bio"></textarea>
                            <div v-if="!$v.user.bio.required">
                                Estos campos son requeridos
                            </div>
                            <div v-if="!$v.user.bio.minLength">
                                El campo debe tener mas caracteres
                            </div>
                        </div>

                        <div class="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" v-model="user.genero"/> Hombre 
                            <input type="radio" name="genero" value="mujer" v-model="user.genero"/> Mujer 
                            <input type="radio" name="genero" value="otro" v-model="user.genero"/> Otro
                        </div>
                        <div class="mostrar">
                            <br/>
                            <h1>{{user.nombre}}</h1>
                        </div>
                        <div class="clearfix"></div>

                        <input type="submit" value="Enviar" class="btn btn-success" />

                   </form>
                
            </section>
    </div>
</div>

</template>

<script>
import {required,minLength} from 'vuelidate/lib/validators';

export default {
    components:{
       
    },
    name:'Formulario',
    data(){
       return{
           submitted:false,
             user:{
            nombre:'',
            apellido:'',
            bio:'',
            genero:''
            }
       
       }
         
    } ,
    methods:{
        mostrarUsuario(){
            console.log(this.user)
            this.submitted=true;
            this.$v.$touch();  
            if(this.$v.$invalid){
                return false;
            }
        }
    },
    validations:{
        user:{
            nombre:{
                required,
                minLength: minLength(2)
            },
             apellidos:{
                required,
                minLength: minLength(2)
            },
             bio:{
                required,
                minLength: minLength(10)
            },

        }
    }
}
</script>