import Menu from './menu/Menu.js';

import { getListProject } from './../services/project.service.js';

export default {
  data() {
    return {
      listProject: [],
    };
  },
  components: {
    Menu,
  },
  mounted() {
    getListProject().then((data) => {
      this.listProject = data;
      console.log(data);
    });
  },
  template: /*html*/ `
    <nav>
        <div class="side-nav-wrapper">
          <img class="logo" alt="vib logo" src="../assets/images/logo.png" />
          <Menu :itemsData="listProject"/>
        </div>
    </nav>`,
};
