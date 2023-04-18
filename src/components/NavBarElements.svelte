<script>
  export let title;

  const showSearchBar = title != "Home" && title != "Busqueda";
</script>

{#if showSearchBar}
  <li class="menu-item mr-5 form-control">
    <input type="text" placeholder="Buscar" class="input input-primary input-bordered" />
  </li>
{/if}
<li class="menu-item">
  <a href="./About">Sobre nosotros</a>
</li>
<li class="menu-item">
  <a href="./Contact">Contacto</a>
</li>
<li class="menu-item">
  <a href="./Contribute">Contribuye</a>
</li>
