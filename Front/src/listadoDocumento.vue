<template>
<div class="center">
    <demo-size-modal/>

   <h1>{{title}}</h1>

   <button class="registrarDocumento" @click="$modal.show('registrar-modal')"> Ingresar Reclamo </button>

   <div class="iconos">
        <img src="./img/calendario.png"/> <div>  <label> Visualizar </label> <br/> <label> Flujo de trámite </label>  </div>
        <img src="./img/documento.png"/> <div>  <label> Visualizar </label> <br/> <label> Reclamo </label> </div>
        <img src="./img/resultado.png"/>  <div> <label> Visualizar </label> <br/> <label> Resolución </label> </div>
        
   </div>

 


    <div class="search">
        <input class="search__input" type="text" placeholder="Número de Reclamo">
    </div>


   
    <table class="listaDocumentos" >
        <thead>
            <tr>
                <th class="nro"> Nro. </th>
                <th class="tipo"> Tipo </th>
                <th class="semAñ"> Fecha </th>
                <th class="motivo"> Motivo </th>  
            </tr>
        </thead> 

        <tbody >
            <tr>
                <th> 1 </th>
                <th > Telefonía Móvil </th>
                <th> 22/10/2018 </th>
                <th> Cobro indebido </th>
                <th> <button @click="$modal.show('fechas-modal')" class="botonAccion" name="enviar" title="Fechas"> <img src="./img/calendario.png"/> </button> </th>
                <th> <button @click="visualizar()" class="botonAccion" name="enviar" title="Visualizar"> <img src="./img/documento.png"/> </button> </th>
                <th> <button @click="$modal.show('resolucion-modal')" class="botonAccion" name="enviar" title="Editar"> <img src="./img/resultado.png"/> </button> </th>
            </tr>

            <tr>
                <th> 2 </th>
                <th > Hogar </th>
                <th> 23/11/2018 </th>
                <th> Televisión por cable sin señal </th>
                <th> <button @click="$modal.show('fechas-modal')" class="botonAccion" name="enviar" title="Fechas"> <img src="./img/calendario.png"/> </button> </th>
                <th> <button @click="visualizar()" class="botonAccion" name="enviar" title="Visualizar"> <img src="./img/documento.png"/> </button> </th>
                <th> <button @click="$modal.show('resolucion-modal')" class="botonAccion" name="enviar" title="Editar"> <img src="./img/resultado.png"/> </button> </th>
            </tr>

            <tr>
                <th> 3 </th>
                <th > Telefonía </th>
                <th> 22/12/2018 </th>
                <th> Teléfono sin tono </th>
                <th> <button @click="$modal.show('fechas-modal')" name="enviar" title="Fechas"> <img src="./img/calendario.png"/> </button> </th>
                <th> <button @click="visualizar()" class="botonAccion" name="enviar" title="Visualizar"> <img src="./img/documento.png"/> </button> </th>
                <th> <button @click="$modal.show('resolucion-modal')" class="botonAccion" name="enviar" title="Editar"> <img src="./img/resultado.png"/> </button> </th>
            </tr>

            <tr>
                <th> 4 </th>
                <th > Internet</th>
                <th> 24/12/2018 </th>
                <th> Lentitud en bajadas</th>
                <th> <button @click="$modal.show('fechas-modal')" title="Fechas"> <img src="./img/calendario.png"/> </button> </th>
                <th> <button @click="visualizar()" name="enviar" class=" otonAccion" title="Visualizar"> <img src="./img/documento.png"/> </button> </th>
                <th> <button @click="$modal.show('resolucion-modal')" name="enviar" class="botonAccion" title="Editar"> <img src="./img/resultado.png"/> </button> </th>
            </tr>
        </tbody>

    </table> 



    
    
 
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
        title:'Reclamos',
        }
    },
    methods:{
    //    eliminarA(index){
        visualizar(){
            window.location.href = '#/gestionD'
        },
    },
    mounted:function(){
        console.log('listado.vue')
    }
    }
</script>