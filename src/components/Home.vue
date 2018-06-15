<template>
  <v-app>
  <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-btn color="success" to="/login">Login</v-btn>
            <v-btn color="info" to="/signup">SignUp</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld'
}
