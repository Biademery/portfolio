<template>
  <div>
    <v-card id="home">
      <v-col class="intro">
        <v-row>
          <h2>Olá! Eu sou</h2>
          <h1>Bia D'Emery</h1>
          <p>Web Developer</p>
        </v-row>

        <v-row>
          <a href="https://www.linkedin.com/in/biademery" target="_blank">
            <linkedin></linkedin>
          </a>
          <a href="https://github.com/Biademery" target="_blank">
            <github></github>
          </a>
        </v-row>

        <v-row>
          <v-btn id="CV">
            <a href="../assets/CV.pdf" target="_blank">CV</a>
          </v-btn>
        </v-row>
      </v-col>

      <v-col class="image">
        <v-img src="../assets/images/BD.png" alt="Bia" />
      </v-col>
    </v-card>

    <v-card id="about">
      <v-card class="sobre">
        <v-card-title>Sobre Mim</v-card-title>
        <v-card-text class="sobre p">
          Estudante, atualmente cursando Sistemas para Internet na faculdade UNIESP Centro
          Universitário. Em busca da primeira oportunidade para desenvolver competências na área
          de desenvolvimento web.
        </v-card-text>
      </v-card>
      <v-card class="sobre formacao">
          <v-card-title>Formação</v-card-title>
          <v-card-subtitle>UNIESP Centro Universitário</v-card-subtitle>
          <v-row class="formacao curso">Sistemas para internet</v-row>
          <v-row class="formacao data">Ago 2022 - Ago 2024</v-row>
          <v-card-text class="formacao descricao">
            Desenvolvimento de sistemas corporativos, aplicativos web e mobile, sistemas para
            comércio eletrônico, além de portais para internet e intranet.
          </v-card-text>
      </v-card>
      <v-card class="sobre skill">
          <v-card-title>Skills</v-card-title>
          
          <v-card-item>JavaScript</v-card-item>
          <v-card-item>HTML</v-card-item>
          <v-card-item>CSS</v-card-item>
          <v-card-item>Git</v-card-item>
          <v-card-item>Python</v-card-item>
          <v-card-item>Linux</v-card-item>
          <v-card-item>Vue</v-card-item>
          <v-card-item>Django</v-card-item>
      </v-card>
      <v-card class="sobre projetos">
        <v-card-title>Projetos</v-card-title>

      </v-card>
    </v-card>
    

    <v-card id="contato">
        <v-card-title>Contato</v-card-title>
        <v-list lines="2">
          <v-list-item>
            <github></github>
            <p>Email</p>
            <p>Biademery@gmail.com</p>
          </v-list-item>
          <v-list-item>
            <mapPin></mapPin>
            <p>Localização</p>
            <p>João Pessoa - PB, Brasil</p>
          </v-list-item>
        </v-list>
    </v-card>
  </div>
</template>

<script>
import github from '../assets/icons/github.vue'
import arrowUp from '../assets/icons/arrow-up.vue'
import linkedin from '../assets/icons/linkedin.vue'
import mail from '../assets/icons/mail.vue'
import mapPin from '../assets/icons/map-pin.vue'

export default {
  name: 'home',
  components: {
    github,
    arrowUp,
    linkedin,
    mail,
    mapPin
  }

}
</script>

<style scoped>
#home {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
}

.intro {
  margin: auto;
}

.intro h1 {
  font-size: 70px;
}

.intro p {
  margin-bottom: 20px;
}

.icons img {
  max-width: 60px;
}

v-btn {
  background-color: #1a110e;
  color: #d6d6d6;
  box-shadow: rgba(20, 13, 13, 0.5) 0px 15px 30px 0px;
  border: none;
  border-radius: 5px;
  padding: 15px 35px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 20px;

}

v-btn:hover {
  background-color: #836d58;
  color: #1a110e;
  cursor: pointer;
}

.image {
  margin: auto;
  background-image: linear-gradient(90deg, #1a110e 0%, #836d58 100%);
  border-radius: 50%;
  box-shadow: rgba(20, 13, 13, 0.5) 0px 15px 30px 0px;
  display: flex;
  padding: 0.8%;
}

.image img {
  width: 100%;
  border-radius: 50%;
}

#about,
#contato {
  padding: 0 10%;
  padding-top: 120px;
}

.sobre h1,
#contato h1 {
  font-size: 40px;
}

.sobre.p {
  margin-bottom: 20px;
}

.formacao.curso {
  font-weight: bold;
}

.formacao.data {
  font-weight: lighter;
  font-size: 12px;
}

.skill {
  margin: 20px 0;
}

.skill div {
  height: 30px;
}

.skill ul {
  margin-top: 10px;
  list-style-type: none;
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: space-around;
}

.skill li {
  height: fit-content;
  font-size: 15px;
  border: 2px solid #1a110e;
  border-radius: 5px;
  padding: 5px;
  transition: font-size 0.3s;
  cursor: default;
}

.skill li:hover {
  font-size: 20px;
}

.grid {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;
}

.projetos p {
  padding: 20px 0;
}

.projetos img {
  width: 100%;
  border-radius: 5px;
}

.projetos img:hover {
  opacity: 0.9;
}

.projetos h3 {
  font-size: 25px;
  text-align: center;
  padding: 10px 0;
}

#contato h1 {
  margin-bottom: 3%;
  text-align: center;
}

#contato ul {
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  flex-wrap: wrap;
}

#contato li {
  text-align: center;
  width: 200px;
  height: 120px;
  background-color: #1a110e;
  color: #d6d6d6;
  border-radius: 10px;
  box-shadow: rgba(20, 13, 13, 0.5) 0px 15px 30px 0px;
  margin-top: 20px;
}

#contato img {
  width: 50px;
}

.localizacao {
  margin-top: 5px;
}

#contato p {
  padding: 5px;
}
</style>