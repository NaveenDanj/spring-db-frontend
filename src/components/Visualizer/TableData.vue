<template>
  <div>
    <v-card color="#080E15" dark>
      <div class="pa-3">
        <v-text-field
          outlined
          dense
          placeholder="Search"
          append-icon="mdi-magnify"
          style="width: 100%"
        />
      </div>
    </v-card>

    <v-card color="#080E15" dark class="mt-5">
      <v-card-text>
        <div class="d-flex justify-space-between" >
            <h2 class="white--text my-auto">User Table Data</h2>
            <v-btn outlined x-small fab color="success">
                <v-icon>mdi-database-export</v-icon>
            </v-btn>
        </div>

        <div class="mt-5">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-0"
            style="background-color: #080e15"
            hide-default-footer
          ></v-data-table>

          <div
            style="display: flex; flex-direction: row; justify-content: center"
            class="mt-7"
          >
            <div class="text-center">
              <v-pagination v-model="page" :length="6"></v-pagination>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      openSettingDialog: false,
      headers: [
        {
          text: "User Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "User Email", value: "email", sortable: false },
        { text: "Assigned to", value: "apps", sortable: false },
        { text: "Role", value: "role", sortable: false },
        { text: "", value: "action", sortable: false },
      ],
      desserts: [
        {
          name: "Naveen Dhananjaya",
          email: "naveenhettiwaththa@gmail.com",
          role: "Viewer",
          apps: "AITPOS",
        },
        {
          name: "John Doe",
          email: "johndoe@gmail.com",
          role: "Admin",
          apps: "AITPOS , NLB , ILM",
        },
        {
          name: "John Doe",
          email: "johndoe@gmail.com",
          role: "Admin",
          apps: "AITPOS , NLB , ILM",
        },
        {
          name: "John Doe",
          email: "johndoe@gmail.com",
          role: "Admin",
          apps: "AITPOS , NLB , ILM",
        },
        
      ],
    };
  },
  methods: {
    handleOpenSettingsDialog() {
      this.openSettingDialog = true;
    },
  },
  components: {},
};
</script>