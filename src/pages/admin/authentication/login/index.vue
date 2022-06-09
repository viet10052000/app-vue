<template>
  <div>
    <Header />
    <div class="container w-50" style="background: #ede8e8;">
      <form class="form-signin w-50 m-auto text-center mt-5 border">
        <img
          class="mb-4 mt-3"
          src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h2 class="mb-5 m-3" style="font-weight: bold">{{ translate('signIn') }}</h2>

        <div class="form-floating m-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
             v-model="user.email"
          />
          <label for="floatingInput">{{ translate('email') }}</label>
        </div>
        <div class="form-floating m-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
             v-model="user.password"
          />
          <label for="floatingPassword">{{ translate('password') }}</label>
        </div>

        <div class="checkbox mb-3 mt-3">
          <label>
            <input type="checkbox" value="remember-me" /> {{ translate('remember') }}
          </label>
        </div>
        <button class="w-50 btn btn-lg btn-primary" type="submit" @click="Login()">
          {{ translate('signIn') }}
        </button>
        <hr />
        <div class="m-5">
          <button class="w-50 btn btn-lg btn-success" type="submit">
            <router-link
              to="/register"
              style="text-decoration: none; color: white;"
              >{{ translate('signUp') }}</router-link
            >
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import Header from "@/components/layout/admin/header";
import { translate } from "@/language/i18n";
import { ref } from "vue";
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
const user = ref({})
const Login = () => {
  store.dispatch('login',user.value)
  router.push('/dashboard')
}
</script>
