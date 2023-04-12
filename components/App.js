import Header from './Header.js';
import SideNav from './SideNav.js';
import Footer from './Footer.js';
import Main from './Main.js';

export default {
  data() {
    return {
      count: 1,
    };
  },
  computed: {},
  components: {
    Header,
    SideNav,
    Footer,
    Main,
  },
  methods: {
    increment() {
      this.count++;
      console.log(this.count);
    },
    renderSwagger() {
      window.ui = SwaggerUIBundle({
        url: 'https://petstore3.swagger.io/api/v3/openapi.json',
        dom_id: '#swagger-ui',
      });
    },
  },
  mounted() {
    console.log('mounted');
  },
  template: /*html*/ `
    <div class="pageWrapper">
      <div class="nav-bar">
        <SideNav />
      </div>
      <div class="wrapper">
        <div class="header">
          <Header title="IB API Portal" />
        </div>
        <div class="main-content">
          <Main />
        </div>
        <div class="footer">
          <Footer title="Made by IB with love!" />
        </div>
      </div>
    </div>`,
};
