export default {
  data() {
    return {};
  },
  props: ['selected', 'data'],
  computed: {
    computedHref() {
      return `#${this.data.url}`;
    },
  },
  template: /*html*/ `
    <a :href="computedHref">
        <span class="menu-item-wrapper" :class="selected ? 'active' : ''">
            <span class="item-text">{{data && data.name}}</span>
        </span>
    </a>`,
};
