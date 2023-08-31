<script>
export default {
  props: {
    song: {
      title: '',
      album: '',
      artist: '',
      img: '',
      songtext: ''
    }
  }
}
</script>


<template>
  <div class="linkCard">
    <div>
      <h2>{{ song.title }}</h2>
      <p>Album: {{ song.album }}</p>
      <p>Artist: {{ song.artist }}</p>
      <img :src="song.img" style="width:100%;" alt="">
      <pre>{{ song.songtext }}</pre>
    </div>
  </div>
</template>

<style>
.linkCard {
  list-style: none;
  display: flex;
  padding: 0.25rem;
  background-color: rgb(253, 224, 71);
  background-image: none;
  background-size: 400%;
  border-radius: 0.6rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 800px) {
  img {
    width: 250px;
    height: 250px;
  }
}
.linkCard > div {
  width: 100%;
  text-decoration: none;
  line-height: 1.4;
  padding: 1rem 1.3rem;
  border-radius: 0.35rem;
  color: #111;
  background-color: white;
  opacity: 0.8;
}

@media screen and (max-width: 800px) {
  .linkCard > div {
    padding: 0;
  }
}


h2 {
  margin: 0;
  font-size: 1.25rem;
  transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  height: 3rem;
}

p {
  margin-top: 0.5rem;
  margin-bottom: 0;
  color: #444;
  min-height: 3rem;
}
</style>
