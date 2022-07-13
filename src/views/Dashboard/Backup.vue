<template>
  <div>
    <v-row style="min-height: 80vh">
      <v-col cols="12" md="4" style="min-height: 100%">
        <v-card color="#080E15" dark style="height: 100%">
          <v-card-text class="pa-5">
            <div>
              <h2 class="white--text">Added Apps</h2>
              <br />
              <v-divider />

              <v-list
                dense
                nav
                class="mt-2"
                color="#080E15"
                style="height: 250px; overflow-y: scroll"
              >
                <v-list-item v-for="item in items" :key="item.title" link>
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>

            <div class="mt-5">
              <h2 class="white--text">Settings</h2>
              <br />
              <v-divider />

              <v-list dense nav class="mt-2" color="#080E15">
                <v-list-item v-for="item in settings" :key="item.title" link @click="handleNavigateSettings(item)">
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="8" style="min-height: 100%">
        <AllBackups v-if="activeSettings == 'All Backups' " />
        <BackupSettings v-if="activeSettings == 'Backup Settings' " />
        <ErrorLog v-if="activeSettings == 'Error Log' " />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AllBackups from "../../components/Backup/AllBackups.vue";
import BackupSettings from "../../components/Backup/BackupSettings.vue";
import ErrorLog from "../../components/Backup/ErrorLog.vue";
export default {
    data() {
        return {
            items: [
                { title: "AITPOS", icon: "mdi-folder-table" },
                { title: "Pharmacy", icon: "mdi-folder-table" },
                { title: "Gov-ERP", icon: "mdi-folder-table" },
                { title: "ILM Shipping", icon: "mdi-folder-table" },
                { title: "NLB Digital Lottery", icon: "mdi-folder-table" },
            ],
            settings: [
                { title: "All Backups", icon: "mdi-folder-table" },
                { title: "Backup Settings", icon: "mdi-cog-outline " },
                { title: "Error Log", icon: "mdi-math-log" },
            ],
            page: 1,
            activeSettings : 'All Backups'
        };
    },
    components: { AllBackups, BackupSettings, ErrorLog },

    methods : {

        handleNavigateSettings(item){
            this.activeSettings = item.title
        }

    }
};
</script>
