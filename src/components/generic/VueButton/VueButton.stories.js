import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import VueButton from './VueButton.vue';

storiesOf('Button', module)
  .add('default', () => ({
    components: { VueButton },
    template: `<div class="mdc-layout-grid">
        <VueButton value="button" :click="() => {}"/>
      </div>`
  }))
  .add('types', () => ({
    components: { VueButton },
    template: `<div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell">
          <VueButton value="raised" :click="() => {}" raised/>
        </div>
        <div class="mdc-layout-grid__cell">
          <VueButton value="unelevated" :click="() => {}" unelevated/>
        </div>
        <div class="mdc-layout-grid__cell">
          <VueButton value="outlined" :click="() => {}" outlined/>
        </div>
        <div class="mdc-layout-grid__cell">
          <VueButton value="dense" :click="() => {}" dense/>
        </div>
        </div>
      </div>`
  }))
  .add('disabled', () => ({
    components: { VueButton },
    template: `<div class="mdc-layout-grid">
        <VueButton value="disabled" :click="() => {}" disabled/>
      </div>`
  }))
  .add('icons', () => ({
    components: { VueButton },
    template: `<div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell">
          <VueButton value="warning" :click="() => {}" icon="warning"/>
        </div>
        <div class="mdc-layout-grid__cell">
          <VueButton value="call" :click="() => {}" icon="call"/>
        </div>
        <div class="mdc-layout-grid__cell">
          <VueButton value="star" :click="() => {}" icon="star"/>
        </div>
      </div>`
  }));
