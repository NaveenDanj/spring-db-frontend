<template>
  <div>
    <v-app-bar app color="#010203" dark elevation="0">
      <v-btn text fab small class="mr-5" @click="() => (drawer = !drawer)">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="align-center">
        <h3>Dashboard</h3>
        <label style="color: #ff7750">Hi there,</label
        ><label> Great to see you again</label>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" dark color="#010203">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> SpringDB </v-list-item-title>
          <v-list-item-subtitle> @Username </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link @click="handleNavigate(item)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div style="position: fixed; bottom: 0; width: 100%; " class="pa-5" rounded>
        
        <div style="background-color : #161635; height : 250px; border-radius: 10px;" >
          <img src="https://templates.iqonic.design/server360/html-dark/images/page-img/side-bkg.png" style="width : 130px; position: relative; top: -40px; left : 10px;" />
          <div style="margin-top : -40px;" class="pa-2 white--text">
            <h3 style="margin-bottom : 15px;">Upgrade to PRO</h3>
            <label>Become a pro user & enjoy more.</label>
            <v-btn class="mt-5 black--text" color="white" dark block>View More</v-btn>
          </div>
        </div>

      </div>

    </v-navigation-drawer>

    <div class="mainContainer">
      <DashboardPage v-if="active == 'Dashboard' " />
      <Backup v-if="active == 'Backups' " />
      <AppManager v-if="active == 'App Manager' " />
      <User v-if="active == 'Users' " />
      <Instance v-if="active == 'Instance' " />
      <DatabaseVisualizer />

      <!-- <v-footer color="#080E15" class="mt-10" dark>
        <v-col cols="12" class="d-flex justify-space-between" >

          <div class="text-left">
            <strong>Privacy Policy</strong>
            <strong class="ml-2">Terms of Use</strong>
          </div>

          <div class="text-right">
            <strong>Copyright 2020 Server360 All Rights Reserved.</strong>
          </div>

        </v-col>
      </v-footer> -->

    </div>

  </div>
</template>

<script>
import DashboardPage from "./Dashboard/DashboardPage.vue";
import Backup from "./Dashboard/Backup.vue";
import AppManager from "./Dashboard/AppManager.vue";
import User from "./Dashboard/User.vue";
import Instance from "./Dashboard/Instance.vue";
import DatabaseVisualizer from "./Dashboard/DatabaseVisualizer.vue";

export default {
  name: "Home",
  data() {
    return {
      drawer: true,
      active : "Dashboard",
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard"},
        { title: "Backups", icon: "mdi-upload" },
        { title: "App Manager", icon: "mdi-application-braces-outline"},
        { title: "Users", icon: "mdi-account" , to : 'Users' },
        { title: "Visualizer", icon: "mdi-database-eye"},
        { title: "Instance", icon: "mdi-desktop-classic "},
      ],
      right: null,
    };
  },
  components: { DashboardPage, Backup, AppManager, User, Instance, DatabaseVisualizer },

  methods : {

    handleNavigate(item) {
      this.active = item.title;
    },

  }

};
</script>

<style scoped>
.mainContainer {
  background-color: #010203;
  min-height: 100vh;
  padding: 20px;
}
</style>