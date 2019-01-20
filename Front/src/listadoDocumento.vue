<template>
<div class="">
    <demo-size-modal/>

    <div class="divTitulo">

        <h1>{{title}}</h1>

        <button class="registrarDocumento" @click="$modal.show('registrar-modal')"> Ingresar Reclamo </button>
       

        <div class="search">
            <input class="search__input" type="text" placeholder="Número de Reclamo">
        </div>

        <div class="mensajeR">
        Recuerda que para ingresar tu reclamo tienes un plazo de 60 días hábiles desde que tomas conocimiento sobre el hecho reclamado, o también, desde la fecha de vencimiento del documento de cobro. Nosotros poseemos, un plazo máximo de 5 días hábiles para responderte (en caso que no enviemos nuestra respuesta, tu reclamo se tendrá por acogido). Debes considerar, que la respuesta se puede demorar unos días en llegar a tu domicilio. Si no quedas conforme con nuestra respuesta, tienes un plazo de 30 días hábiles para reclamar ante SUBTEL.
        </div>

   </div>

<div class="center">

    <img class="reclamosTS" src="./img/reclamos.png"/>
    <button class="aqui" onclick="location.href='https://vtr.com/sucursales/'"> </button>
    <label class="tituloEstadoR"> Estado de reclamos ingresados </label> 
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
           <img v-if="claim.category == 'Telefonía Móvil'" src="./img/telefonoM.png"/>
           <img v-if="claim.category == 'Telefonía Hogar'" src="./img/telefonoH.png"/>
           <img v-if="claim.category == 'Internet Móvil'" src="./img/internetM.png"/>
           <img v-if="claim.category == 'Internet Hogar'" src="./img/internetH.png"/> 
           <img v-if="claim.category == 'Televisión'" src="./img/televisor.png"/>

           <label class="categoriaReclamo"> Reclamo {{ claim.category }} </label>
           <div class="texto">
            <label class="tituloReclamo"> {{ claim.reason }} </label> 
            </div>
            <button @click="$modal.show('verReclamo-modal')" class="botonC" name="enviar" title="Leer"> Leer Reclamo </button> 
            <button @click="$modal.show('resolucion-modal')" v-if="claim.state != 'Pendiente'" class="botonC" name="enviar" title="Leer"> Leer Resolución </button> 
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
                {reason: 'Televisión por cable sin señal', date: '23/11/2018', category: 'Televisión', state: 'Pendiente'},
                {reason: 'Teléfono sin tono', date: '22/12/2018', category: 'Telefonía Hogar', state: 'Pendiente'},
                {reason: 'Lentitud en bajadas', date: '24/12/2018', category: 'Internet Hogar', state: 'Pendiente'}],
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