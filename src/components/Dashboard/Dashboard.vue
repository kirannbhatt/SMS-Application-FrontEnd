<template>
    <v-app id="inspire" light>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <side-bar></side-bar>
      <!-- <v-list dense>
        <v-list-tile v-for="item in items" :key="item.title" @click="hello()">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list> -->
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{titlee}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>
<script>
import Sidebar from './Sidebar'

export default {
  data: () => ({
    drawer: true,
    titlee: window.location.pathname.substring(11).toUpperCase()
  }),
  props: {
    source: String
  },
  components: {
    'side-bar': Sidebar
  }
}
</script>
