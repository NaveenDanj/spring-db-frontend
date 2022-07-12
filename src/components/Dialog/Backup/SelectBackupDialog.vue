<template>
  <v-dialog v-model="dialog" persistent width="700px" dark>
    <v-card color="#080E15">
      <v-toolbar color="#161635" elevation="0">
        <v-toolbar-title>Backup Document Settings</v-toolbar-title>
        <v-spacer />
        <v-btn fab text @click="handleClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-4">
        <form class="mt-2">
          <v-row>

            <v-col cols="12" md="6">
              <v-text-field outlined dense label="App Name" value="POS APP" />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                outlined
                dense
                label="Created Date"
                value="12/07/2022 10:59pm"
              />
            </v-col>

            <div style="width : 100%;" class="pl-3 mb-5 pr-3">
                <h3 style="margin-bottom : 10px;">Change Log</h3>
                <label  block class="success--text">12 new rows added </label><br/>
                <label class="red--text">5 rows deleted </label>
            </div>

          </v-row>

          <div class="mt-3">
            <h3>Restore Settings</h3>

            <v-radio-group>
              <v-radio
                label="Select Only this Backup"
                color="deep-purple"
                value="only_this"
              />

              <v-radio
                label="Select before this Backup"
                color="deep-purple"
                value="before_this"
              />
            </v-radio-group>

            <v-btn rounded color="success">Restore</v-btn>
          </div>

          <div class="mt-5">
            <h3>Delete Backup</h3>
            <v-btn class="mt-4" rounded color="red">DELETE</v-btn>
          </div>


        </form>

      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["dialog"],

  data() {
    return {};
  },

  methods: {
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>