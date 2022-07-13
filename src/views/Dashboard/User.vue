<template>
  <div>
    <v-card color="#080E15" dark class="pa-2">
      <div class="d-flex justify-space-between">
        <h2 class="white--text mb-3">User Manager</h2>
        <AddUserDialog />
      </div>

      <v-divider />

      <v-card-text class="mt-3">
        <div>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-0"
            style="background-color: #080e15"
            hide-default-footer
          >

            <template v-slot:[`item.action`]="{ }">

              <EditAppDialog />

            </template>

          </v-data-table>

          <div class="d-flex justify-center mt-5">
            <v-pagination v-model="page" :length="6"></v-pagination>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import AddAppManagerDialog from "../../components/Dialog/AppManager/AddAppManagerDialog.vue";
import EditAppDialog from "../../components/Dialog/AppManager/EditAppDialog.vue";
import AddUserDialog from "../../components/Dialog/User/AddUserDialog.vue";
export default {
    data() {
        return {
            page: 1,
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
                    role : 'Viewer',
                    apps: "AITPOS",
                },
                {
                    name: "John Doe",
                    email: "johndoe@gmail.com",
                    role : 'Admin',
                    apps: "AITPOS , NLB , ILM",
                },

            ],
        };
    },
    components: { AddAppManagerDialog, EditAppDialog, AddUserDialog }
};
</script>