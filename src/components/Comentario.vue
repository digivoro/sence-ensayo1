<template>
  <div>
    <v-card class="mx-auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ email }}</div>
          <v-list-item-title class="headline mb-1">
            {{ nombre }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <p>{{ genero }}, {{ edad }}</p>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar size="80" color="grey">
          <v-img :src="imagen" :alt="nombre"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-card-text>
        <v-rating
          :value="calificacion"
          color="amber"
          dense
          readonly
          size="14"
        ></v-rating>
        <div>{{ comentario }}</div>
      </v-card-text>

      <!-- <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions> -->
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Comentario",

  props: [
    "nombre",
    "calificacion",
    "comentario",
    "email",
    "edad",
    "genero",
    "imagen"
  ]
};
</script>

<style lang="scss" scoped></style>
