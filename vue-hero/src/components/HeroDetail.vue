<template>
  <div id="heroDetail" v-if="hero">
    <h2>{{hero.name}} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div>
      <label class="hero">name:
        <input class="name" v-model="hero.name" />
      </label>
    </div>
    <button v-on:click="goBack">go back</button>
    <button v-on:click="save">save</button>
  </div>
</template>

<script>
import HeroService from '../service/HeroService'

export default {
  name: 'HeroDetail',
  data () {
    return {
      hero: null
    }
  },
  mounted () {
    var id = this.$route.params.id
    this.hero = {...HeroService.getHero(Number(id))}
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    save () {
      HeroService.updateHero(this.hero)
      this.goBack()
    }
  }
}
</script>

<style>
label.hero {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
input.name {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
</style>
