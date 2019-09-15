import { storiesOf } from '@storybook/vue';
import VueButton from './VueButton.vue';

storiesOf('Button', module)
  .add('types', () => ({
    components: { VueButton },
    template: `<div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell">
          <VueButton value="default" :click="() => {}"/>
        </div>
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
        <div class="mdc-layout-grid__cell">
          <VueButton value="disabled" :click="() => {}" disabled/>
        </div>
        </div>
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
      </div>
    </div>`
  }));
