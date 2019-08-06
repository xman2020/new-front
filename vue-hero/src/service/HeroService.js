import MessageService from './MessageService'

export default {
  heroes: [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ],
  getHeroes () {
    this.log('fetched heroes')
    return this.heroes
  },
  getHero (id) {
    this.log(`fetched hero id=${id}`)
    for (var hero of this.heroes) {
      if (hero.id === id) {
        return hero
      }
    }
  },
  searchHeroes (heroName) {
    this.log(`searched heroes matching "${heroName}"`)
    var heroes1 = []

    if (heroName.length === 0) {
      return heroes1
    }

    for (var hero of this.heroes) {
      if (hero.name.toLowerCase().indexOf(heroName) >= 0) {
        heroes1.push(hero)
      }
    }

    return heroes1
  },
  addHero (hero) {
    var max = 0
    for (var hero1 of this.heroes) {
      if (hero1.id > max) {
        max = hero1.id
      }
    }
    hero.id = max + 1

    this.log(`added hero id=${hero.id}`)
    this.heroes.push(hero)
  },
  deleteHero (hero) {
    this.log(`deleted hero id=${hero.id}`)
    var index = 0

    for (var hero1 of this.heroes) {
      if (hero.id === hero1.id) {
        break
      }
      index++
    }

    this.heroes.splice(index, 1)
  },
  updateHero (hero) {
    this.log(`updated hero id=${hero.id}`)
    for (var hero1 of this.heroes) {
      if (hero.id === hero1.id) {
        hero1.name = hero.name
        break
      }
    }
  },
  log (message) {
    console.log(`HeroService: ${message}`)
    MessageService.add(`HeroService: ${message}`)
  }
}
