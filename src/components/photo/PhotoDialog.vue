<template>
    <div>
        <v-dialog
            v-model="dialog"
            activator="parent"
            max-width="760"
        >
            <v-card>
                <v-card-title>{{ photo.title }}</v-card-title>
                <v-card-text>
                    <v-img :src=photo.url />
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Закрыть</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ['photo', 'isActive'],
    data() {
        return {
            dialog: false
        }
    },

    created() {
        this.dialog = this.isActive;
    },

    watch: {
        isActive(newValue) {
            this.dialog = newValue;
        },

        dialog(newValue) {
            this.$emit('dialogUpdate', newValue);
        }
    }
}
</script>

<style>

</style>