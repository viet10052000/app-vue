<template>
  <Header />
  <div class="mb-4 mt-4">
    <div class="col-12 col-sm-2">
      <Nav />
    </div>
    <div class="col-12 col-sm-10">
      {{ userProfile }}
    </div>
  </div>
  <Footer />
</template>
<script setup>
import Header from "@/components/layout/admin/header";
import Footer from "@/components/layout/admin/footer";
import Nav from "@/components/layout/admin/nav";
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
const store = useStore();
const userProfile = ref();
userProfile.value = computed(() => { return store.getters['userProfile']})
onMounted(() => {
  store.dispatch('userProfile')
})
</script>
<style lang="scss">
</style>
