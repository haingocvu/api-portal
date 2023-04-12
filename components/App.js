import Header from './Header.js';

export default {
  data() {
    return {
      count: 1,
    };
  },
  computed: {},
  components: {
    Header,
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
    <div>
      <Header />
    </div>`,
};
