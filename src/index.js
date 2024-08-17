import { reactive } from "vue";
import movies from "./movies.json"
import { StarIcon } from "@heroicons/vue/24/solid";

export default {
    name: "movie_rate_template",
    components: {
        StarIcon
    },
    computed: {
        movies() {
            return reactive(movies.items);
        }
    },
    methods: {
        clickHandler(rate, movie) {
          if (rate === movie.rating) {
            alert("Button previously clicked!")
            return;
          } 
          movie.rating = rate;
          
        },
        deleteCard(movieId) {
            const movieList = this.movies.filter(el =>  el.id != movieId);
            this.movies = movieList;
        },
        addCard(newMovie) {

        }
    },
    data() {
        return {
            allStars: 5,
            valid: false,
            movieName: "",
            movieDescription: "",
            movieImg: "",
            movieGenre: "",
            movieGenreOptions: ["Action", "Drama", "Terror", "Sci-Fi"]
        }
    }
}