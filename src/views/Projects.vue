<template>
  <div class="projects-screen">
    <v-nav-bar />
    <div
        v-for="project in projects"
        :key="project.company" 
        class="projects-screen-project-link"
    >
        <v-avatar 
                 :imgUrl="project.img"
                 small
        />
        <div class="projects-screen-project-link-description">
            <h2 class="projects-screen-project-link-description__text--bold">{{ project.company }}</h2>
            <span class="projects-screen-project-link-description__text--light">
                {{ project.from }} - {{ project.to }}
            </span>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/shared/navigation/NavBar.vue";
import Avatar from "@/components/shared/media/Avatar.vue";

export default {
  name: ["Projects"],
  components: {
    "v-nav-bar": NavBar,
    "v-avatar": Avatar,
  },
  data() {
      return {
          projects: [
              {
                img: require("@/assets/company-logos/mercedes.jpg"),
                company: "Mercedes-Benz",
                from: "01.10.2020",
                to: "Heute"
              },
              {
                img: require("@/assets/company-logos/boehringer-ingelheim.png"),
                company: "Boehringer Ingelheim",
                from: "01.07.2020",
                to: "31.09.2020"
              },
              {
                img:  require("@/assets/company-logos/blackhound.png"),
                company: "blackHound Agency",
                from: "01.04.2020",
                to: "31.06.2020"
              },
              {
                img: require("@/assets/company-logos/ikea.jpg"),
                company: "IKEA Deutschland",
                from: "01.09.2017",
                to: "31.03.2020"
              },
              {
                img: require("@/assets/company-logos/2vizcon.png"),
                company: "2VizCon",
                from: "01.01.2017",
                to: "31.08.2017"
              },
              {
                img: require("@/assets/company-logos/deutsche-bahn.png"),
                company: "Deutsche Bahn",
                from: "01.04.2016",
                to: "31.09.2016"
              },
              {
                img: require("@/assets/company-logos/deutscher-wetterdienst.jpg"),
                company: "Deutscher Wetterdienst",
                from: "01.03.2015",
                to: "31.10.2016"
              },
              {
                img: require("@/assets/company-logos/frauas.png"),
                company: "Frankfurt UAS",
                from: "01.10.2011",
                to: "01.10.2015"
              },
          ]
      }
  }
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.projects-screen {
  @include screen;
  background-color: $white;

  &-project-link {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-top: 1px solid #dedede;
      padding: 15px 10px;
      transition: 0.5s all;
      cursor: pointer;

      &-description {
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
</style>
