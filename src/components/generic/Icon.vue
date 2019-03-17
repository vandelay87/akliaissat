<template>
  <i :class="icon" class="icon" />
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      icon: {
        validator: function (value) {
          return [
            'angular',
            'confluence',
            'cSharp',
            'css',
            'dotNet',
            'git',
            'gulp',
            'html',
            'jasmine',
            'javascript',
            'jQuery',
            'less',
            'photoshop',
            'php',
            'react',
            'sass',
            'sql',
            'vue',
            'webpack',
          ].indexOf(value) !== -1
        },
        required: true,
        type: String,
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/colours.scss';

  .icon {
    display: inline-block;
    width: 3em;
    height: 3em;

    &.angular {
      background: no-repeat url('../../assets/images/angularjs.svg');
      background-size: contain;
    }

    &.confluence {
      background: no-repeat url('../../assets/images/confluence.svg');
      background-size: contain;
    }

    &.cSharp {
      background: no-repeat url('../../assets/images/csharp.svg');
      background-size: contain;
    }

    &.css {
      background: no-repeat url('../../assets/images/css3.svg');
      background-size: contain;
    }

    &.dotNet {
      background: no-repeat url('../../assets/images/dot-net.svg');
      background-size: contain;
    }

    &.git {
      background: no-repeat url('../../assets/images/git.svg');
      background-size: contain;
    }

    &.gulp {
      background: no-repeat url('../../assets/images/gulp.svg');
      background-size: contain;
    }

    &.html {
      background: no-repeat url('../../assets/images/html5.svg');
      background-size: contain;
    }

    &.jasmine {
      background: no-repeat url('../../assets/images/jasmine.svg');
      background-size: contain;
    }

    &.javascript {
      background: no-repeat url('../../assets/images/javascript.svg');
      background-size: contain;
    }

    &.jQuery {
      background: no-repeat url('../../assets/images/jquery.svg');
      background-size: contain;
    }

    &.less {
      background: no-repeat url('../../assets/images/less.svg');
      background-size: contain;
    }

    &.photoshop {
      background: no-repeat url('../../assets/images/photoshop.svg');
      background-size: contain;
    }

    &.php {
      background: no-repeat url('../../assets/images/php.svg');
      background-size: contain;
    }

    &.react {
      background: no-repeat url('../../assets/images/react.svg');
      background-size: contain;
    }

    &.sass {
      background: no-repeat url('../../assets/images/sass.svg');
      background-size: contain;
    }

    &.sql {
      background: no-repeat url('../../assets/images/mysql.svg');
      background-size: contain;
    }

    &.vue {
      background: no-repeat url('../../assets/images/vuejs.svg');
      background-size: contain;
    }

    &.webpack {
      background: no-repeat url('../../assets/images/webpack.svg');
      background-size: contain;
    }
  }
</style>
