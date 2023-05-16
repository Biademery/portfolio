<template>
  <main>
    <section id="home">
      <div class="intro">
        <h2>Olá! Eu sou</h2>
        <h1>Bia D'Emery</h1>
        <p>Web Developer</p>
        <div class="icons">
          <a href="https://www.linkedin.com/in/biademery" target="_blank">
            <img src="../assets/icons/linkedinIcon.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Biademery" target="_blank">
            <img src="../assets/icons/githubnIcon.png" alt="Github" />
          </a>
        </div>
        <button id="CV" class="button">
          <a href="../assets/CV.pdf" target="_blank">CV</a>
        </button>
      </div>
      <div class="image">
        <img src="../assets/images/BD.png" alt="Bia" />
      </div>
    </section>

    <section id="about">
      <div class="sobre">
        <h1>Sobre Mim</h1>
        <p class="sobre p">
          Estudante, atualmente cursando Sistemas para Internet na faculdade UNIESP Centro
          Universitário. Em busca da primeira oportunidade para desenvolver competências na área
          de desenvolvimento web.
        </p>
        <div class="sobre formacao">
          <h1>Formação</h1>
          <h2>UNIESP Centro Universitário</h2>
          <h3 class="formacao curso">Sistemas para internet</h3>
          <p class="formacao data">Ago 2022 - Ago 2024</p>
          <p class="formacao descricao">
            Desenvolvimento de sistemas corporativos, aplicativos web e mobile, sistemas para
            comércio eletrônico, além de portais para internet e intranet.
          </p>
        </div>
        <div class="sobre skill">
          <h1>Skills</h1>
              <v-card>JavaScript</v-card>
              <v-card>HTML</v-card>
              <v-card>CSS</v-card>
              <v-card>Git</v-card>
              <v-card>Python</v-card>
              <v-card>Linux</v-card>
              <v-card>Vue</v-card>
              <v-card>Django</v-card>
        </div>
      </div>
      <div class="sobre projetos">
        <h1>Projetos</h1>
        <div class="grid">
          <v-card>

          </v-card>
        </div>
      </div>
    </section>

    <section id="contato">
      <div>
        <h1>Contato</h1>
        <ul>
          <li>
            <img src="../assets/icons/mail.png" alt="Email">
            <p>Email</p>
            <p>Biademery@gmail.com</p>
          </li>
          <li>
            <img class="localizacao" src="../assets/icons/pin.png" alt="Localização">
            <p>Localização</p>
            <p>João Pessoa - PB, Brasil</p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>


export default {
  name: 'home',

}
</script>
