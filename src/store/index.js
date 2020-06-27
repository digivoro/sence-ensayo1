import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comentarios: [
      {
        nombre: "Don pollo",
        calificacion: 5,
        comentario:
          "Muy bueno. Distinctio nisi dolore incidunt dicta amet. Possimus saepe veniam voluptates inventore, iure vitae ipsum quas tempore unde reiciendis porro pariatur quis libero atque nisi repellendus ducimus id commodi assumenda dignissimos veritatis voluptate quasi nemo! Quae nobis perspiciatis quod aspernatur debitis repellendus. Perspiciatis."
      },
      {
        nombre: "Hola Kease",
        calificacion: 2,
        comentario:
          "Malardo. Pésimo servicio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi dolore incidunt dicta amet. Possimus saepe veniam voluptates inventore, iure vitae ipsum quas tempore unde reiciendis porro pariatur quis libero atque nisi repellendus ducimus id commodi assumenda dignissimos veritatis voluptate quasi nemo! Quae nobis perspiciatis quod aspernatur debitis repellendus. Perspiciatis."
      },
      {
        nombre: "Lala Lolo",
        calificacion: 4,
        comentario:
          "Excelente, aunque faltó ola. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi dolore incidunt dicta amet. Possimus saepe veniam voluptates inventore, iure vitae ipsum quas tempore unde reiciendis porro pariatur quis libero atque nisi repellendus ducimus id commodi assumenda dignissimos veritatis voluptate quasi nemo! Quae nobis perspiciatis quod aspernatur debitis repellendus. Perspiciatis."
      },
      {
        nombre: "Limonagrio",
        calificacion: 1,
        comentario:
          "Inaceptable. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi dolore incidunt dicta amet. Possimus saepe veniam voluptates inventore, iure vitae ipsum quas tempore unde reiciendis porro pariatur quis libero atque nisi repellendus ducimus id commodi assumenda dignissimos veritatis voluptate quasi nemo! Quae nobis perspiciatis quod aspernatur debitis repellendus. Perspiciatis."
      },
      {
        nombre: "John Lennon",
        calificacion: 5,
        comentario: "All you need is Dragon Ball. Perspiciatis."
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
