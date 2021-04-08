<template>
  <v-app
    id="sandbox"
    :style="
      $store.getters.hasTopBar ? `padding-top: 0px;` : `padding-top: 44px;`
    "
  >
    <v-main>
      <router-view></router-view>
    </v-main>
    <vue-scroll-progress-bar
      @complete="handleComplete"
      height="5px"
      @containerClass="containerClass"
      backgroundColor="#41aaaa"
    />
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({
    containerClass: { "progress-bar-container--container": true }
  }),
  methods: {
    initialize() {},
    handleComplete() {}
  },
  computed: {},
  created() {
    if (process.env.NODE_ENV === "development") {
      this.$store.commit("setUserMeta", {
        firstname: "John",
        surname: "Doe",
        emails: ["john.doe@email.com"],
        roles: ["admin"]
      });
      console.log(
        "Development user info roles: " + this.$store.getters.getUserMeta.roles
      );
    }
  },
  mounted() {
    this.$vuetify.theme.dark = this.$store.getters.isDarkTheme;
    this.$i18n.locale = this.$store.getters.getLocale;
  }
};
</script>

<style></style>
