<template>
<div>

  <div class="sesion">

    <form class="login">
      <input class="form-input" id="txt-input" type="text" placeholder="Correo Usach" required>
      <input class="form-input" type="password" placeholder="Contraseña" id="pwd"  name="password" required>
      <button class="log-in"> Iniciar Sesión </button>
    </form>
  

  <div class="footer">
    <p > Universidad de Santiago de Chile. Avenida Libertador Bernardo O'Higgins nº 3363. Estación Central. Santiago. Chile. </p>
    <p> Mesa central (562) 2 718 00 00 - Oficina de Informaciones, Reclamos y Sugerencias (OIRS) </p>
    <img class="imgC" src="https://www.usach.cl/sites/default/files/web-portal1_1.png" />
    <img class="imgU" src="https://www.usach.cl/sites/default/files/reuna_2.png" />
    <img class="imgU" src="https://www.usach.cl/sites/default/files/ue_2.png"/>
    <img class="imgU" src="https://www.usach.cl/sites/default/files/eduroam_1.png" />
    <img class="imgU" src="https://www.usach.cl/sites/default/files/asociacionuniversidades_4.png" />
    <img class="imgU" src="https://www.usach.cl/sites/default/files/universia_1.png" />
  </div>


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