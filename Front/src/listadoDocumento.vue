<template>
<div class="">
    <demo-size-modal/>

    <div class="divTitulo">

   <h1>{{title}}</h1>

   <button class="registrarDocumento" @click="$modal.show('registrar-modal')"> Ingresar Reclamo </button>

   <div class="iconos">
        <img src="./img/calendario.png"/> <div>  <label> Visualizar </label> <br/> <label> Flujo de trámite </label>  </div>
        <img src="./img/documento.png"/> <div>  <label> Visualizar </label> <br/> <label> Reclamo </label> </div>
        <img src="./img/resultado.png"/>  <div> <label> Visualizar </label> <br/> <label> Resolución </label> </div>
        
   </div>
   </div>

<div class="center">

    <div class="search">
        <input class="search__input" type="text" placeholder="Número de Reclamo">
    </div>


   
    <table class="listaDocumentos" >
        <thead>
            <tr>
                <th class="nro"> Nro. </th>
                <th class="tipo"> Motivo </th>
                <th class="semAñ"> Fecha </th>
                <th class="motivo"> Categoria </th>  
            </tr>
        </thead> 

        <tbody v-for="(claim, index) in claims">
            <tr>
                <th> {{ index+1 }} </th>
                <th> {{ claim.reason }} </th>
                <th> {{ claim.date }} </th>
                <th> {{ claim.category }} </th>
                <th> <button @click="$modal.show('fechas-modal')" class="botonAccion" name="enviar" title="Fechas"> <img src="./img/calendario.png"/> </button> </th>
                <th> <button @click="$modal.show('verReclamo-modal')" class="botonAccion" name="enviar" title="Fechas"> <img src="./img/documento.png"/> </button> </th>
                <th> <button @click="$modal.show('resolucion-modal')" class="botonAccion" name="enviar" title="Editar"> <img src="./img/resultado.png"/> </button> </th>
            </tr>
        </tbody>

    </table> 
</div>
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
        claims: [{reason: 'Cobro indebido', date: '22/10/2018', category: 'Telefonía Móvil'},
                {reason: 'Televisión por cable sin señal', date: '23/11/2018', category: 'Hogar'},
                {reason: 'Teléfono sin tono', date: '22/12/2018', category: 'Telefonía'},
                {reason: 'Lentitud en bajadas', date: '24/12/2018', category: 'Internet'}]
        }
    },

    mounted:function(){
        console.log('listado.vue')
    }
    }
</script>