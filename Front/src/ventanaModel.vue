<template>
<div>

  <!-- MODAL SUGERENCIAS -->

    <modal name="sugerencias-modal"
          transition="nice-modal-fade"
          classes="demo-modal-class"
          :min-width="200"
          :min-height="200"
          :pivot-y="0.5"
          :adaptive="true"
          :scrollable="true" 
          :reset="true"
          width="60%"
          height="auto"
          @before-open="beforeOpen"
          @opened="opened"
          @closed="closed"
          @before-close="beforeClose">
    <div class="sugerencias-modal-content">
      <h3> Sugerencia Subdirector de Departamento </h3>
  <!--    <div v-for="(p, i) in paragraphs" :key="i">-->
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis.
        Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
        Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum,
        nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat.
        Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis.
        Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
        Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum,
        nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat.
        Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis.
        Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
        Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum,
        nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat.
        Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis.
        Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
        Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum,
        nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat.
        Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis.
        Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
        Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum,
        nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat.
        Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis.
        Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
      </div>
    </div>
  </modal>


  <!-- MODAL SUGERIR -->

  <modal name="sugerir-modal"
          transition="nice-modal-fade"
          classes="demo-modal-class"
          :min-width="200"
          :min-height="200"
          :pivot-y="0.5"
          :adaptive="true"
          :scrollable="true"
          :reset="true"
          width="60%"
          height="auto"
          @before-open="beforeOpen"
          @opened="opened"
          @closed="closed"
          @before-close="beforeClose">

    <div class="sugerir-modal-content">
      <h3> Realizar Resolución </h3>
      <textarea name="" id="" cols="100" rows="15"></textarea>
       <button class="registrarR"> Aceptar </button>
    </div>

    

  </modal>

   <!-- MODAL REGISTRAR RECLAMO -->

    <modal name="registrar-modal"
          transition="nice-modal-fade"
          classes="demo-modal-class"
          :min-width="200"
          :min-height="200"
          :pivot-y="0.5"
          :adaptive="true"
          :scrollable="true"
          :reset="true"
          width="60%"
          height="auto"
          @before-open="beforeOpen"
          @opened="opened"
          @closed="closed"
          @before-close="beforeClose">

    <div class="registrar-modal-content">
      <h3> Ingresar Reclamo </h3>

       <form class="formRegistro" > 
        <div class="row">
            <div class="col-md form-group col-2b">
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

            <div class="col-md form-group col-2b">
                <label for="rut" class="form-control-label">Día / Mes / Año</label>
                <input  name="rut"  class="form-control" required>
            </div>
        </div>

        <div class="row col-md form-group">
	    	  <label>Título</label>
          <textarea class="form-control" id="solicitud" rows="3" required></textarea>
        </div>
     
        <div class="row col-md form-group">
            <label>Contenido</label>
            <textarea class="form-control" id="razones" rows="10" required></textarea>
        </div>       
    </form>

    <button class="registrarR" > Ingresar </button>
    </div>

  </modal>


     <!-- MODAL VER RECLAMO -->

    <modal name="verReclamo-modal"
          transition="nice-modal-fade"
          classes="demo-modal-class"
          :min-width="200"
          :min-height="200"
          :pivot-y="0.5"
          :adaptive="true"
          :scrollable="true"
          :reset="true"
          width="60%"
          height="auto"
          @before-open="beforeOpen"
          @opened="opened"
          @closed="closed"
          @before-close="beforeClose">

    <div class="verReclamo-modal-content">
      <h3> Título </h3>

       <form class="formRegistro" > 
        <div class="row">
            <div class="col-md form-group col-2b">
                <label for="clasificacion" class="form-control-label">Clasificación  </label>
                <input  name="rut"  class="form-control" readonly>
            </div>

            <div class="col-md form-group col-2b">
                <label for="rut" class="form-control-label">Día / Mes / Año</label>
                <input  name="rut"  class="form-control" readonly>
            </div>
        </div>

        <div class="row col-md form-group">
            <label>Contenido</label>
            <textarea class="form-control" id="razones" rows="10" readonly></textarea>
        </div>       
    </form>
    </div>

  </modal>

  <!-- MODAL FLUJO RECLAMO -->

  <modal name="fechas-modal"
          transition="nice-modal-fade"
          classes="demo-modal-class"
          :min-width="200"
          :min-height="200"
          :pivot-y="0.5"
          :adaptive="true"
          :scrollable="true"
          :reset="true"
          width="60%"
          height="auto"
          @before-open="beforeOpen"
          @opened="opened"
          @closed="closed"
          @before-close="beforeClose">

    <div class="fechas-modal-content">
      <h3> Flujo de Reclamo </h3>
      <div> <label> Fecha de Ingreso: 22/10/2018</label> </div>
      <div> <label> Servicio al cliente: En revisión</label> </div>
      <div> <label> Comisión: Pendiente</label> </div>
    </div>

  </modal>


    <!-- MODAL CAMBIAR ESTADO -->

  <modal name="cambiarFlujo-modal"
          transition="nice-modal-fade"
          classes="demo-modal-class"
          :min-width="200"
          :min-height="200"
          :pivot-y="0.5"
          :adaptive="true"
          :scrollable="true"
          :reset="true"
          width="60%"
          height="auto"
          @before-open="beforeOpen"
          @opened="opened"
          @closed="closed"
          @before-close="beforeClose">

    <div class="cambiarFlujo-modal-content">
      <h3> Flujo de Reclamo </h3>
      <div> <label> Fecha de Ingreso: 22/10/2018</label> </div>
      <div> <label> Servicio al cliente: En revisión</label> </div>
      <div> <label> Comisión: Pendiente</label> </div>
    </div>

    <button class="registrarR" > Continuar Flujo </button>

  </modal>

   <!-- MODAL FECHAS -->

  <modal name="resolucion-modal"
          transition="nice-modal-fade"
          classes="demo-modal-class"
          :min-width="200"
          :min-height="200"
          :pivot-y="0.5"
          :adaptive="true"
          :scrollable="true"
          :reset="true"
          width="60%"
          height="auto"
          @before-open="beforeOpen"
          @opened="opened"
          @closed="closed"
          @before-close="beforeClose">

    <div class="resolucion-modal-content">
      <h3> Resolución </h3>
            <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis.
        Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
        Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum,
        nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat.
        Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis.
        Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
        Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum,
        nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat.
        Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis.
        Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
        Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum,
        nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat.
        Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis.
        Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
        Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum,
        nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat.
        Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis.
        Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
        Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum,
        nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat.
        Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis.
        Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
      </div>
    </div>

  </modal> 

</div>
</template>
<script>
  export default {
    name: 'SizeModalTest',
    data () {
      return {
        paragraphs: [true],
        timer: null
      }
    },
    methods: {
      beforeOpen () {
        this.timer = setInterval(() => {
          this.paragraphs.push(true)
        }, 5000)
      },
      beforeClose () {
        clearInterval(this.timer)
        this.timer = null
        this.paragraphs = []
      },
      opened (e) {
        // e.ref should not be undefined here
        console.log('opened', e)
        console.log('ref', e.ref)
      },
      closed (e) {
        console.log('closed', e)
      }
    }
  }
</script>