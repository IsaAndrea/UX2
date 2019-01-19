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

     <div class="small">
        <CommitChart :chart-data="datacollectionPie"></CommitChart>
    </div>



    <div class="grid" v-for="(claim, index) in claims"> 
	  <div class="detalleReclamo">
          <div class="textoDetalle">
            <label class="numReclamo"> {{ index+1 }}</label>
            <label class="fechaReclamo"> {{ claim.date }} </label>
            <label class="estadoReclamo"> Estado: {{ claim.state }} </label>
        </div> 
	  </div> 

	   <div class="infoReclamo">
           <div class="textoInfo">
            <label class="categoriaReclamo"> Reclamo {{ claim.category }} </label>
            <label class="tituloReclamo"> {{ claim.reason }} </label> 
            </div>
            <button @click="$modal.show('verReclamo-modal')" class="botonAccion" name="enviar" title="Leer"> Leer Reclamo </button> 
             <button @click="$modal.show('resolucion-modal')" v-if="claim.state != 'Pendiente'" class="botonAccion" name="enviar" title="Leer"> Leer Resolución </button> 
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
        claims: [{reason: 'Cobro indebido', date: '22/10/2018', category: 'Telefonía Móvil', state:'Resuelto'},
                {reason: 'Televisión por cable sin señal', date: '23/11/2018', category: 'Television', state: 'Pendiente'},
                {reason: 'Teléfono sin tono', date: '22/12/2018', category: 'Telefonía', state: 'Pendiente'},
                {reason: 'Lentitud en bajadas', date: '24/12/2018', category: 'Internet', state: 'Pendiente'}],
        datacollectionPie: null,
        pendiente: 0,
        resuelto: 0
        }   
    },
    mounted:
        function(){
        console.log('listado.vue'),
        this.update()
        this.fillPieChart()
        },
    methods:{
        fillPieChart(){
            this.datacollectionPie = {
                        labels: ['Resueltos', 'Pendientes'],
                        datasets: [
                          {
                            label: 'Data One',
                            backgroundColor: ['#822E81','#B4084A'],
                            data: [this.resuelto, this.pendiente]
                          }
                        ]
                      }
            },
        update(){
            var resuelto = 0
            var pendiente = 0
            this.claims.forEach(element => {
                
                if(element.state == 'Pendiente'){
                    pendiente = pendiente +1
                }
                else if(element.state == 'Resuelto'){
                    resuelto++
                }
                
            });
            this.resuelto = resuelto
            this.pendiente = pendiente
            }
        }
    }
</script>