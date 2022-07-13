<template>
  <v-dialog v-model="dialog" persistent width="700px" dark>
    <template v-slot:activator="{ on, attrs }">
      <v-btn rounded color="#FF7750" dark v-bind="attrs" v-on="on">
        Add new App
      </v-btn>
    </template>

    <v-card color="#080E15">
      <v-toolbar color="#161635" elevation="0">
        <v-toolbar-title>Add new App</v-toolbar-title>
        <v-spacer />
        <v-btn fab text @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-4">
        <form class="mt-2">
          <div>
            <v-text-field outlined dense label="App Name" value="POS APP" />
          </div>

          <div>
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field outlined dense label="APP KEY" value="POS APP" />
              </v-col>

              <v-col cols="12" md="4">
                <v-btn rounded outlined color="success">Generate</v-btn>
              </v-col>
            </v-row>
          </div>

          <div class="mt-3 mb-10">
            <h4>Add / Remove Users to the app</h4>
            
            <v-text-field 
                outlined 
                dense
                class="mt-1" 
                append-icon="mdi-plus"
                placeholder="Add User"
            />

            <v-list dense nav class="mt-2" style="margin-top : -20px;">
              <v-list-item
                v-for="item in settings"
                :key="item.title"
                link
                @click="handleNavigateSettings(item)"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon >
                        <v-icon color="red accent-4">mdi-delete</v-icon>
                </v-list-item-icon>


              </v-list-item>
            </v-list>
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