<template>
  <div>


    <header >
      <div class="branding">
        <img class ="logo-small" src="./img/logo2.png" />
      </div>

      <nav>
        <a href="#/listado">Reclamos</a>
      </nav>
    </header>

    <main class="container">
      <router-view></router-view>
    </main>

    

</div>
</template>

<script>
export default {
}
</script>