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
                <v-list-item v-for="item in settings" :key="item.title" link>
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
        <div>
          <v-card color="#080E15" dark>
            <div class="pa-3">
              <v-text-field
                outlined
                dense
                placeholder="Search"
                append-icon="mdi-magnify"
                style="width: 100%"
              />
            </div>
          </v-card>

          <v-card color="#080E15" dark class="mt-5">
            <v-card-text>
              <h2 class="white--text">All Backups</h2>

              <div></div>

              <div class="mt-5">
                <v-row>
                  <v-col
                    cols="12"
                    md="4"
                    sm="6"
                    v-for="(index, item) in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
                    :key="index"
                  >
                    <v-card style="cursor: pointer">
                      <div
                        style="
                          width: 100%;
                          background-color: #454c66;
                          height: 130px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        "
                      >
                        <div>
                          <center>
                            <v-icon style="margin-bottom: 15px"
                              >mdi-content-copy</v-icon
                            ><br />
                            <label>{{ item }} 12/07/2022 10:59pm</label>
                          </center>
                        </div>
                      </div>

                      <v-card-actions>
                        <div>
                          <label>Test App</label><br />
                          <label style="font-size: 10px"
                            >12 rows affected</label
                          >
                        </div>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>

                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                  "
                  class="mt-7"
                >
                  <div class="text-center">
                    <v-pagination v-model="page" :length="6"></v-pagination>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
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
      ],

      page: 1,
    };
  },
};
</script>
