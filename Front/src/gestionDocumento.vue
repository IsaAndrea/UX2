<template>

<div class="center">

	<demo-size-modal/>
	<v-dialog/>

    <h1>{{title}}</h1>

	<div class="editarDocumento">
        <button name="enviar" title="Fechas" @click="$modal.show('fechas-modal')"> <img src="./img/calendario.png"/> </button> <div>  <label> Cambiar </label> <br/> <label> Flujo de trámite </label>  </div>
        <button name="enviar" title="Sugerir" @click="$modal.show('sugerir-modal')"> <img src="./img/resultado.png"/> </button> <div>  <label> Realizar </label> <br/> <label> Resolución </label> </div>
   </div>

    <form class="formRegistro" > 
        <div class="row">
            <div class="col-md form-group col-2">
                <label for="clasificacion" class="form-control-label">Clasificación  </label>
				<input  name="rut"  class="form-control inputRO" readonly>
            </div>

            <div class="col-md form-group col-2">
                <label for="rut" class="form-control-label">Día / Mes / Año</label>
                <input  name="rut"  class="form-control inputRO" readonly>
            </div>
        </div>

        <div class="row col-md form-group">
	    	  <label>Título</label>
          <textarea class="form-control" id="solicitud" rows="3" readonly></textarea>
        </div>
     
        <div class="row col-md form-group">
            <label>Contenido</label>
            <textarea class="form-control" id="razones" rows="10" readonly></textarea>
        </div>       

  	  </form>


</div>
</template>

<script>
	import DemoSizeModal from './ventanaModel.vue'
    export default{
    	components:{
			DemoSizeModal,
	    },
	    
    data(){
        return{
        title:'Gestión Solicitud'
        }
	},
	methods: {
		editar () {
			window.location.href = '#/documento'
		},
	},
	
	
    mounted:function(){
        console.log('gestionD.vue')
    }
    }
</script>