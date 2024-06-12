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
          
        }
    },
    data() {
        return {
            allStars: 5,
        }
    }
}