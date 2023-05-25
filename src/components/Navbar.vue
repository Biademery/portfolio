<template>
    <nav class="nav">
        <a class="nav-link" href="#">
          <v-img src="../assets/images/logo.png" width="18%" alt="logo"></v-img>
        </a>
        <a href="#">Home</a>
        <a href="#about">Sobre</a>
        <a :href="{CV}" target="_blank">Currículo</a>
        <a class="mr-5" href="#contato">Contato</a>
    </nav>
</template>

<script></script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a110e;
  position: fixed;
  width: 100%;
}
</style>