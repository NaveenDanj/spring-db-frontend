<template>
  <v-card color="#080E15" dark>
    <div class="pa-3">
      <h3 class="white--text">Backup Settings</h3>
      <br />
      <v-divider />

      <v-form class="mt-5">
        <div>
          <label>Repeat every</label>
          <div class="d-flex">
            <v-text-field outlined dense placeholder="1" />
            <v-select
              outlined
              dense
              placeholder="Hour"
              :items="['Hour', 'Minute']"
              class="ml-5"
              style="width: 100px"
            />
          </div>
        </div>

        <div>
          <label>Repeat on</label>

          <div
            class="d-flex justify-space-between mt-0 pt-1"
            style="width: 55%"
          >
            <v-btn color="deep-purple" fab x-small>S</v-btn>
            <v-btn fab x-small>M</v-btn>
            <v-btn fab x-small>W</v-btn>
            <v-btn color="deep-purple" fab x-small>T</v-btn>
            <v-btn fab x-small>F</v-btn>
            <v-btn color="deep-purple" fab x-small>SAT</v-btn>
          </div>
        </div>

        <div class="mt-5">
          <label>Send Notifications to</label>

          <v-text-field type="email" outlined dense placeholder="Enter Email" />
        </div>

        <div class="mt-0">
          <label>Settings</label>

          <div>
            <v-checkbox
              label="Re-try 3 times if failed" 
              color="deep-purple"
              value="1"
              
            />

            <v-checkbox
              label="Send me a notification when a backup is created"
              color="deep-purple"
              value="1"
              style="margin-top : -20px"
            />

            <v-checkbox
              label="Send me a notification when a backup is failed"
              color="deep-purple"
              value="1"
              style="margin-top : -20px"
            />

            <v-checkbox
              label="Disable backup"
              color="red"
              value="1"
              style="margin-top : -20px"
            />
            
          </div>

        </div>

        <div class="mt-3">

            <v-btn color="deep-purple" class="mr-5" outlined rounded>
                Save
            </v-btn>
            <v-btn color="red"  rounded>
                Cancel
            </v-btn>
            <SelectBackupDialog />
        </div>

      </v-form>
    </div>
  </v-card>
</template>

<script>
import SelectBackupDialog from '../Dialog/Backup/SelectBackupDialog.vue';
export default {
    data: () => ({
        items: ["Dog Photos", "Cat Photos", "", "Potatoes", "Carrots"],
        model: ["Carrots"],
    }),
    components: { SelectBackupDialog }
};
</script>