<template>
<div class="">
    <demo-size-modal/>

    <div class="divTitulo">

        <h1>{{title}}</h1>

        <button class="registrarDocumento" @click="$modal.show('registrar-modal')"> Ingresar Reclamo </button>
        <button class="verGrafico" @click="$modal.show('grafico-modal')"> Estado de revisiones </button>

        <div class="search">
            <input class="search__input" type="text" placeholder="Número de Reclamo">
        </div>

   </div>

<div class="center">


<!--
     <div>
        <CommitChart :chart-data="datacollectionPie"></CommitChart>
    </div> -->



    <div class="grid" v-for="(claim, index) in claims"> 
	  <div class="detalleReclamo">
          <div class="textoDetalle">
            <label class="numReclamo"> {{ index+1 }}</label>
            <label class="fechaReclamo"> {{ claim.date }} </label>
            <label class="estadoReclamo"> Estado: Pendiente </label>
        </div> 
	  </div> 

	   <div class="infoReclamo">
           <div class="textoInfo">
            <label class="categoriaReclamo"> Reclamo {{ claim.category }} </label>
            <label class="tituloReclamo"> {{ claim.reason }} </label> 
            </div>
            <button @click="$modal.show('verReclamo-modal')" class="botonAccion" name="enviar" title="Leer"> Leer Reclamo </button> 
             <button @click="$modal.show('resolucion-modal')" class="botonAccion" name="enviar" title="Leer"> Leer Resolución </button> 
        </div>

	</div>


</div>
</div>
</template>

<script>
    import DemoSizeModal from './ventanaModel.vue'
    import CommitChart from './CommitChart'
    export default{
        components:{
            DemoSizeModal,
            CommitChart
        },
        
    data(){
        return{
        title:'Reclamos',
        claims: [{reason: 'Cobro indebido', date: '22/10/2018', category: 'Telefonía Móvil'},
                {reason: 'Televisión por cable sin señal', date: '23/11/2018', category: 'Television'},
                {reason: 'Teléfono sin tono', date: '22/12/2018', category: 'Telefonía'},
                {reason: 'Lentitud en bajadas', date: '24/12/2018', category: 'Internet'}],
        telephone: 1,
        internet: 4,
        tv: 9,
        movil: 2,
        datacollection: {
            labels: ['Telefonía', 'Internet', 'Television', 'Móvil'],
            datasets:[
                {
                    label: 'label 1',
                    backgroundColor: '#f87979',
                    data: [3, 6]
                }
                ]
            },
        datacollectionPie: null,
        }   
    },
    mounted:
        function(){
        console.log('listado.vue'),
        this.fillPieChart()
        },
    methods:{
        fillPieChart(){
            this.datacollectionPie = {
                        labels: ['Revisados 33%', 'Pendientes 67%'],
                        datasets: [
                          {
                            label: 'Data One',
                            backgroundColor: ['#66BB6A','#C62828'],
                            data: [33, 67]
                          }
                        ]
                      }
            }
        }
    }
</script>