<template>
    <v-btn color="surface-variant" text="Open Dialog" variant="flat" @click="openDialog"></v-btn>
  
  <v-dialog max-width="500" v-model="isDialogOpen">
    <template v-slot:default="{ isActive }">
      <v-card title="Add a new movie" color="#111827" >
        <v-card-item>
          <v-form @submit.prevent="addCard" novalidate="true">
            <v-container class="form-grid">

              <v-text-field v-model="movieName" label="Movie Name" hide-details required></v-text-field>


              <v-textarea v-model="movieDescription" label="Movie Description" hide-details required></v-textarea>


              <v-text-field v-model="movieImg" label="Movie Image" hide-details required></v-text-field>


              <v-select label="Genre" :items="movieGenreOptions" v-model="movieGenre" hide-details required>
              </v-select>

              <v-checkbox label="Is in theaters" v-model="movieTheaters"></v-checkbox>

            </v-container>
            <v-btn class="mt-2" type="Submit">Add</v-btn>
          </v-form>

          <p v-if="formErrors.length">
            <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
            <ul>
              <li v-for="error in formErrors">{{ error }}</li>
            </ul>
          </p>
        </v-card-item>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
  <template v-for="movie in movies" :key="movie.id">
    <v-card class="centralized-margin" max-width="400">
      <v-img cover max-height="600" :src="movie.image">
        <StarIcon :class="movie.rating ? 'movie-item-big-star-icon' : 'movie-item-star-icon-unrated'"></StarIcon>
      </v-img>
      <v-card-item>
        <v-card-title class="my-2">{{ movie.name }}</v-card-title>
        <template v-for="genre in movie.genres">
          <v-chip class="me-2" color="primary" variant="flat">{{ genre }}</v-chip>
        </template>
      </v-card-item>
      <v-card-text>
        <div class="mb-10">{{ movie.description }}</div>
        <div class="d-flex">
          Rating ({{ movie.rating }}/5):
          <template v-for="rate in allStars">
            <button @click.prevent="clickHandler(rate, movie)">
              <StarIcon :class="rate <= movie.rating ? 'movie-item-star-icon' : 'movie-item-star-icon-unrated'">
              </StarIcon>
            </button>
          </template>
        </div>
      </v-card-text>
    </v-card>
  </template>
</template>
<script src="./index"></script>
<style lang="css" src="./style.css"></style>
