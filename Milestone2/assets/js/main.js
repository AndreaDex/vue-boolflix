const app = new Vue({
  el: "#app",
  data: {
    url: "https://api.themoviedb.org/3",
    movieEnd: "/search/movie",
    tvEnd: "/search/tv",
    apiKey: "fbd2d625ea378bc924e2a3395e7ebe20",
    query: "",
    cinema: null,
    tvShows: null,
  },
  methods: {
    searchContent() {
      let fullMovieUrl = `${this.url}${this.movieEnd}?api_key=${this.apiKey}&query=${this.query}`;
      axios
        .get(fullMovieUrl)
        .then((response) => {
          this.cinema = response.data.results;
          /* console.log(this.cinema); */
        })
        .catch((e) => {
          console.log(e);
        });
      let fullTvUrl = `${this.url}${this.tvEnd}?api_key=${this.apiKey}&query=${this.query}`;
      axios
        .get(fullTvUrl)
        .then((response) => {
          this.tvShows = response.data.results;
          /* console.log(this.tvShows); */
        })
        .catch((e) => {
          console.log(e);
        });
    },

    flagSource(key) {
      let source;
      if (key === "en") {
        source = "https://www.countryflags.io/gb/flat/16.png";
      } else {
        source = " `https://www.countryflags.io/`+key+`/flat/16.png` ";
      }
      return source;
    },
  },
  computed: {},
  mounted() {},
});
/*
 *  https://www.countryflags.io/be/shiny/16.png
 */
