<template>
  <v-navigation-drawer
    v-model="$store.state.primaryDrawer.model"
    :clipped="$store.state.primaryDrawer.clipped"
    :floating="$store.state.primaryDrawer.floating"
    :mini-variant="$store.state.primaryDrawer.mini"
    :permanent="$store.state.primaryDrawer.type === 'permanent'"
    :temporary="$store.state.primaryDrawer.type === 'temporary'"
    app
    overflow
    :style="$store.getters.hasTopBar ? `margin-top: 0px;` : `margin-top: 44px;`"
  >
    <v-list dense class="list-font">
      <v-list-item style="padding-left: 8px; padding-right: 8px;">
        <v-list-item-avatar style="margin-right: 24px;">
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <div class="avatar" v-on="on">
                {{ firstname === undefined ? "" : firstname.charAt(0)
                }}{{ surname === undefined ? "" : surname.charAt(0) }}
              </div>
            </template>
            <span>{{ firstname }} {{ surname }}</span>
          </v-tooltip>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            >Welcome, {{ firstname }} {{ surname }}</v-list-item-title
          >
          <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item link @click="routeTo('/')">
        <v-list-item-action>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">mdi-home</v-icon>
            </template>
            <span>{{ menuLabels.HOME }}</span>
          </v-tooltip>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ menuLabels.HOME }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    <div class="text-center">
      <v-btn
        text
        icon
        small
        bottom
        fixed
        right
        v-show="$store.state.primaryDrawer.mini"
        @click="changeDrawerWidth"
        :style="
          $store.getters.hasTopBar
            ? `margin-bottom: 0px;`
            : `margin-bottom: 44px;`
        "
      >
        <v-icon>mdi-chevron-double-right</v-icon>
      </v-btn>
      <v-btn
        text
        icon
        small
        bottom
        fixed
        right
        v-show="!$store.state.primaryDrawer.mini"
        @click="changeDrawerWidth"
        :style="$store.getters.hasTopBar ? `` : `margin-bottom: 44px;`"
      >
        <v-icon>mdi-chevron-double-left</v-icon>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>
<script>
import { MENU_LABELS } from "@/utils/constants";
export default {
  data: () => ({
    menuLabels: MENU_LABELS
  }),
  methods: {
    changeDrawerWidth: function() {
      this.$store.state.primaryDrawer.mini = !this.$store.state.primaryDrawer
        .mini;
    }
  },
  computed: {
    firstname() {
      return this.getUser().firstname;
    },
    surname() {
      return this.getUser().surname;
    },
    email() {
      return this.getUser().emails[0];
    }
  }
};
</script>
