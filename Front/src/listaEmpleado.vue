<template>
<div>
    <demo-size-modal/>

    <div class="divTitulo">

        <h1>{{title}}</h1>

        <div class="filtros">
            <select v-model="selected">
                <option>Todos</option>
                <option disabled value="">Categoría</option>
                <option>Internet Hogar</option>
                <option>Telefonía Hogar</option>
                <option>Televisión Hogar</option>
                <option>Internet Móvil</option>
                <option>Telefonía Móvil</option>
                <option disabled value="">Estado</option>
                <option>Resuelto</option>
                <option>Pendiente</option>
            </select>

            <button v-on:click="filter">Filtrar</button>
        </div>
        <div class="search">
            <input class="search__input" type="text" placeholder="Número de Reclamo">
        </div>

   </div>

    <div class="center">

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
                    <label class="categoriaReclamo"> Usuario Pepito Motuda </label>
                 </div>
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
        claims: [{reason: 'Cobro indebido', date: '22/10/2018', category: 'Telefonía Móvil', state: 'Resuelto'},
                {reason: 'Televisión por cable sin señal', date: '23/11/2018', category: 'Hogar', state: 'Pendiente'},
                {reason: 'Teléfono sin tono', date: '22/12/2018', category: 'Telefonía Hogar', state: 'Pendiente'},
                {reason: 'Lentitud en bajadas', date: '24/12/2018', category: 'Internet Hogar', state: 'Pendiente'}],
        selected: 'Todos',
        claimSelected: []
        }
    },
    methods:{
    //    eliminarA(index){
        visualizar(){
            window.location.href = '#/gestionD'
        },
        filter(){
            if(this.selected == "Todos"){
                this.claimSelected = this.claims
            }
            else{
                this.claimSelected = []
                if(this.selected == 'Resuelto' || this.selected == 'Pendiente'){
                    this.claims.forEach(element => {
                        if(element.state == this.selected){
                            this.claimSelected.push(element)
                        }
                    });
                }
                else{
                    this.claims.forEach(element => {
                        if(element.category == this.selected){
                            this.claimSelected.push(element)
                        }
                    });
                }
            }
        }
    },
    mounted:function(){
        console.log('listado.vue')
        this.claimSelected = this.claims
    }
    }
</script>