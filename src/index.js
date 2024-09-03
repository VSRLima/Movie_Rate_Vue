import { reactive, ref } from "vue";
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
        openDialog() {
            this.isDialogOpen = !this.isDialogOpen;
        },
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
        hasErrors() {
            this.formErrors = reactive([]);
            const urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
            if (!this.movieName) {
                this.formErrors.push("Missing movie name");
            }
            
            if (!this.movieDescription) {
                this.formErrors.push("Missing movie description");
            }

            if (!this.movieImg || !urlRegex.test(this.movieImg)) {
                this.formErrors.push("Missing movie Image");
            }

            if (!this.movieGenre) {
                this.formErrors.push("Missing movie genre");
            }

            if (!this.formErrors.length) {
                return false;
            }
            return true;
        },
        clearForm() {
            this.movieName = null
            this.movieDescription = null
            this.movieImg = null
            this.movieGenre = null
            this.movieTheaters = false;
        },
        addCard() {
            if (this.hasErrors()) 
                return false;
                

            const newMovie = {
                id: movies.items.length + 1,
                name: this.movieName,
                description: this.movieDescription,
                image: this.movieImg,
                rating: 0,
                genres: [this.movieGenre],
                inTheaters: this.movieTheaters || false,
            }

            movies.items.push(newMovie);
            this.clearForm();
            this.openDialog();

        },
    },
    data() {
        return {
            allStars: 5,
            movieName: ref(null),
            movieDescription: ref(null),
            movieImg: ref(null),
            movieGenre: ref(null),
            movieGenreOptions: ["Action", "Drama", "Terror", "Sci-Fi"],
            movieTheaters: ref(null),
            isDialogOpen: ref(false),
            formErrors: ref([]),
            showForm: false,
        }
    }
}