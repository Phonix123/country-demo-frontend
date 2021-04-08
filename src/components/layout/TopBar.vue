<template>
  <v-app-bar clipped-left app v-if="$store.state.topBar">
    <v-app-bar-nav-icon
      v-if="$store.state.primaryDrawer.type !== 'permanent'"
      @click.stop="
        $store.state.primaryDrawer.model = !$store.state.primaryDrawer.model
      "
    />
    <v-toolbar-title>Demo</v-toolbar-title>
    <v-spacer />
    <v-app-bar-nav-icon
      @click.stop="
        $store.state.rightDrawer.model = !$store.state.rightDrawer.model
      "
      v-if="$store.state.rightDrawer.navButton"
    />
  </v-app-bar>
</template>

<script>
export default {};
</script>
