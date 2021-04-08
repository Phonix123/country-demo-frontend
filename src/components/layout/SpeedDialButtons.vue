<template>
  <v-card flat>
    <v-tooltip right>
      <template v-slot:activator="{ on }">
        <v-fab-transition>
          <v-btn
            fab
            color="primary"
            bottom
            left
            small
            fixed
            outlined
            style="border: 0px;"
            v-show="!$store.state.primaryDrawer.model"
            @click.stop="
              $store.state.primaryDrawer.model = !$store.state.primaryDrawer
                .model
            "
            v-on="on"
          >
            <v-icon>mdi-menu-open</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <span>{{ $t("dashboard.showNavigationMenu") }}</span>
    </v-tooltip>

    <!-- <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-fab-transition>
          <v-btn
            fab
            color="primary"
            bottom
            right
            small
            fixed
            outlined
            style="border: 0px;margin-bottom: 50px;"
            v-show="
              !$store.state.rightDrawer.model &&
                $store.state.rightDrawer.navButton
            "
            @click.stop="
              $store.state.rightDrawer.model = !$store.state.rightDrawer.model
            "
            v-on="on"
          >
            <v-icon>mdi-menu-open</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <span>{{ $t("dashboard.showFilteringMenu") }}</span>
    </v-tooltip> -->

    <!-- <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn
          fab
          color="primary"
          bottom
          right
          fixed
          small
          style="z-index: 1000;"
          v-show="allButSettings"
          @click="editItem"
          v-on="on"
        >
          <v-icon>mdi-tray-plus</v-icon>
        </v-btn>
      </template>
      <span>{{
        $t("dashboard.createNewMaintenanceEvent.createNewMaintenanceEvent")
      }}</span>
    </v-tooltip> -->
  </v-card>
</template>

<script>
export default {
  components: {},
  data: () => ({
    dialogEvent: false
    //settings: false
  }),
  computed: {
    allButSettings() {
      // // console.log("Path changed : " + this.$route.path);
      return this.$route.path !== "/settings";
    }
  },
  methods: {
    editItem() {
      // console.log("Clicked to create new item");
      this.dialogEvent = true;
    },

    hideDialog(variable) {
      console.log("Hidding " + variable);
      this.dialogEvent = false;
    }
  }
};
</script>
<style scoped></style>
