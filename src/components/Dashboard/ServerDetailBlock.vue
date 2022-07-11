<template>
  <v-row>
    <v-col cols="12" md="8">
      <v-row>
        <v-col cols="12" md="3">
          <v-card height="280" color="#080E15" class="pa-1" dark>
            <v-card-text>
              <div
                class="pa-3"
                style="
                  background-color: #161635;
                  border-radius: 10px;
                  width: 70px;
                "
              >
                <v-icon style="color: #7f62fb" x-large>mdi-micro-sd</v-icon>
              </div>

              <div class="mt-7">
                <label style="color: #fffff0; font-size: large">STORAGE</label
                ><br />
                <h1 class="mt-2 mb-2 my-auto" style="color: #7f62fb">
                  4.8% <v-icon color="#7f62fb">mdi-arrow-up-thin </v-icon>
                </h1>
                <label>Avg +65%</label>
                <v-progress-linear
                  class="mt-2"
                  value="10"
                  color="#7f62fb"
                ></v-progress-linear>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card height="280" color="#080E15" class="pa-1" dark>
            <v-card-text>
              <div
                class="pa-3"
                style="
                  background-color: #392321;
                  border-radius: 10px;
                  width: 70px;
                "
              >
                <v-icon style="color: #ff7750" x-large>mdi-upload</v-icon>
              </div>

              <div class="mt-7">
                <label style="color: #fffff0; font-size: large">REQ.</label
                ><br />
                <h1 class="mt-2 mb-2 my-auto" style="color: #ff7750">
                  4.8% <v-icon color="#FF7750">mdi-arrow-up-thin </v-icon>
                </h1>
                <label>Avg +65%</label>
                <v-progress-linear
                  class="mt-2"
                  value="30"
                  color="#FF7750"
                ></v-progress-linear>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card height="280" color="#080E15" class="pa-1" dark>
            <v-card-text>
              <div
                class="pa-3"
                style="
                  background-color: #161635;
                  border-radius: 10px;
                  width: 70px;
                "
              >
                <v-icon style="color: #7f62fb" x-large
                  >mdi-desktop-classic
                </v-icon>
              </div>

              <div class="mt-7">
                <label style="color: #fffff0; font-size: large">APPS</label
                ><br />
                <h1 class="mt-2 mb-2 my-auto" style="color: #7f62fb">
                  4.8% <v-icon color="#7f62fb">mdi-arrow-up-thin </v-icon>
                </h1>
                <label>Avg +65%</label>
                <v-progress-linear
                  class="mt-2"
                  value="100"
                  color="#7f62fb"
                ></v-progress-linear>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card height="280" color="#080E15" class="pa-1" dark>
            <v-card-text>
              <div
                class="pa-3"
                style="
                  background-color: #392321;
                  border-radius: 10px;
                  width: 70px;
                "
              >
                <v-icon style="color: #ff7750" x-large>mdi-account</v-icon>
              </div>

              <div class="mt-7">
                <label style="color: #fffff0; font-size: large">USERS</label
                ><br />
                <h1 class="mt-2 mb-2 my-auto" style="color: #ff7750">
                  4.8% <v-icon color="#FF7750">mdi-arrow-up-thin </v-icon>
                </h1>
                <label>Avg +65%</label>
                <v-progress-linear
                  class="mt-2"
                  value="100"
                  color="#FF7750"
                ></v-progress-linear>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" md="4">

      <v-card color="#341A12" dark>
        <v-card-text class="d-flex justify-space-between">
          <div class="d-flex">
            <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value="10"
              color="#FF9273"
            >
              {{ 10 }}
            </v-progress-circular>

            <div class="my-auto ml-4">
              <label style="font-size: 20px; color: #ffffff">Storage</label
              ><br />
              <label style="font-size: 20px; color: #ffffff">Usage</label><br />
            </div>
          </div>

          <div class="my-auto">
            <label style="font-size: 15px; color: #ffffff">12</label><br />
            <label style="font-size: 15px; color: #ffffff">Assigned Users</label
            ><br />
          </div>
        </v-card-text>
      </v-card>

      <v-card class="mt-3" color="#080E15" dark>
        <v-card-text class="d-flex justify-space-between">
          <div class="d-flex">
            <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value="100"
              color="#1EE2AC"
            >
            </v-progress-circular>

            <div class="my-auto ml-2">
                <ul>
                    <li style="color : #FF9273;"><label style="font-size: 15px; ">Total Processes: 61 <v-icon color="#FF9273">mdi-arrow-up-thin </v-icon></label></li>
                    <li><label style="font-size: 15px; color: #7F62FB">Total Threands: 993 <v-icon color="#7F62FB">mdi-arrow-up-thin </v-icon></label></li>
                    <li><label style="font-size: 15px; color: #1EE2AC">Total Handles: 26957 <v-icon color="#1EE2AC">mdi-arrow-up-thin </v-icon></label></li>
                </ul>
            </div>
          </div>

        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
</template>