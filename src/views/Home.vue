<template>
  <v-app-bar app color="#010203" dark>
    <div class="align-center">
      <h3>Dashboard</h3>
      <label style="color: #ff7750">Hi there,</label
      ><label> Great to see you again</label>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Home",
};
</script>
