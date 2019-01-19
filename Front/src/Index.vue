<template>
<div>

  <div class="sesion">

    <label class="tituloVTR"> VTR </label>
    <label class="subTituloVTR"> Reclamos </label>
    <img class="logoVTR" src="./img/logo2.png"/>

    <form class="login">
      <input class="form-input" v-model="user" id="txt-input" type="text" placeholder="Nombre de Usuario" required>
      <input class="form-input" v-model="pass" type="password" placeholder="Contraseña" id="pwd"  name="password" required>
      <button class="log-in" v-on:click="go"> Iniciar Sesión </button>
    </form>

  </div>
</div>



</template>
<script>
export default{
  data(){
    return{
      title:'Index',
      user: '',
      pass: ''
    }
  },
  mounted:function(){
    console.log('Index.vue')
  },
  methods:{
    go(){
      if(this.user == 'admin'){
        if(this.pass == '1234'){
          this.$router.push('/reclamos')
        }
      }
      else if(this.user == 'cliente'){
        if(this.pass == '1234'){
          this.$router.push('/listado')
        }
      }
    }
  }
}
</script>