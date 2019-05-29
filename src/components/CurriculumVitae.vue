<template>
  <article class="cv">
    <Heading title="Check out my CV" align="centre"/>
    <section class="block col3">
      <div class="subBlock">
        <Heading title="Technologies" :size="2"/>
      </div>
      <div class="subBlock">
        <Heading title="Comfortable" :size="3"/>
        <div class="icons">
          <div v-for="(skill, index) in technologies.good" :key="index" class="icon">
            <Icon :icon="skill.name"/>
            <span class="label">{{ skill.label }}</span>
          </div>
        </div>
      </div>
      <div class="subBlock">
        <Heading title="It's been a while" :size="3"/>
        <div class="icons">
          <div v-for="(skill, index) in technologies.ok" :key="index" class="icon">
            <Icon :icon="skill.name"/>
            <span class="label">{{ skill.label }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="block col2">
      <div class="subBlock">
        <Heading title="Work Experience" :size="2"/>
      </div>
      <div class="subBlock">
        <div v-for="exp in experience" :key="exp.key">
          <Heading :title="exp.company" :subtitle="exp.role" :size="3"/>
          <p class="info">{{ exp.description }}</p>
        </div>
      </div>
    </section>
    <section class="block col2">
      <div class="subBlock">
        <Heading title="Education" :size="2"/>
      </div>
      <div class="subBlock">
        <div v-for="edu in education" :key="edu.key">
          <Heading :title="edu.university" :size="3"/>
          <p class="info">{{ edu.award }}</p>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import Heading from "./generic/heading/Heading";
import Icon from "./generic/Icon";

export default {
  name: "CurriculumVitae",
  components: {
    Heading,
    Icon
  },
  props: {
    technologies: {
      type: Object,
      required: true
    },
    education: {
      type: Array,
      required: true
    },
    experience: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
@import "../assets/breakpoints.scss";
@import "../assets/colours.scss";

.cv {
  @extend .wrapper;

  .block {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    background: $gray;
    padding: 1em 0;

    &:nth-child(odd) {
      background: $lightGray;
    }

    @include breakpoint(tablet) {
      flex-direction: row;
      padding: 0;
    }

    .subBlock {
      width: 100%;
      padding: 1em;
      box-sizing: border-box;
      padding: 0 1em;

      .icons {
        display: flex;
        flex-flow: wrap;
        justify-content: flex-start;
        margin: 0 0 0 -0.75em;

        @include breakpoint(tablet) {
          margin: 0 0 1em -0.75em;
        }

        > .icon {
          max-width: 3em;
          margin: 0.75em;
          border: 0;
          transition: all 0.2s ease-in-out;

          &:hover {
            transform: scale(1.4);
          }

          .label {
            display: block;
            font-size: 0.625em;
            font-weight: 600;
            text-align: center;
          }
        }
      }

      @include breakpoint(tablet) {
        flex: 1;

        .list {
          padding-bottom: 1.75em;
        }
      }

      div {
        border-bottom: 1px solid $border;

        &:last-child {
          border: none;
        }

        .info {
          padding: 0 0 0.75em;
        }
      }
    }

    @include breakpoint(tablet) {
      &.col2 {
        .subBlock {
          &:nth-of-type(2) {
            flex: 2;
          }
        }
      }
    }
  }
}
</style>
