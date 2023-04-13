import { getvalueFromHash } from '../../utils/route.js';
import MenuItem from './MenuItem.js';

export default {
  data() {
    return {
      selectedIndex: null,
      currentPath: '',
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
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash;
    });
    this.currentPath = window.location.hash;
  },
  computed: {
    pathNoHash() {
      return getvalueFromHash(this.currentPath);
    },
  },
  template: /*html*/ `
    <div class="menu-wrapper">
        <template v-for="(item, index) of itemsData">
            <MenuItem @click="selectProjectHandler(index)" :selected="pathNoHash === item.url" :data="item" />
        </template>
    </div>`,
};
