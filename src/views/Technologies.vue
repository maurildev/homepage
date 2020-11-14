<template>
    <div class="technologies-screen">
      <v-nav-bar />
      <h1 class="technologies-screen__headline">{{ translations.technologies.languages }}</h1>
      <div class="technologies-screen-technology-logos">
        <v-logo
           v-for="logo in languageLogos"
          :key="logo.name"
          :imgUrl="logo.img"
          :text="logo.name"
          small
        />
      </div>
      <h1 class="technologies-screen__headline">{{ translations.technologies.javascriptFrameworks }}</h1>
      <div class="technologies-screen-technology-logos">
        <v-logo
           v-for="logo in javascriptFrameworkLogos"
          :key="logo.name"
          :imgUrl="logo.img"
          :text="logo.name"
          small
        />
      </div>
      <h1 class="technologies-screen__headline">{{ translations.technologies.cssFrameworks }}</h1>
      <div class="technologies-screen-technology-logos">
        <v-logo
           v-for="logo in cssFrameworkLogos"
          :key="logo.name"
          :imgUrl="logo.img"
          :text="logo.name"
          small
        />
      </div>
      <h1 class="technologies-screen__headline">{{ translations.technologies.design }}</h1>
      <div class="technologies-screen-technology-logos">
        <v-logo
           v-for="logo in designLogos"
          :key="logo.name"
          :imgUrl="logo.img"
          :text="logo.name"
          small
        />
      </div>
      <h1 class="technologies-screen__headline">{{ translations.technologies.other }}</h1>
      <div class="technologies-screen-technology-logos">
        <v-logo
           v-for="logo in otherLogos"
          :key="logo.name"
          :imgUrl="logo.img"
          :text="logo.name"
          small
        />
      </div>
    </div>
</template>

<script>
import NavBar from "@/components/shared/navigation/NavBar.vue";
import Logo from "@/components/shared/media/Logo.vue";
import { mapGetters } from "vuex";

export default {
  name: "Technologies",
  components: {
    "v-nav-bar": NavBar,
    "v-logo": Logo
  },
  data() {
    return {
      languageLogos: [
        {
          img: require("@/assets/technology-logos/html5.png"),
          name: "HTML"
        },
        {
          img: require("@/assets/technology-logos/css3.png"),
          name: "CSS"
        },
        {
          img: require("@/assets/technology-logos/javascript.png"),
          name: "JavaScript"
        },
        {
          img: require("@/assets/technology-logos/es6.png"),
          name: "ES6"
        },
        {
          img: require("@/assets/technology-logos/typescript.png"),
          name: "TypeScript"
        },
        {
          img: require("@/assets/technology-logos/sass.png"),
          name: "Sass"
        },
        {
          img: require("@/assets/technology-logos/bash.png"),
          name: "Bash"
        },
        {
          img: require("@/assets/technology-logos/python.png"),
          name: "Python"
        }
      ],
      javascriptFrameworkLogos: [
        {
          img: require("@/assets/technology-logos/vue.png"),
          name: "Vue"
        },
        {
          img: require("@/assets/technology-logos/nuxt.png"),
          name: "Nuxt"
        },
        {
          img: require("@/assets/technology-logos/vuetify.png"),
          name: "Vuetify"
        },
        {
          img: require("@/assets/technology-logos/servicenow.jpg"),
          name: "ServiceNow"
        },
        {
          img: require("@/assets/technology-logos/react.png"),
          name: "React"
        },
        {
          img: require("@/assets/technology-logos/cypress.png"),
          name: "Cypress"
        },
        {
          img: require("@/assets/technology-logos/nodejs.png"),
          name: "NodeJs"
        },
        {
          img: require("@/assets/technology-logos/express.png"),
          name: "Express"
        },
        {
          img: require("@/assets/technology-logos/ejs.png"),
          name: "Ejs"
        },
        {
          img: require("@/assets/technology-logos/gsap.png"),
          name: "Gsap"
        },
        {
          img: require("@/assets/technology-logos/webpack.png"),
          name: "Webpack"
        },
        {
          img: require("@/assets/technology-logos/grunt.png"),
          name: "Grunt"
        }
      ],
      cssFrameworkLogos: [
        {
          img: require("@/assets/technology-logos/bootstrap.png"),
          name: "Bootstrap"
        },
        {
          img: require("@/assets/technology-logos/foundation.png"),
          name: "Foundation"
        },
        {
          img: require("@/assets/technology-logos/materialize.png"),
          name: "Materialize"
        },
        {
          img: require("@/assets/technology-logos/uikit.png"),
          name: "UI Kit"
        }
      ],
      designLogos: [
       {
          img: require("@/assets/technology-logos/ps.png"),
          name: "Photoshop"
        },
        {
          img: require("@/assets/technology-logos/affinity-designer.png"),
          name: "Affinity Designer"
        },
        {
          img: require("@/assets/technology-logos/affinity-photo.png"),
          name: "Afifiinty Photo"
        },
      ],
      otherLogos: [
        {
          img: require("@/assets/technology-logos/vscode.png"),
          name: "VS Code"
        },
        {
          img: require("@/assets/technology-logos/git.png"),
          name: "Git"
        },
        {
          img: require("@/assets/technology-logos/github.png"),
          name: "GitHub"
        },
        {
          img: require("@/assets/technology-logos/gitlab.png"),
          name: "Gitlab"
        },
        {
          img: require("@/assets/technology-logos/npm.png"),
          name: "npm"
        },
        {
          img: require("@/assets/technology-logos/jenkins.png"),
          name: "Jenkins"
        },
        {
          img: require("@/assets/technology-logos/jira.jpeg"),
          name: "Jira"
        },
        {
          img: require("@/assets/technology-logos/confluence.jpeg"),
          name: "Confluence"
        },
        {
          img: require("@/assets/technology-logos/bem.png"),
          name: "BEM"
        },
        {
          img: require("@/assets/technology-logos/json.png"),
          name: "JSON"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["translations"]),
  }
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.technologies-screen {
  @include screen;
  background: $white;

  &__headline {
    display: block;
    font-size: 28px;
    color: #000;
    margin-bottom: 30px;
  }

  &-technology-logos{
    display: grid;
    grid-template-columns: repeat(auto-fill,100px);
    grid-row-gap: 25px;
    justify-content: space-around;
    margin-bottom: 60px;
  }
}
</style>
