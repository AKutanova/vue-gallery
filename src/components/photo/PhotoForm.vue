<template>
<h2>Добавить фото:</h2>
  <v-container>
    <v-row class="r-flex">
        <v-text-field placeholder="Название" v-model="photoTitle" />
        <v-file-input label="Фото" prepend-icon="mdi-camera" v-model="photoImg" />
        <v-btn class="v-btn_add" @click="addPhoto">Добавить</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            photoTitle: '',
            photoImg: []
        }
    },

    methods: {
        addPhoto() {
            if (this.photoImg.length) {
                const reader = new FileReader();

                reader.addEventListener("load", () => {
                    // convert image file to base64 string
                    const photo = {
                        id: Date.now(),
                        title: this.photoTitle,
                        url: reader.result
                    }

                    this.$emit('create-photo', photo);
                    this.photoTitle = '';
                    this.photoImg = [];                      
                }, false);

                reader.readAsDataURL(this.photoImg[0]);
            }
        }
    }
}
</script>
<style>
    .v-btn_add {
        margin-left: 20px;
    }
</style>