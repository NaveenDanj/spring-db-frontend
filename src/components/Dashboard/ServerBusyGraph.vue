<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-card color="#080E15" dark>
        <v-card-text>
          <h2>Instanse Traffic Source</h2>

          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
            smooth="8"
            size="12"
            fill
            x-small
          ></v-sparkline>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
  }),
};
</script>