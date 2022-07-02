export interface Search {
  name: string
  url: string
}

export interface Pokemon {
  abilities : [{
    ability: Search
  }]
  'base_experience': number
  id: number
  name: string
  sprites: {
    other: {
      'dream_world': {
        'front_default': string
      }
      'official-artwork': {
        'front_default': string
      }
    }
  }
  stats: [{
    'base_stat': number
    stat: Search
  }]
  types: [{
    type: Search
  }]
  weight: number
}

export interface Ability {
  'effect_entries': [{
    effect: string
    language: Search
    short_effect: string
  }]
  name: string
  pokemon: []
}
