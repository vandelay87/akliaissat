import Vue from 'vue';

export default Vue.component('Heading', {
  functional: true,
  props: {
    title: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      validator: (value) => value < 7,
    },
    align: {
      type: String,
      validator: (value) => [
        'left',
        'right',
        'center',
      ].includes(value),
    },
    override: {
      type: String,
      validator: (value) => [
        'mdc-typography--headline1',
        'mdc-typography--headline2',
        'mdc-typography--headline3',
        'mdc-typography--headline4',
        'mdc-typography--headline5',
        'mdc-typography--headline6',
        'mdc-typography--subtitle1',
        'mdc-typography--subtitle2',
      ].includes(value),
    },
    theme: {
      type: String,
      validator: (value) => [
        'mdc-theme--on-primary',
        'mdc-theme--on-secondary',
        'mdc-theme--primary',
        'mdc-theme--secondary',
      ].includes(value),
    },
  },
  render(createElement, context) {
    const {
      title, size, align, override, theme,
    } = context.props;
    const typography = [
      override || (size < 7 ? `mdc-typography--headline${size}` : 'mdc-typography--headline1'),
      theme,
    ];

    return createElement(
      size < 7 ? `h${size}` : 'h1', {
        class: typography,
        style: {
          textAlign: align,
        },
      },
      title,
    );
  },
});
