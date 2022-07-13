<template>
  <v-dialog v-model="dialog" persistent width="700px" dark>
    <template v-slot:activator="{ on, attrs }">
      <v-btn text dark v-bind="attrs" v-on="on">
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
    </template>

    <v-card color="#080E15">
      <v-toolbar color="#161635" elevation="0">
        <v-toolbar-title>Edit user details</v-toolbar-title>
        <v-spacer />
        <v-btn fab text @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-4">
        <form class="mt-2">
          <div>
            <v-text-field
              outlined
              dense
              label="User Email"
              value="naveenhettiwaththa@gmail.com"
            />
          </div>

          <div>
            <v-select
              label="App"
              outlined
              dense
              multiple
              :items="['AITPOS', 'NLB', 'ILM', 'GOV-ERP']"
            />
          </div>
          
          <div>
            <v-select
              label="Role"
              outlined
              dense
              :items="['Admin', 'Viewer']"
            />
          </div>

          <v-btn color="success" rounded>ADD</v-btn>
          <v-btn color="red" class="ml-2" rounded>CANCEL</v-btn>
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      settings: [
        { title: "naveenhettiwaththa@gmail.com", icon: "mdi-account" },
        { title: "hettiwaththanaveen@gmail.com", icon: "mdi-account" },
      ],
    };
  },
};
</script>