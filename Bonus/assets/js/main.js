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
    actor: null,
    genres: null,
    languageFlags: ["it", "en", "fr", "de", "es"],
  },
  methods: {
    searchContent() {
      let fullMovieUrl = `${this.url}${this.movieEnd}?api_key=${this.apiKey}&query=${this.query}`;
      axios
        .get(fullMovieUrl)
        .then((response) => {
          this.cinema = response.data.results;
        })
        .catch((e) => {
          console.log(e);
        });

      let fullTvUrl = `${this.url}${this.tvEnd}?api_key=${this.apiKey}&query=${this.query}`;
      axios
        .get(fullTvUrl)
        .then((response) => {
          this.tvShows = response.data.results;
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
        source = `https://www.countryflags.io/${key}/flat/16.png`;
      }
      return source;
    },
    showFlag(key) {
      return this.languageFlags.includes(key);
    },

    rateStar(key) {
      return Math.round(key / 2);
    },

    imgSource(key) {
      const url = "https://image.tmdb.org/t/p/w342";
      let fullUrl = url + key;
      return fullUrl;
    },

    placeholderImg(event) {
      event.target.src = "./assets/img/placeholder.png";
    },
    cast(key) {
      const attori = "";
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${key}/credits?api_key=${this.apiKey}`
        )
        .then((response) => {
          attori;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  computed: {},
  mounted() {
    function getMoviesGenre() {
      return axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=fbd2d625ea378bc924e2a3395e7ebe20"
      );
    }
    function getTvShowGenre() {
      return axios.get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=fbd2d625ea378bc924e2a3395e7ebe20"
      );
    }
    Promise.all([getMoviesGenre(), getTvShowGenre()]).then(function (result) {
      const movieGenres = result[0];
      const tvGenres = result[1];
      /* console.log(movieGenres.data.genres);
      console.log(tvGenres.data.genres); */
      this.genres = movieGenres.data.genres;
      this.genres = [...this.genres, ...tvGenres.data.genres];
      console.log(this.genres);
    });
  },
});
/*
 *
 */
