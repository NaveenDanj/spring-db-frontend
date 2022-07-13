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
        <h2 class="white--text">NLB Error Log</h2>

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

    <SelectBackupDialog
      :dialog="openSettingDialog"
      @close="openSettingDialog = false"
    />
  </div>
</template>

<script>
import SelectBackupDialog from "../Dialog/Backup/SelectBackupDialog.vue";
export default {
  data() {
    return {
      page: 1,
      openSettingDialog: false,
      headers: [
        {
          text: "Date",
          align: "start",
          sortable: false,
          value: "date",
        },
        { text: "Message", value: "message", sortable: false },
      ],
      desserts: [
        {
          date: "2020-01-01 @12:00:00",
          message: "Error Message 1",

        },
        {
          date: "2020-01-01 @12:00:00",
          message: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ",

        },
      ],
    };
  },
  methods: {
    handleOpenSettingsDialog() {
      this.openSettingDialog = true;
    },
  },
  components: { SelectBackupDialog },
};
</script>