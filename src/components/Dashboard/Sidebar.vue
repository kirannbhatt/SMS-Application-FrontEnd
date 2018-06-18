<template>
    <div>
        <v-list>
            <v-list-tile to="/dashboard/home">
            <v-list-tile-action>
                <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content >
                <v-list-tile-title>Dashboard</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-list>
            <v-list-tile to="/dashboard/groups">
            <v-list-tile-action>
                <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content >
                <v-list-tile-title>Groups</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-list>
            <v-list-tile to="/dashboard/contacts">
            <v-list-tile-action>
                <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content >
                <v-list-tile-title>Contacts</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </div>
</template>
<script>
export default {
  name: 'Sidebar'
};
</script>

