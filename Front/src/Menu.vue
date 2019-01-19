<template>
  <div>


    <header >
      <div class="branding">
        <img class ="logo-small" src="./img/logo2.png" />
      </div>

      <nav>
        <a href="#/">Cerrar Sesión</a>
      </nav>
    </header>

    <main class="container">
      <router-view></router-view>
    </main>

    <footer>
        <div class="columnaFooter">
          <p>Nuestra empresa</p>
            <ul>
              <li>Conócenos</li>
              <li>Sala de Prensa</li>
              <li>VTR Internet Segura</li>
              <li>Zona de Proveedores</li>
              <li>Inmobiliaria</li>
              <li>Lugares y formas de Pago</li>
              <li>Carrier 111</li>
            </ul>
          </div>  
            
        <div class="columnaFooter">
          <p>Términos y regulaciones</p>
            <ul>
              <li>Contrato de servicios VTR</li>
              <li>Cotizador de Servicios</li>
              <li>Liberacion de equipos</li>
              <li>Multibanda SAE - Consulta de IMEI</li>
              <li>Nueva normativa de móviles</li>
              <li>Sistema de Alerta Emergencias (SAE)</li>
              <li>Ley de Neutralidad</li>
            </ul>
        </div>  
             
        <div class="columnaFooterEn">
          <p>Entretención</p>
            <ul>
              <li>Canales HD</li>
              <li>VTR Play</li>
              <li>Concursos</li>
            </ul>
        </div> 
        </footer>

    

</div>
</template>

<script>
export default {
}
</script>