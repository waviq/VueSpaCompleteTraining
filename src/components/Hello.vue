<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6 offset-m3">
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s6 offset-m3">
              <input id="password" type="password" class="validate">
              <label for="password">Password</label>
            </div>
          </div>

          <a class="waves-effect waves-light btn login-btn">Submit</a>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      age: 278
    }
  }
}

</script>

