<template>
  <div class="login">
    <h1 class="login-title">Register Page</h1>
    <div class="container">
      <div class="row">
        <form class="col s12">

          <div class="row">
            <div class="input-field col s6 offset-m3">
              <input id="name" type="email" class="validate" v-model="name">
            </div>
          </div>

          <div class="row">
            <div class="input-field col s6 offset-m3">
              <input id="email" type="email" class="validate" v-model="email">
            </div>
          </div>

          <div class="row">
            <div class="input-field col s6 offset-m3">
              <input id="password" type="password" class="validate" v-model="password">
            </div>
          </div>

          <div class="row">
            <div class="input-field col s6 offset-m3">
              <button type="submit" class="waves-effect waves-light btn login-btn">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  }
}

</script>

