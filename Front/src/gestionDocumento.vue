<template>

<div class="center">

	<demo-size-modal/>
	<v-dialog/>

    <h1>{{title}}</h1>

	<div class="editarDocumento">
        <button name="enviar" title="Fechas" @click="$modal.show('fechas-modal')"> <img src="./img/calendario.png"/> </button> <div>  <label> Visualizar </label> <br/> <label> Fechas de trámite </label>  </div>
        <button name="enviar" title="Editar" @click="editar()"> <img src="./img/editar.png"/> </button> <div> <label> Editar </label> <br/> <label> Documento </label> </div>
        <button name="enviar" title="Sugerir" @click="$modal.show('sugerir-modal')"> <img src="./img/sugerir.png"/> </button> <div>  <label> Realizar </label> <br/> <label> Sugerencia </label> </div>
		<button name="enviar" title="Lectura" @click="$modal.show('sugerencias-modal')">  <img src="./img/sugerencia.png"/> </button> <div>  <label> Visualizar </label> <br/> <label> Sugerencias </label> </div>
   </div>

    <form class="formRegistro" > 
        <div class="row">
			<div class="col-md form-group">
				<label for="rut" class="form-control-label">Nro. Folio</label>
				<input name="rut"  class="form-control inputRO" readonly>
			</div>

            <div class="col-md form-group">
				<label for="rut" class="form-control-label">Tipo Documento</label>
				<input  name="rut"  class="form-control inputRO" readonly>
			</div>

			<div class="col-md form-group">
				<label for="email" class="form-control-label">Fecha Ingreso</label>
				<input name="email" type="email" class="form-control inputRO" readonly>
			</div>
		</div> 
    </form>

    
    <form class="formRegistro" >

        <div class="row col-md form-group">
	    	<label for="nombre" class="form-control-label">Nombre Completo </label>
		    <input placeholder="Nombre" v-model="name" id="nombre"  name="nombre" type="text" class="form-control" required>
         </div>
   

        <div class="row col-md form-group">
		    <label for="carrera" class="form-control-label">Carrera y Especialidad </label>
		    <select  id="carrera" name="carrera" class="form-control" required>
				<option selected disabled hidden></option>
				<option value="IA">Ingeniería Ambiental </option>
				<option value="ICE">Ingeniería Civil en Electricidad</option>
				<option value="ICG">Ingeniería Civil en Geografía</option>
				<option value="ICI">Ingeniería Civil en Industria</option>
				<option value="ICIF">Ingeniería Civil en Informática</option>
				<option value="ICM">Ingeniería Civil en Mecánica</option>
				<option value="ICMT">Ingeniería Civil en Metalurgia</option>
				<option value="ICMI">Ingeniería Civil en Minas</option>
				<option value="ICOC">Ingeniería Civil en Obras Civiles</option>
				<option value="ICQ">Ingeniería Civil en Química</option>
				<option value="IEC">Ingeniería de Ejecución en Climatización (Calefacción, Refrigeración y Aire Acondicionado)</option>
				<option value="IECI">Ingeniería de Ejecución en Computación e Informática</option>
				<option value="IEE">Ingeniería de Ejecución en Electricidad</option>
				<option value="IEG">Ingeniería de Ejecución en Geomensura</option>
				<option value="IEI">Ingeniería de Ejecución en Industria</option>
				<option value="IEM">Ingeniería de Ejecución en Mecánica</option>
				<option value="IEMT">Ingeniería de Ejecución en Metalurgia</option>
				<option value="IEMI">Ingeniería de Ejecución en Minas</option>
				<option value="IEQ">Ingeniería de Ejecución en Química</option>
				<option value="IB">Ingeniería de Ejecución en Biotecnología</option>
			</select>
        </div>
      

		<div class="row">
			<div class="col-md form-group">
				<label for="rut" class="form-control-label">Número de Rut</label>
				<input placeholder="Rut" v-model="rut" id="rut" name="rut"  class="form-control" required>
			</div>

            <div class="col-md form-group">
				<label for="phone" class="form-control-label">Teléfono</label>
				<input placeholder="Teléfono" v-model="rut" id="phone" name="phone"  class="form-control" required>
			</div>

			<div class="col-md form-group">
				<label for="email" class="form-control-label">E-mail @usach.cl</label>
				<input placeholder="E-mail" v-model="email" id="email" name="email" type="email" class="form-control" required>
			</div>
		</div>
        

        <div class="row col-md form-group">
	    	<label for="direccion" class="form-control-label">Domicilio y Comuna </label>
		    <input placeholder="Dirección" v-model="name" id="direccion"  name="direccion" type="text" class="form-control" required>
        </div>

        <div class="row col-md form-group">
		    <label for="motivo" class="form-control-label">Motivo </label>
		    <select  id="motivo" name="motivo" class="form-control" required>
				<option selected disabled hidden></option>
				<option value="AC">Avance Curricular </option>
				<option value="V">Vocación</option>
				<option value="P">Psicológicas</option>
				<option value="E">Físicas</option>
				<option value="A">Accidente</option>
				<option value="c">Embarazo</option>
			</select>
        </div>

    </form>


    <form class="formRegistro" > 
        <div class="row col-md form-group">
	    	<label>Solicita:</label>
            <textarea class="form-control" id="solicitud" rows="3" required></textarea>
        </div>
     
        <div class="row col-md form-group">
            <label>Por las razones que expone:</label>
            <textarea class="form-control" id="razones" rows="10" required></textarea>
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