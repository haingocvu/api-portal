import { getvalueFromHash } from './../utils/route.js';

export default {
  data() {
    return {
      currentPath: '',
    };
  },
  watch: {
    currentPath(newPath, oldPath) {
      console.log(newPath);
      const swaggerUrl = getvalueFromHash(newPath);
      // TODO: read schema and render swagger ui
      window.ui = SwaggerUIBundle({
        url: 'https://petstore3.swagger.io/api/v3/openapi.json',
        dom_id: '#swagger-ui',
      });
    },
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash;
    });
    this.currentPath = window.location.hash;
  },
  template: /*html*/ `
    <div>
        <div id="swagger-ui"></div>
    </div>`,
};
