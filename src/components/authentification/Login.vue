<template>
  <div class="login">
    <div class="container">
      <h1 class="login-title">Login Page</h1>
      <div class="row">
        <form class="col s12">
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
              <button @click="test" class="waves-effect waves-light btn login-btn">Login</button>
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
      email: '',
      password: ''
    }
  },

  methods: {
    test() {
      this.$http.get('http://localhost:1000/api/test')
        .then(function(response){
          console.log(response)
        })
    }
  }
}
</script>

