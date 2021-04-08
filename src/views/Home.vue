<template>
  <v-container fluid justify-start>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ $t("Países do mundo") }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card class="mx-auto"
          ><v-row>
            <v-col cols="12">
              <v-data-table
                :headers="headers"
                :items="dataList"
                :disable-pagination="false"
                :hide-default-footer="false"
                :loading="loading"
                @click:row="handleClick"
                loading-text="A carregar lista de paises do mundo..."
              >
                <!-- <template v-slot:[`item.name`]="{ item }">
                {{ item.name.text }}
              </template> -->
                <template v-slot:[`item.languages`]="{ item }">
                  {{
                    item.languages
                      .map(function(e) {
                        return e.name;
                      })
                      .join(", ")
                  }}
                </template>
                <template v-slot:[`item.currencies`]="{ item }">
                  {{
                    item.currencies
                      .map(function(e) {
                        return e.name;
                      })
                      .join(", ")
                  }}
                </template>
              </v-data-table>
            </v-col></v-row
          >
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="mx-auto">
          <v-row>
            <v-col cols="12" v-if="loadingWeather">
              <v-skeleton-loader
                v-bind="attrs"
                type="list-item-avatar, divider, list-item-three-line, image"
              ></v-skeleton-loader>
            </v-col>

            <v-col
              cols="12"
              v-else-if="!loadingWeather && selected.info.name !== ``"
            >
              <v-row>
                <v-col cols="12">
                  <v-list-item>
                    <v-list-item-content style="border-bottom: 1px solid;">
                      <v-list-item-title class="headline">
                        <img
                          alt="flag"
                          :src="selected.info.flag"
                          width="45"
                          height="30"
                        />

                        {{ selected.info.name }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item>
                        Capital: {{ selected.info.capital }}
                      </v-list-item>
                      <v-list-item>
                        Região: {{ selected.info.region }}
                      </v-list-item>
                      <v-list-item>
                        Área: {{ selected.info.area }}
                      </v-list-item>
                      <v-list-item>
                        Idioma(s):
                        {{
                          selected.info.languages
                            .map(function(e) {
                              return e.name;
                            })
                            .join(", ")
                        }}
                      </v-list-item>
                      <v-list-item>
                        População: {{ selected.info.population }}
                      </v-list-item>
                      <v-list-item>
                        Moeda(s):
                        {{
                          selected.info.currencies
                            .map(function(e) {
                              return e.name;
                            })
                            .join(", ")
                        }}
                      </v-list-item>
                      <v-list-item>
                        ICAO: {{ selected.info.alpha3Code }}
                      </v-list-item>
                      <v-list-item>
                        Latitude: {{ selected.info.latlng[0] }}
                      </v-list-item>
                      <v-list-item
                        >Longitude:
                        {{ selected.info.latlng[1] }}
                      </v-list-item>
                      <v-list-item>
                        Timezones: {{ selected.info.timezones.join(", ") }}
                      </v-list-item>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="6" v-if="selected.weather !== null">
                  <v-row
                    style="display: table-cell;    vertical-align: middle; text-align: center;"
                  >
                    <v-col cols="12">
                      <v-list-item-content>
                        <v-list-item class="display-1"
                          ><v-img
                            width="100"
                            max-width="100"
                            :src="
                              getWeatherIcon(selected.weather.weather[0].icon)
                            "
                          ></v-img>
                          {{ selected.weather.main.temp }}&deg;C</v-list-item
                        >
                        <v-list-item
                          >Humidade:
                          {{ selected.weather.main.humidity }}</v-list-item
                        ><v-list-item
                          >Neblusidade:
                          {{ selected.weather.clouds.all }}%</v-list-item
                        >
                        <v-list-item
                          >Vento: {{ selected.weather.wind.speed }}</v-list-item
                        >
                      </v-list-item-content>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" v-else>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>
                    Por favor, seleccione um país <br />para carregar a sua
                    informação...
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col></v-row
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getListOfCountries, getCountryInformation } from "@/api/requests";
export default {
  name: "Home",
  components: {},
  data: () => ({
    loading: true,
    loadingWeather: false,
    selected: {
      info: { name: "", capital: "" },
      weather: null
    },
    attrs: {
      class: "mb-6",
      boilerplate: true,
      elevation: 2
    },
    headers: [
      {
        text: "Nome",
        sortable: false,
        value: "name"
      },
      {
        text: "ICAO",
        sortable: false,
        value: "alpha3Code"
      } /*,
      {
        text: "Capital",
        sortable: false,
        value: "capital"
      },
      {
        text: "Region",
        sortable: false,
        value: "region"
      },
      {
        text: "Population",
        sortable: false,
        value: "population"
      },
      {
        text: "Area",
        sortable: false,
        value: "area"
      },
      {
        text: "Timezones",
        sortable: false,
        value: "timezones"
      },
      {
        text: "Languages",
        sortable: false,
        value: "languages"
      },
      {
        text: "Latitude/Longitude",
        sortable: false,
        value: "latlng"
      },
      {
        text: "Currencie(s)",
        sortable: false,
        value: "currencies"
      }*/
    ],
    dataList: []
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  mounted() {
    getListOfCountries().then(response => {
      //console.log(response);
      this.dataList = response.map(element => {
        //console.log(element.info);
        return element.info;
      });
      this.loading = false;
    });
  },
  methods: {
    getWeatherIcon(icon) {
      return "http://openweathermap.org/img/w/" + icon + ".png";
    },
    handleClick(value) {
      //console.log(value);
      this.loadingWeather = true;
      getCountryInformation(value.alpha3Code).then(response => {
        console.log(response);
        this.selected = Object.assign({}, response);

        this.loadingWeather = false;
      });
    }
  }
};
</script>
<style scoped>
.v-list-item {
  min-height: 30px;
}
</style>
