<template>
  <v-row>
    <v-col cols="12" md="8">
      <v-card color="#341A12" dark rounded>
        <v-card-title>Welcome back John</v-card-title>

        <v-card-text class="d-flex justify-space-between">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate facilisis velit, vitae fermentum nulla ultrices et.
          </p>
          <img
            style="position: relative; top: -50px"
            class="my-auto"
            width="180"
            height="100"
            src="https://templates.iqonic.design/server360/html-dark/images/page-img/37.png"
          />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card color="#080E15" dark rounded>
        <v-card-text style="display: flex; flex-direction: column; width: 100%">
          <div class="d-flex justify-space-between">
            <div class="d-flex">
              <div
                class="pa-4"
                style="
                  background-color: #392321;
                  border-radius: 10px;
                  width: 50px;
                  height: 50px;
                "
              >
                <label style="color: #df5940; font-size: 14px">B5</label>
              </div>

              <div class="my-auto">
                <label class="ml-5">Loads</label><br />
                <label class="ml-5">Online Participant</label>
              </div>
            </div>
          </div>

          <div class="d-flex justify-space-between mt-10">
            <div class="d-flex">
              <div
                class="pa-4"
                style="
                  background-color: #161635;
                  border-radius: 10px;
                  width: 50px;
                  height: 50px;
                "
              >
                <label style="color: #4d56fb; font-size: 14px">B5</label>
              </div>

              <div class="my-auto">
                <label class="ml-5">Loads</label><br />
                <label class="ml-5">Online Participant</label>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>