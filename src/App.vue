<template>
  <template v-for="movie in movies">
    <v-card class="centralized-margin" max-width="400">
      <v-img  
        cover
        max-height="600"
        :src="movie.image"
      />
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
        <!--  -->
      </div>
      </v-card-text>
    </v-card>
  </template>
</template>
<script src="./index"></script> 
<style lang="css" src="./style.css"></style>
