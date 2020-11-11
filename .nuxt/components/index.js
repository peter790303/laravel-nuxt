export { default as Carousel } from '../..\\components\\Carousel.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Modal } from '../..\\components\\Modal.vue'
export { default as RunMarque } from '../..\\components\\RunMarque.vue'
export { default as SearchBar } from '../..\\components\\SearchBar.vue'

export const LazyCarousel = import('../..\\components\\Carousel.vue' /* webpackChunkName: "components_Carousel" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyModal = import('../..\\components\\Modal.vue' /* webpackChunkName: "components_Modal" */).then(c => c.default || c)
export const LazyRunMarque = import('../..\\components\\RunMarque.vue' /* webpackChunkName: "components_RunMarque" */).then(c => c.default || c)
export const LazySearchBar = import('../..\\components\\SearchBar.vue' /* webpackChunkName: "components_SearchBar" */).then(c => c.default || c)
