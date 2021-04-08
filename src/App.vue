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
    //console.log("Login in kibana");
    //login();
    //console.log("Login in kibana done");
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
    } /*else {
      fetchRoles().then(data => {
        if (data) {
          this.$store.commit("setUserMeta", data);
        }
      });
    }*/
  },
  mounted() {
    this.$vuetify.theme.dark = this.$store.getters.isDarkTheme; // necessary to apply on refresh
    this.$i18n.locale = this.$store.getters.getLocale;
  }
};
</script>

<style>
/*.v-application,
.v-application .headline {
}
.v-sheet.v-card {
  border-radius: 1px !important;
}
.container--fluid {
  height: 100%;
  padding: 0;
}

.theme--dark.v-application {
  background-color: #000028 !important;
  color: #ffffff;
}
.theme--dark.v-sheet {
  background-color: #333353 !important;
  border-color: #333353 !important;
  color: #fff;
}
.theme--dark.v-card {
  background-color: #333353;
}
.theme--dark.v-navigation-drawer,
.theme--dark.v-navigation-drawer__content {
  background-color: #333353 !important;
}
.theme--light .avatar {
  border-color: rgba(0, 0, 0, 0.54);
  background-color: rgba(0, 0, 0, 0.54);
  color: #ffffff;
}
.theme--dark .avatar {
  border-color: #ffffff;
  background-color: #ffffff;
  color: #333353;
}
.v-application .warning--text,
.v-application .error--text,
.v-application .success--text {
  background-color: white !important;
}
.theme--dark.v-data-table {
  background-color: inherit !important;
}
.theme--dark .v-content {
  background-color: inherit !important;
}
.theme--dark.v-tabs-items,
.theme--light.v-tabs-items {
  background-color: transparent !important;
}
.theme--dark.v-tabs > .v-tabs-bar {
  background-color: inherit !important;
}
.progress-bar-container--container {
  position: fixed;
  width: 100%;
  top: calc(100vh - 2px) !important;
  left: 0;
}
.avatar {
  border-radius: 50%;
  min-width: 40px;
  min-height: 40px;
  width: 100%;
  height: 100%;
  max-width: 59px;
  max-height: 59px;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  font-weight: bold;
}
.list-font .v-list-item .v-list-item__title {
  font-size: 15px;
}
.list-font .v-list-item .v-list-item__subtitle {
  font-size: 12px;
}
.v-navigation-drawer .v-list {
  padding-top: 0;
} /*
.dashboard-md-card-title {
  /* height: 40px; */
/* padding: 8px 16px !important;
}*/
/*.v-content {
  background: url("../public/images/background.png") no-repeat 100% fixed;
  background-position-x: center;
  background-position-y: bottom;
  background-size: 1200px 450px;
  background-attachment: fixed;
  background-origin: initial;
  background-clip: initial;
  background-color: #fafafa;
}*/
/*.sectionHeadline {
  font-size: 32px !important;
}*/
/* .headlinePadder {
  padding: 5px 10px 5px 10px;
} */
/* .overview-image > div.v-image__image.v-image__image--contain {
  opacity: 0.55 !important;
} */
/* .theme--light.v-btn.v-btn--icon {
  color: #ffffff;
} */
</style>
