export interface Pokemon {
  abilities : [{
    ability: {
      name: string
      url: string
    }
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
    stat: {
      name: string
      url: string
    }
  }]
  types: [{
    type: {
      name: string
      url: string
    }
  }]
  weight: number
}

export interface Ability {
  'effect_entries': [{
    effect: string
    language: {
      name: string
      url: string
    }
    short_effect: string
  }]
  name: string
  pokemon: []
}
