<template>
    <v-app id="inspire" light>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="blue darken-3">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="onSubmit">
                  <v-text-field
                    prepend-icon="person" 
                    id="username" 
                    label="Login"
                    v-model="formData.username" 
                    type="text"></v-text-field>
                  <v-text-field 
                    prepend-icon="lock" 
                    id="password"    
                    label="Password" 
                    v-model="formData.password"
                    type="password"></v-text-field>
                    <v-card-actions>
                      <v-btn color="primary" to="/signup">Signup</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn color="success" type="submit">Login</v-btn>
                    </v-card-actions>
                </v-form>
              </v-card-text>
              
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Form from '../../modules/Form';
import Auth from '../../modules/Auth';
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    if(this.$router.currentRoute.query.ua) {
      this.$toaster.info("Please login first :) ")
    }
  },
  methods: {
    onSubmit() {
      axios.post('http://localhost:3005/auth/login', this.formData)
                .then((response) => {
                  this.onSuccess(response)
                })
                .catch((error) => {
                  this.onError(error)
                })
    },
    onSuccess(response) {
      Auth.authenticateUser(response.data.token)
      this.$router.push('/dashboard')
    },
    onError(error) {
      this.$toaster.error(error.response.data.message)      
    }
  }
}
</script>