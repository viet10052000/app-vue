<template>
  <div class="home">
    <div class="App-header">
      <button @click="switchLocale('vn')">vn</button>
      <button @Click="switchLocale('en')">en</button>
    </div>
    <p>{{ translate('msg') }}</p>
  </div>
</template>
<script setup>
import { translate , i18n } from '@/language/i18n'
const switchLocale = (locale) => {
  i18n.locale = locale
}
</script>

