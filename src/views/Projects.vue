<template>
  <div class="projects-screen">
    <v-nav-bar />
    <ul class="projects-screen-project-list">
      <router-link
        v-for="project in projects"
        :key="project.company" 
        tag="li"
        :to="{ name: `project-${$route.meta.languageCode}`, params: { project: project.company.toLowerCase().replace(' ', '-') }}"
        class="projects-screen-project-list-item"
      >
        <v-avatar 
          :imgSrc="project.img"
          small
        />
        <div class="projects-screen-project-list-item-desc">
          <h2 class="projects-screen-project-list-item-desc__text--bold">{{ project.company }}</h2>
          <span class="projects-screen-project-list-item-desc__text--light">
              {{ project.from }} - {{ project.to }}
          </span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/shared/navigation/NavBar.vue";
import Avatar from "@/components/shared/media/Avatar.vue";
import { projects } from "@/config/projects/projects";

export default {
  name: ["Projects"],
  components: {
    "v-nav-bar": NavBar,
    "v-avatar": Avatar,
  },
  data() {
    return {
      projects
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.projects-screen {
  @include screen;
  background-color: $white;

  &-project-list {
    list-style: none;
    padding: 0;
    margin: 0;

    &-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-top: 1px solid #dedede;
      padding: 15px 10px;
      transition: 0.5s all;
      cursor: pointer;

      &-desc {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-left: 50px;

        &__text--bold{
            font-size: 16px;
            font-weight: bold;
            margin: 0 0 5px 0;
        }

        &__text--light{
            font-size: 14px;
            font-weight: lighter;
        }
      }

      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
}
</style>
