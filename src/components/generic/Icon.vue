<template>
  <Angular v-if="icon === 'angular'" :class="icon" class="icon"/>
  <Confluence v-else-if="icon === 'confluence'" :class="icon" class="icon"/>
  <CSharp v-else-if="icon === 'cSharp'" :class="icon" class="icon"/>
  <Css v-else-if="icon === 'css'" :class="icon" class="icon"/>
  <DotNet v-else-if="icon === 'dotNet'" :class="icon" class="icon"/>
  <Git v-else-if="icon === 'git'" :class="icon" class="icon"/>
  <Gulp v-else-if="icon === 'gulp'" :class="icon" class="icon"/>
  <Html v-else-if="icon === 'html'" :class="icon" class="icon"/>
  <Jasmine v-else-if="icon === 'jasmine'" :class="icon" class="icon"/>
  <JavaScript v-else-if="icon === 'javascript'" :class="icon" class="icon"/>
  <JQuery v-else-if="icon === 'jQuery'" :class="icon" class="icon"/>
  <Less v-else-if="icon === 'less'" :class="icon" class="icon"/>
  <PhotoShop v-else-if="icon === 'photoshop'" :class="icon" class="icon"/>
  <Php v-else-if="icon === 'php'" :class="icon" class="icon"/>
  <ReactJs v-else-if="icon === 'react'" :class="icon" class="icon"/>
  <Sass v-else-if="icon === 'sass'" :class="icon" class="icon"/>
  <Sql v-else-if="icon === 'sql'" :class="icon" class="icon"/>
  <VueJs v-else-if="icon === 'vue'" :class="icon" class="icon"/>
  <Webpack v-else-if="icon === 'webpack'" :class="icon" class="icon"/>
</template>

<script>
import Angular from "../../assets/images/angularjs.svg";
import Confluence from "../../assets/images/confluence.svg";
import CSharp from "../../assets/images/csharp.svg";
import Css from "../../assets/images/css3.svg";
import DotNet from "../../assets/images/dot-net.svg";
import Git from "../../assets/images/git.svg";
import Gulp from "../../assets/images/gulp.svg";
import Html from "../../assets/images/html5.svg";
import Jasmine from "../../assets/images/jasmine.svg";
import JavaScript from "../../assets/images/javascript.svg";
import JQuery from "../../assets/images/jquery.svg";
import Less from "../../assets/images/less.svg";
import PhotoShop from "../../assets/images/photoshop.svg";
import Php from "../../assets/images/php.svg";
import ReactJs from "../../assets/images/react.svg";
import Sass from "../../assets/images/sass.svg";
import Sql from "../../assets/images/mysql.svg";
import VueJs from "../../assets/images/vuejs.svg";
import Webpack from "../../assets/images/webpack.svg";

export default {
  name: "Icon",
  components: {
    Angular,
    Confluence,
    CSharp,
    Css,
    DotNet,
    Git,
    Gulp,
    Html,
    Jasmine,
    JavaScript,
    JQuery,
    Less,
    PhotoShop,
    Php,
    ReactJs,
    Sass,
    Sql,
    VueJs,
    Webpack
  },
  props: {
    icon: {
      validator: function(value) {
        return (
          [
            "angular",
            "confluence",
            "cSharp",
            "css",
            "dotNet",
            "git",
            "gulp",
            "html",
            "jasmine",
            "javascript",
            "jQuery",
            "less",
            "photoshop",
            "php",
            "react",
            "sass",
            "sql",
            "vue",
            "webpack"
          ].indexOf(value) !== -1
        );
      },
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/colours.scss";

.icon {
  display: inline-block;
  width: 3em;
  height: 3em;
}
</style>
