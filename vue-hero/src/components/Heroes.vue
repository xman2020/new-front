<template>
  <div id="heroes">
    <h2>My Heroes</h2>
    <div>
      <label>Hero name:
        <input v-model="newHero.name" />
      </label>
      <button v-on:click="add">add</button>
    </div>
    <ul class="heroes">
      <li v-for="hero in heroes" v-bind:key="hero.id">
        <router-link v-bind:to="{path: '/detail/' + hero.id}">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </router-link>
        <button class="delete" title="delete hero" v-on:click="del(hero)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import HeroService from '../service/HeroService'

export default {
  name: 'Heroes',
  data () {
    return {
      newHero: {id: 0, name: ''},
      heroes: []
    }
  },
  mounted () {
    this.heroes = HeroService.getHeroes()
  },
  methods: {
    add () {
      // var newObj = Object.assign({}, this.newHero)
      // HeroService.addHero(newObj)
      // 另一种写法，辉总NB
      HeroService.addHero({...this.newHero})
    },
    del (hero) {
      HeroService.deleteHero(hero)
    }
  }
}
</script>

<style>

</style>
