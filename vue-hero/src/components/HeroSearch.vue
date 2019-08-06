<template>
  <div id="heroSearch">
    <h4>Hero Search</h4>
    <input id="search-box" v-model="heroName" v-on:keyup="search" />
    <ul class="search-result">
      <li v-for="hero in heroes" v-bind:key="hero.id">
        <router-link v-bind:to="{path: '/detail/' + hero.id}">
          {{hero.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import HeroService from '../service/HeroService'

export default {
  name: 'HeroSearch',
  data () {
    return {
      heroName: '',
      heroes: []
    }
  },
  methods: {
    search () {
      this.heroes = HeroService.searchHeroes(this.heroName.trim())
    }
  }
}
</script>

<style>
.search-result li {
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width:195px;
  height: 16px;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  list-style-type: none;
}

.search-result li:hover {
  background-color: #607D8B;
}

.search-result li a {
  color: #888;
  display: block;
  text-decoration: none;
}

.search-result li a:hover {
  color: white;
}
.search-result li a:active {
  color: white;
}
#search-box {
  width: 200px;
  height: 20px;
}
ul.search-result {
  margin-top: 0;
  padding-left: 0;
}
</style>
