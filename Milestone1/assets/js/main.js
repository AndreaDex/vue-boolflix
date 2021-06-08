const app = new Vue({
  el: "#app",
  data: {
    url: "https://api.themoviedb.org/3/search/movie",
    apiKey: "fbd2d625ea378bc924e2a3395e7ebe20",
    query: "anelli",
  },
  methods: {},
  computed: {},
  mounted() {
    let fullUrl = `${this.url}?api_key=${this.apiKey}&query=${this.query}`;
  },
});
