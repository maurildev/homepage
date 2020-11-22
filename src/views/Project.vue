<template>
    <v-nav-bar />
    <div class="project-screen">
      <div class="project-screen-header">
        <v-avatar
          :imgSrc="project.img"
          :text="project.company"
          big
        />
        <span class="project-screen-header__text">
          {{ project.from }} - {{ project.to }}
        </span>
      </div>
      <h1 class="project-screen-headline">Tätigkeiten</h1>
      <ul class="project-screen-task-list">
        <li 
          v-for="task in project.tasks" 
          :key="task"
          class="project-screen-task-list__item"
        >
          {{ task }}
        </li>
      </ul>
      <h1 class="project-screen-headline">Technologien</h1>
      <ul class="project-screen-technology-list">
        <li 
          v-for="logo in project.technologies"
          :key="logo.name"
          class="project-screen-technology-list__item">
            <v-logo
              :imgSrc="logo.img"
              :text="logo.name"
              small
            />
        </li>
      </ul>
    </div>
</template>

<script>
import NavBar from "@/components/shared/navigation/NavBar.vue";
import Avatar from "@/components/shared/media/Avatar.vue";
import Logo from "@/components/shared/media/Logo.vue";
import { projects } from "@/config/projects/projects";

export default {
  name: "Project",
  components: {
    "v-nav-bar": NavBar,
    "v-avatar": Avatar,
    "v-logo": Logo
  },
  computed: {
    project() {
      return projects[this.$route.params.project]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";


.project-screen {
  @include screen;
  background: $white;

  &-header {
    background-color: #fbfaff;
    padding: 10px 0;   

    &__text {
      font-size: 14px;
      margin-top: 10px;
    }
  }

  &-headline {
    display: block;
    font-size: 18px;
    color: #000;
    margin: 30px 0;
  }

  &-task-list {
    list-style: none;

    &__item {
      font-size: 14px;
      text-align: left;
      margin-bottom: 20px;
    }
  }

  &-technology-list{
    display: grid;
    grid-template-columns: repeat(auto-fill,100px);
    grid-row-gap: 25px;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin-bottom: 150px;
  }
}
</style>
