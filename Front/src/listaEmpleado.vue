<template>
<div>
    <demo-size-modal/>

    <div class="divTitulo">

        <h1>{{title}}</h1>

        <div class="filtros">
            <input class="filtroT" type="radio" value="todos" checked="checked" /> Todos
            <div class="filtroEstado">
                <label>Filtrar por Estado</label>
                <div class="filtro"> <input type="radio" /> Pendientes </div>
                <div class="filtro"> <input type="radio" /> Resueltos </div>
           
            </div>
            <div class="filtroCategoria">
                <label>Filtrar por Categoría</label>
                <div class="filtro"> <input type="radio" /> Internet Hogar </div>
                <div class="filtro"> <input type="radio" /> Internet Móvil </div>
                <div class="filtro"><input type="radio" /> Telefonía Hogar </div>
                <div class="filtro"> <input type="radio" /> Telefonía Móvil </div>
                <div class="filtro"> <input type="radio" /> Televisión </div>
            </div>
        </div>

        <div class="search">
            <input class="search__input" type="text" placeholder="Número de Reclamo">
        </div>

   </div>

    <div class="center">

        <div class="grid" v-for="(claim, index) in claims"> 
        <div class="detalleReclamo">
            <label class="numReclamo"> {{ index+1 }}</label>
            <label class="fechaReclamo"> {{ claim.date }} </label>
            <label class="estadoReclamo"> Estado: Pendiente </label>
        </div> 

        <div class="infoReclamo">
                <label class="categoriaReclamo"> Reclamo {{ claim.category }} </label>
                <label class="tituloReclamo"> {{ claim.reason }} </label> 
                <button @click="$modal.show('verReclamo-modal')" class="botonAccion" name="enviar" title="Leer"> Leer Reclamo </button> 
                <button @click="$modal.show('darResolucion-modal')" class="botonAccion" name="enviar" title="Veredicto"> Dar Resolución </button> 
            </div>

        </div>
    
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