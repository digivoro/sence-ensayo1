import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comentarios: [
      {
        nombre: "Don Pollo",
        edad: 45,
        calificacion: 5,
        genero: "Hombre",
        email: "gus@polloshermanos.mx",
        imagen: "",
        comentario:
          "Muy bueno. Distinctio nisi dolore incidunt dicta amet. Possimus saepe veniam voluptates inventore, iure vitae ipsum quas tempore unde reiciendis porro pariatur quis libero atque nisi repellendus ducimus id commodi assumenda dignissimos veritatis voluptate quasi nemo! Quae nobis perspiciatis quod aspernatur debitis repellendus. Perspiciatis."
      },
      {
        nombre: "ola kkease",
        edad: 27,
        calificacion: 2,
        genero: "No binario",
        email: "holaquehaces@rae.es",
        imagen: "",
        comentario:
          "Malardo. Pésimo servicio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi dolore incidunt dicta amet. Possimus saepe veniam voluptates inventore, iure vitae ipsum quas tempore unde reiciendis porro pariatur quis libero atque nisi repellendus ducimus id commodi assumenda dignissimos veritatis voluptate quasi nemo! Quae nobis perspiciatis quod aspernatur debitis repellendus. Perspiciatis."
      },
      {
        nombre: "Lala",
        edad: 40,
        calificacion: 3,
        genero: "Mujer",
        email: "lala@31minutos.cl",
        imagen: "",
        comentario:
          "Excelente, aunque le faltó más Lolo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi dolore incidunt dicta amet. Possimus saepe veniam voluptates inventore, iure vitae ipsum quas tempore unde reiciendis porro pariatur quis libero atque nisi repellendus ducimus id commodi assumenda dignissimos veritatis voluptate quasi nemo! Quae nobis perspiciatis quod aspernatur debitis repellendus. Perspiciatis."
      },
      {
        nombre: "Conde Limonagrio",
        edad: 5,
        calificacion: 1,
        genero: "Hombre",
        email: "limon@agrio.ooo",
        imagen: "",
        comentario: "INACEPTABLE!"
      },
      {
        nombre: "John Lennon",
        edad: 30,
        calificacion: 5,
        genero: "Hombre",
        email: "john@beattles.com",
        imagen: "",
        comentario: "All you need is Dragon Ball ♥"
      }
    ]
  },

  mutations: {
    AGREGAR_COMENTARIOS_INICIALES(state, { usuarios, comentarios }) {
      let nuevosComentarios = usuarios.map((usuario, index) => {
        let nuevoComentario = {
          nombre: `${usuario.name.first} ${usuario.name.last}`,
          edad: usuario.dob.age,
          genero: usuario.gender === "female" ? "Mujer" : "Hombre",
          email: usuario.email,
          calificacion: Math.ceil(Math.random() * 5),
          imagen: usuario.picture.large,
          comentario: comentarios[index]
        };
        return nuevoComentario;
      });
      nuevosComentarios.forEach(comentario =>
        state.comentarios.unshift(comentario)
      );
    }
  },

  actions: {
    obtenerListaUsuarios: async function(context, cantidad) {
      let res = await Axios.get(
        `https://randomuser.me/api/?results=${cantidad}`
      );
      console.log(res.data.results);
      return res.data.results;
    },

    obtenerListaComentarios: async function(context, cantidad) {
      let res = await Axios.get(
        `https://baconipsum.com/api/?type=all-meat&paras=${cantidad}&start-with-lorem=1`
      );
      console.log(res.data);

      return res.data;
    },

    crearListaComentarios: async function(
      { commit, dispatch },
      cantidadComentarios
    ) {
      let usuarios = await dispatch(
        "obtenerListaUsuarios",
        cantidadComentarios
      );
      let comentarios = await dispatch(
        "obtenerListaComentarios",
        cantidadComentarios
      );

      commit("AGREGAR_COMENTARIOS_INICIALES", { usuarios, comentarios });
    }
  }
});
