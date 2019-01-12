<template>

<div class="center">

        <h1>{{title}}</h1>



    <form class="formRegistro" >

   		<div class="row">
				<div class="col-md form-group col-2">
					<label for="nombre" class="form-control-label">Nombre </label>
					<input placeholder="Nombre" v-model= "nombre" id="nombre"  name="nombre" type="text" class="form-control" required>
				</div>

				<div class="col-md form-group col-2">
					<label for="nombre" class="form-control-label">Apellido </label>
					<input placeholder="Apellido" v-model= "apellido" id="apellido"  name="apellido" type="text" class="form-control" required>
				</div>
			</div>

			<div class="row">
				<div class="col-md form-group col-2">
		    	<label for="email" class="form-control-label">Correo Usach </label>
					<input placeholder="Email" id="email" v-model= "apellido" name="email" type="email" class="form-control" required>
      </div>

				<div class="col-md form-group col-2">
					<label for="nombre" class="form-control-label">Teléfono </label>
					<input placeholder="Telefono"  id="telefono" v-model= "telefono" name="telefono" type="phone" class="form-control" required>
				</div>
			</div>

			


      <div class="row col-md form-group">
		    <label for="cargo" class="form-control-label">Cargo </label>
					<select  id="cargo" v-model="cargo" name="cargo" class="form-control" required>
						<option selected disabled hidden></option>
						<option value="1">Secretaria/o Oficina de Partes </option>
						<option value="2">Secretaria/o Oficina de Dociencias</option>
						<option value="3">Director/ra de Docencia</option>
						<option value="4">Subdirector/ra de Departamento</option>
						<option value="5">Vicedecano/a </option>
						<option value="6">Decano/a </option>
					</select>
      </div>
      <div class="row">
  		<div class="col-md form-group col-2">
					<label for="usuario" class="form-control-label">Nombre usuario </label>
					<input placeholder="usuario" v-model= "usuario" id="usuario"  name="usuario" type="text" class="form-control" required>
				</div>
		<div class="col-md form-group col-2">
					<label for="password" class="form-control-label">Contraseña </label>
					<input placeholder="password" v-model= "contraseña" id="password"  name="password" type="text" class="form-control" required>
				</div>
			</div>
		</form>
		


    <div class="mt-1">
		<button style="background-color: #5499C7" class="btn btn-primary">Registrar</button>
		<button style="background-color: #AAB7B8" type="reset" class="btn btn-secondary">Cancelar</button>
	</div>


</div>



</template>
<script>
var MensajeDefault = "Verifique que ha llenado todos los campos correctamente";
export default{
  data(){
    return{
  		title:'Registrar Usuario',
  		//Campos que deben ser completados
        nombre:'',
        apellido:'',
        email:'',
        telefono:'',
        email:'',
        cargo:'',
        usuario:'',
        contraseña: '',
    	//
  		cadenaError:'Todos los campos deben ser llenados. Verifique los siguientes datos e intente nuevamente:',
    }
  },
  mounted:function(){
   
  },

  comprobarDatos(){
    		var SinErrores = 0;
    		if(this.nombre == ''){
    			this.cadenaError = this.cadenaError+"\n- Nombre del usuario"
    			SinErrores++;
    		}
    		if(this.apellido == ''){
    			this.cadenaError = this.cadenaError+"\n- Apellido del usuario"
    			SinErrores++;
    		}
    		if(this.email == ''){
    			//alert(this.title);
    			this.cadenaError = this.cadenaError+"\n- E-mail"
    			SinErrores++;
    		}
    		if(this.telefono == ''){
    			this.cadenaError = this.cadenaError+"\n- Telfono "
    			SinErrores++;
    		}
    		if(this.cargo == ''){
    			this.cadenaError = this.cadenaError+"\n- Cargo del usuario "
    			SinErrores++;
    		}
    		if(this.usuario == ''){
    			//alert(this.title);
    			this.cadenaError = this.cadenaError+"\n- Id del usuario"
    			SinErrores++;
    		}
    		if(this.contraseña == ''){
    			//alert(this.title);
    			this.cadenaError = this.cadenaError+"\n- Contraseña del usuario"
    			SinErrores++;
    		}

    		if(SinErrores == 0){
    			this.IngresandoSolicitud();
    			alert("Información guardada exitosamente");
            	window.location.href = '#/registroU';
    		}
    		else{
    			alert(this.cadenaError);
    		}
    		this.cadenaError = MensajeDefault;
    	},

    	IngresandoNuevoUsuario(){

        console.log("El cargo tiene numero es = "+this.cargo)


        this.$http.post('http://localhost:9090/users/sign-up'
        	, JSON.stringify({
                    "firstname": this.nombre,
				    "lastname": this.apellido,
				    "mail": this.email,
				    "phoneNumber": this.telefono,
				    "username": this.usuario,
				    "password": this.contraseña,
				    "typeUser": {
				        "typeUserId": this.cargo,
				    },
                }),
          {
            headers: {
                    "Access-Control-Allow-Origin": "*",
                      "Access-Control-Allow-Methods":
                        "POST, GET, PUT, OPTIONS, DELETE",
                      "Access-Control-Allow-Headers":
                        "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type",
                      "Content-Type": "application/json",
                      Accept: "application/json"
                  }
          }).then(function (response) {
              // Success
              console.log("Usuario ingresado")
              console.log(response.data)


          }
      	).catch(e =>{
            alert("Error, no se ha logrado ingresar al usuario");
        });
        },
}
</script>
