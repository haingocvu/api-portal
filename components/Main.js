export default {
  data() {
    return {};
  },
  mounted() {
    window.ui = SwaggerUIBundle({
      url: 'https://petstore3.swagger.io/api/v3/openapi.json',
      dom_id: '#swagger-ui',
    });
  },
  template: /*html*/ `
    <div>
        <select>
            <option>1</option>
            <option>2</option>
        </select>
        <div id="swagger-ui"></div>
    </div>`,
};
