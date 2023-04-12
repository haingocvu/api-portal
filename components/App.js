export default {
  data() {
    return {
      count: 0,
      disabled: false,
      renderSwagger() {
        window.ui = SwaggerUIBundle({
          url: 'https://petstore3.swagger.io/api/v3/openapi.json',
          dom_id: '#swagger-ui',
        });
      },
    };
  },
  template: /*html*/ `<div :id="count">
    count is {{count}}
    <button :disabled="disabled" :id="disabled ? 1 : 2" @click="renderSwagger()">Hello how are you today</button>
  </div>`,
};
