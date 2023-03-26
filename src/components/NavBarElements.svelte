<script>
  export let title;
</script>

{#if title != "Home"}
  <li class="menu-item mr-5 form-control">
    <input type="text" placeholder="Buscar" class="input input-bordered" />
  </li>
{/if}
<li class="menu-item">
  <a href="./About">Sobre nosotros</a>
</li>
<li class="menu-item">
  <a href="./Contact">Contacto</a>
</li>
