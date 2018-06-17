<template>
    <v-app id="inspire" light>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="blue darken-3">
                                <v-toolbar-title>SignUp</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit.prevent="onSubmit">
                                    <v-text-field 
                                        id="firstName"
                                        label="First Name"
                                        v-model="formData.firstName"
                                        type="text"></v-text-field>
                                    <v-text-field 
                                        id="lastName"
                                        label="Last Name"
                                        v-model="formData.lastName"
                                        type="text"></v-text-field>
                                    <v-text-field 
                                        id="email"
                                        label="Email"
                                        v-model="formData.email"
                                        type="text"></v-text-field>
                                    <v-text-field 
                                        id="contact"
                                        label="Contact"
                                        v-model="formData.contact"
                                        type="text"></v-text-field>
                                    <v-text-field 
                                        id="password"
                                        label="Password"
                                        v-model="formData.password"
                                        type="password"></v-text-field>
                                    <v-text-field 
                                        id="organization"
                                        label="Organization"
                                        v-model="formData.organization"
                                        type="text"></v-text-field>
                                    <v-select
                                        :items="type"
                                        v-model="formData.type"
                                        data-vv-name="select"
                                        required
                                        ></v-select>
                                        <v-card-actions>
                                <v-btn color="primary" to="/login">Login</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="success" type="submit">Signup</v-btn>
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
import Form from "../../modules/Form";
import Auth from "../../modules/Auth";
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        password: "",
        organization: "",
        type: null
      },
      type: [{ text: "Select one", value: null }, "admin", "user"],
      show: true
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://localhost:3005/auth/register", this.formData)
        .then(this.onSuccess.bind(this))
        .catch(this.onError.bind(this));
    },
    onSuccess(response) {
        this.$router.push('/login')
}   ,
    onError(error) {
      console.log(error);
    }
  }
};
</script>
