<template>
    <v-col cols="4">
        <v-card>
            <v-card-title>{{photo.title}}</v-card-title>
            <v-card-text>
                <v-img 
                :src=photo.url 
                :data-title = "photo.title" 
                :data-url = "photo.url" 
                class = "v-img_photo"
                />
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: ['photo']
}
</script>

<style>
    .v-img_photo:hover {
        cursor: pointer;
    }
</style>