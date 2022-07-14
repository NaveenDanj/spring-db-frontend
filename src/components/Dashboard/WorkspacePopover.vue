<template>
  <v-menu
    bottom
    transition="scale-transition"
    offset-y
    min-width="300"
    style="width: 250px"
    close-on-click
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab text v-bind="attrs" v-on="on">
        <v-icon>mdi-briefcase</v-icon>
      </v-btn>
    </template>
    <v-card
      color="#080E15"
      dark
      style="
        border: 1px solid black;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
      "
    >
      <v-toolbar color="#7E62FA" elevation="0">
        <v-toolbar-title>
            <div style=" display : flex; flex-direction : column; ">
                <label>Hello Barry Tech</label>
                <label style="font-size : 12px;">Available</label>
            </div>
        </v-toolbar-title>
      </v-toolbar>

        <v-list color="#080E15">

          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="#4E37B2">mdi-account-group-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Naveen's Workspace</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="#4E37B2">mdi-account-group-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Naveen's Workspace</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="#4E37B2">mdi-account-group-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Naveen's Workspace</v-list-item-title>
          </v-list-item>

        </v-list>

    </v-card>
  </v-menu>
</template>