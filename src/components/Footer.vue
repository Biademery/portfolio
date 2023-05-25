<template>
    <v-footer class="footer">
        <a href="#">
            <v-img class="logo" src="../assets/images/logo.png" alt="Logo"></v-img>
        </a>
        <v-card class="icons">
            <a href="https://www.linkedin.com/in/biademery" target="_blank">
                <linkedin></linkedin>
            </a>
            <a href="https://github.com/Biademery" target="_blank">
                <github></github>
            </a>
        </v-card>
        <p id="date"></p>
    </v-footer>
</template>

<script>
import linkedin from '../assets/icons/linkedin.vue';
import github from '../assets/icons/github.vue';

export default {
  components: {
    linkedin,
    github
  }
}
</script>

<style scoped>
.footer {
  background-color: #1a110e;
  color: #d6d6d6;
  margin-top: 80px;
  text-align: center;
}

.footer .logo {
  width: 100px;
}

.footer p {
  padding: 20px;
}
</style>