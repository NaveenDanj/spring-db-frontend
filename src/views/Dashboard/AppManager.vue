<template>
  <div>
    <v-card color="#080E15" dark class="pa-2">
      <div class="d-flex justify-space-between">
        <h2 class="white--text mb-3">App Manager</h2>
        <AddAppManagerDialog />
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

              <v-btn dark text>
                <v-icon>mdi-file-export-outline</v-icon>
              </v-btn>

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
export default {
    data() {
        return {
            page: 1,
            headers: [
                {
                    text: "App Name",
                    align: "start",
                    sortable: false,
                    value: "name",
                },
                { text: "Status", value: "status", sortable: false },
                { text: "Last Run", value: "last", sortable: false },
                { text: "Runs every", value: "every", sortable: false },
                { text: "Runs on", value: "on", sortable: false },
                { text: "Total Backups", value: "total", sortable: false },
                { text: "Action", value: "action", sortable: false },
            ],
            desserts: [
                {
                    name: "Test App",
                    status: "Active",
                    role: "Admin",
                    last: "2018/03/29 @07:25",
                    every: "1 hour",
                    on: "Monday",
                    total: "10",
                },
                // {
                //   name: "Test App",
                //   status: "Active",
                //   role: "Admin",
                //   last: "2018/03/29 @07:25",
                //   every: "1 hour",
                //   on: "Monday",
                //   total: "10",
                // },
                // {
                //   name: "Test App",
                //   status: "Active",
                //   role: "Admin",
                //   last: "2018/03/29 @07:25",
                //   every: "1 hour",
                //   on: "Monday",
                //   total: "10",
                // },
                // {
                //   name: "Test App",
                //   status: "Active",
                //   role: "Admin",
                //   last: "2018/03/29 @07:25",
                //   every: "1 hour",
                //   on: "Monday",
                //   total: "10",
                // },
            ],
        };
    },
    components: { AddAppManagerDialog, EditAppDialog }
};
</script>