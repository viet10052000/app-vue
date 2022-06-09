<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Bootstrap</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <select
          v-model="$i18n.locale"
          class="m-2 form-select"
          aria-label=".form-select-lg example"
          style="width: 20%"
        >
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
        <div class="m-3" style="width: 10%">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ translate("setting") }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    {{ translate("profile") }}
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    {{ translate("changePassword") }}
                  </a>
                </li>
                <li @click="Logout()">
                  <a class="dropdown-item" href="#">
                    {{ translate("logout") }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { translate } from "@/language/i18n";
const langs = ["vi", "en"];
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
const Logout = () => {
  store.dispatch('logout')
  router.push('/login')
}
</script>
