<template>
    <v-card
    class="mx-auto v-card__navbar"
    max-width="448"
  >
    <v-layout>
      <v-app-bar
        color="primary"
        density="compact"
        dark
      >
        <v-spacer />
        <v-btn variant="outlined" @click="$router.push('/')" class="ml-3">Главная</v-btn>
        <v-btn variant="outlined" @click="$router.push('/photo')" class="ml-3">Фотографии</v-btn>
        <v-btn variant="outlined" @click="$router.push('/photo-store')" class="ml-3">Store</v-btn>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>
    .v-card__navbar {
        position: relative;
        z-index: 1;
    }
</style>