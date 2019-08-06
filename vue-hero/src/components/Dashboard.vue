<template>
  <div id="dashboard">
    <h2>Top 3 Heros</h2>
    <ul class="heroes">
      <li v-for="hero in heroes" v-bind:key="hero.id">
        <router-link v-bind:to="{path: '/detail/' + hero.id}">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </router-link>
      </li>
    </ul>
    <HeroSearch/>
  </div>
</template>

<script>
import HeroService from '../service/HeroService'
import HeroSearch from './HeroSearch'

export default {
  name: 'Dashboard',
  data () {
    return {
      heroes: []
    }
  },
  mounted () {
    this.heroes = HeroService.getHeroes().slice(0, 3)
  },
  components: {
    HeroSearch
  }
}
</script>

<style>

</style>
