<template>
  <div>
    <v-row style="min-height: 80vh">
      <v-col cols="12" md="4" style="min-height: 100%">
        <v-card color="#080E15" dark style="height: 100%">
          <v-card-text class="pa-5">
            <div>
              <h2 class="white--text">Tables</h2>

              <v-select
                outlined
                dense
                class="mt-5"
                label="Select App"
                :items="['AITPOS', 'NLB', 'ILM']"
              />

              <br />
              <v-divider />

              <v-list dense nav class="mt-0" color="#080E15">
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
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="8" style="min-height: 100%"> </v-col>
    </v-row>
  </div>
</template>

<script>
import AllBackups from "../../components/Backup/AllBackups.vue";
import BackupSettings from "../../components/Backup/BackupSettings.vue";
export default {
  data() {
    return {
      items: [
        { title: "AITPOS", icon: "mdi-table" },
        { title: "Pharmacy", icon: "mdi-table" },
        { title: "Gov-ERP", icon: "mdi-table" },
        { title: "ILM Shipping", icon: "mdi-table" },
        { title: "NLB Digital Lottery", icon: "mdi-table" },
      ],

      page: 1,
      activeSettings: "All Backups",
    };
  },
  components: { AllBackups, BackupSettings },

  methods: {
    handleNavigateSettings(item) {
      this.activeSettings = item.title;
    },
  },
};
</script>
