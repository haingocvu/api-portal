import MenuItem from './MenuItem.js';

export default {
  data() {
    return {
      selectedIndex: null,
    };
  },
  props: ['itemsData'],
  methods: {
    selectProjectHandler(index) {
      this.selectedIndex = index;
    },
  },
  components: {
    MenuItem,
  },
  template: /*html*/ `
    <div class="menu-wrapper">
        <template v-for="(item, index) of itemsData">
            <MenuItem @click="selectProjectHandler(index)" :selected="index === selectedIndex" :data="item" />
        </template>
    </div>`,
};
