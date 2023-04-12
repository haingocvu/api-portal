export default {
  data() {
    return {
      count: 1,
      disabled: false,
      seen: false,
      someObj: {},
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery',
        ],
      },
      firstname: 'Nam',
      lastname: 'Le',
      danger: true,
    };
  },

  computed: {
    publisherBookMessage() {
      return this.author.books.length > 0 ? 'yes' : 'no';
    },
    fullname: {
      get() {
        return `${this.firstname} ${this.lastname}`;
      },
    },
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
    console.log('count', this.count);
    const newObj = {};
    this.someObj = newObj;
    console.log('euqal', newObj === this.someObj);
    this.increment();
  },
  template: /*html*/ `<div :id="count">
    count is {{count}}
    <button :disabled="disabled" :id="disabled ? 1 : 2" @click="increment">Click me</button>
    <div v-if="seen">Seen</div>
    <div>{{publisherBookMessage}}</div>
    <div>{{fullname}}</div>
    <div :class="{'text-danger': danger}">Test class</div>
  </div>`,
};
