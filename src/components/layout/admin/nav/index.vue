<template>
  <ul class="nav nav-pills flex-column mb-auto navication">
    <li class="nav-item">
      <a href="#" class="nav-link active" aria-current="page">
        <i class="fa-solid fa-house" width="16" height="16"></i>
        {{ translate('dashboard') }}
      </a>
    </li>
    <li>
      <a href="#" class="nav-link link-dark">
        <i class="fa-solid fa-gauge" width="16" height="16"></i>
        {{ translate('home') }}
      </a>
    </li>
  </ul>
</template>
<script setup>
import { translate } from "@/language/i18n";
</script>
<style lang="css">
.navication {
  height: 100%;
}
</style>
