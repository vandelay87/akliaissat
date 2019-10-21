import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })

  Vue.component('Layout', DefaultLayout)
}
