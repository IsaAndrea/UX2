<template>
<div>

  <div class="sesion">

    <form class="login">
      <input class="form-input" id="txt-input" type="text" placeholder="Nombre de Usuario" required>
      <input class="form-input" type="password" placeholder="Contraseña" id="pwd"  name="password" required>
      <button class="log-in"> Iniciar Sesión </button>
    </form>


  </div>
</div>



</template>
<script>
export default{
  data(){
    return{
      title:'Index'
    }
  },
  mounted:function(){
    console.log('Index.vue')
  }
}
</script>