<template>
  <v-dialog max-width="500">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      v-bind="activatorProps"
      color="surface-variant"
      text="Open Dialog"
      variant="flat"
    ></v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Dialog" class="">
      <v-card-item>
          <v-form v-model="valid" @submit.prevent>
            <v-container>
              <v-row>
                  <v-text-field
                    v-model="movieName"
                    label="Movie Name"
                    hide-details
                    required
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-textarea
                    v-model="movieDescription"
                    label="Movie Description"
                    hide-details
                    required
                  ></v-textarea>
                </v-row>
                <v-row>  
                  <v-text-field
                    v-model="movieImg"
                    label="Movie Image"
                    hide-details
                    required
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-select label="Genre" :items="movieGenreOptions">
                  </v-select>
                </v-row>
            </v-container>
            <v-btn class="mt-2" type="Submit">Add</v-btn>
          </v-form>
      </v-card-item>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
  <template v-for="movie in movies">
    <v-card class="centralized-margin" max-width="400">
      <v-img  
        cover
        max-height="600"
        :src="movie.image"
      >
      <StarIcon :class="movie.rating ? 'movie-item-big-star-icon' : 'movie-item-star-icon-unrated'" ></StarIcon>
    </v-img>
      <v-card-item>
        <v-card-title class="my-2"  >{{ movie.name }}</v-card-title>
        <template v-for="genre in movie.genres">
          <v-chip class="me-2" color="primary" variant="flat">{{ genre }}</v-chip>
        </template>
      </v-card-item>
      <v-card-text>
       <div class="mb-10">{{ movie.description }}</div>
       <div class="d-flex">
        Rating ({{ movie.rating }}/5):
        <template v-for="rate in allStars">
          <button @click.prevent="clickHandler(rate, movie)"><StarIcon
          :class="rate <= movie.rating ? 'movie-item-star-icon' : 'movie-item-star-icon-unrated'"
        >
        </StarIcon></button> 
        </template>
      </div>
      <div>
        <button @click=""></button>
      </div>
      </v-card-text>
    </v-card>
  </template>
</template>
<script src="./index"></script> 
<style lang="css" src="./style.css"></style>
