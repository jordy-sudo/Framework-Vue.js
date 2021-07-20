<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Edicion de articulo</h2>

        <form class="mid-form" @submit.prevent="save()">
          <div class="form-group">
            <label for="title">Titulo</label>
            <input type="text" name="title" v-model="article.title" />
          </div>
          <div class="form-group">
            <label for="content">Contenido</label>
            <textarea name="content" v-model="article.content" />
          </div>
          <div class="form-group">
            <label for="img">Imagen</label>
            <input
              style="margin-top: 20px; margin-botton: 20px"
              type="file"
              id="file"
              ref="file"
              name="file0"
              @change="fileChange()"
            />
          </div>
          <div class="clearfix" />
          <input
            style="margin-top: 25px"
            type="submit"
            value="Enviar"
            class="btn btn-success"
          />
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Article from "../models/Article";
import Global from "../Global";
import swal from "sweetalert2";
export default {
  name: "EditarArticulo",
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      file: "",
      isEdit: true,
    };
  },
  mounted() {
    var id = this.$route.params.id;
    this.getArticles(id);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
    },
    getArticles(id) {
      axios.get(this.url + "article/" + id).then((res) => {
        if (res.data.status == "succes") {
          this.article = res.data.articulo_consultado;
          console.log(this.article);
        }
      });
    },
    save() {
        var articleId= this.$route.params.id
      axios.put(this.url + "article/"+ articleId, this.article).then((resp) => {
        if (resp.data.status == "success") {
          const formData = new FormData();
          formData.append("file0", this.file, this.file.name);
          axios
            .post(
              this.url + "upload-image/" + resp.data.article._id,
              formData
            )
            .then((resp) => {
              if (resp.data.article) {
                swal.fire(
                  "Edicion",
                  "Se a Editado el registro correctamente :)",
                  "success"
                );
                this.article = resp.data.article;
                this.$router.push("/detalle/"+this.article._id);
              } else {
                console.log("aiuda");
                swal.fire(
                  "Cancelled",
                  "Your imaginary file is safe :)",
                  "error"
                );
              }
            });
        }
      });
    },
  },
};
</script>