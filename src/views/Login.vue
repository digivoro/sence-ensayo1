<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Contraseña"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="onLoginClick"
          >
            Enviar
          </v-btn>

          <v-btn color="warning" class="mr-4" @click="reset">
            Borrar datos
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    valid: true,
    email: "test@sence.cl",
    password: "asdf1234",
    emailRules: [
      v => !!v || "Se requiere un E-mail",
      v => /.+@.+\..+/.test(v) || "Ingresa un E-mail valido"
    ],
    passwordRules: [v => !!v || "Se requiere una contraseña"]
  }),

  methods: {
    ...mapActions(["login"]),

    reset() {
      this.$refs.form.reset();
    },

    onLoginClick() {
      this.login({ email: this.email, password: this.password });
    }
  }
};
</script>

<style lang="scss" scoped></style>
