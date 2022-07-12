<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card color="#080E15" dark>
        <v-card-text>
          <h2>Instanse Users</h2>

          <div class="pa-3">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-0"
              style="background-color: #080e15"
              hide-default-footer
            ></v-data-table>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">

      <v-card color="#341A12" dark style="height : 100%">

        <v-card-text>

          <div class="pa-3 d-flex justify-space-between" >
            
            <div style="width : 80px; height : 80px; border-radius : 40px; background-color : white; border : 10px solid #FF9273"  class="pa-5">
              <v-icon class="my-auto mx-auto" color="#FF9273">mdi-math-log</v-icon>
            </div>

            <div>
              <label>Error Rate</label><br/>
              <h1>54.754%</h1>
            </div>

          </div>

          <div class="mt-5 white--text" >

            <div class="d-flex justify-space-between">

              <div class="my-auto">
                <h3>perfBenchmark_invalid_v1</h3>
                <label>us-west-2</label>
              </div>

              <div style="background-color : white; border-radius : 40px;" class="pa-3 black--text my-auto">
                <label>45.365</label>
              </div>

            </div>

            <div class="d-flex justify-space-between mt-4">

              <div class="my-auto">
                <h3>perfBenchmark_invalid_v1</h3>
                <label>us-west-2</label>
              </div>

              <div style="background-color : white; border-radius : 40px;" class="pa-3 black--text my-auto">
                <label>45.365</label>
              </div>

            </div>

            <div class="d-flex justify-center mt-5" center style="width :100%;">
              <label style="cursor: pointer; ">View all</label>
            </div>

          </div>

        </v-card-text>

      </v-card>

    </v-col>

  </v-row>

</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Email",
          align: "start",
          sortable: false,
          value: "email",
        },
        { text: "Full Name", value: "name", sortable: false },
        { text: "Role", value: "role", sortable: false },
      ],
      desserts: [
        {
          email: "naveenhettiwaththa@gmail.com",
          name: "Naveen Hettiwaththa",
          role: "Admin",
        },
        {
          email: "hettiwaththanaveen@gmail.com",
          name: "Hetti Naveen",
          role: "User",
        },
        {
          email: "naveenhettiwaththa@gmail.com",
          name: "Naveen Hettiwaththa",
          role: "Admin",
        },
        {
          email: "hettiwaththanaveen@gmail.com",
          name: "Hetti Naveen",
          role: "User",
        },
      ],
    };
  },
};
</script>