<template>
<div class="center">

   <h1>{{title}}</h1>


    <form class="formRegistro" > 
        <div class="row">
            <div class="col-md form-group">
                <label for="rut" class="form-control-label">Día / Mes / Año</label>
                <input  name="rut"  class="form-control inputRO" readonly>
            </div>

            <div class="col-md form-group">
                <label for="rut" class="form-control-label">Nro. Reclamo</label>
                <input name="rut"  class="form-control " required>
            </div>


            <div class="col-md form-group">
                <label for="clasificacion" class="form-control-label">Clasificación  </label>
                <select  id="clasificacion" name="clasificacion" class="form-control" required>
                    <option selected disabled hidden></option>
                    <option value="RA"> Internet Hogar </option>
                    <option value="RA"> Internet Móvil </option>
                    <option value="CC"> Telefonía Hogar </option>
                    <option value="CM"> Telefonía Móvil</option>
                    <option value="RT"> Televisión</option>
                </select>
            </div>
            
        </div> 
    </form>



    

    <div class="mt-1">
        <button style="background-color: #5499C7" type="submit" class="btn btn-primary">Registrar</button>
    </div>
  
    
 
</div>
</template>

<script>
    export default{
    data(){
        return{
        title:'Ingresar Solicitud'
        }
    },
    mounted:function(){
        console.log('ingresar.vue')
    }
    }
</script>