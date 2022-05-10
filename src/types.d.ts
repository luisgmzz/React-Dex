type Type =
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "flying"
  | "fighting"
  | "poison"
  | "electric"
  | "ground"
  | "rock"
  | "psychic"
  | "ice"
  | "bug"
  | "ghost"
  | "steel"
  | "dragon"
  | "dark"
  | "fairy"
  | "bird";

type Pokemon = {
  id: number;
  name: string;
  types: Type[];
  sprites: {
    front: string;
    back: string;
  };
  generation: number;
};

type Images = {
  front: string;
  back: string;
};

// Api Types
type CommonType = {
  name: string;
  url: string;
};

type apiPokemon = {
  abilities: {
    ability: CommonType;
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: CommonType[];
  game_indices: {
    game_index: number;
    version: CommonType;
  }[];
  height: number;
  held_items: {
    item: CommonType;
    version_details: {
      rarity: number;
      version: CommonType;
    }[];
  }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: CommonType;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: CommonType;
      version_group: CommonType;
    };
  }[];
  name: string;
  order: number;
  past_types: {
    generation: CommonType;
    types: {
      slot: number;
      type: CommonType;
    }[];
  }[];
  species: CommonType[];
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      home: {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string;
      };
    };
    versions: string[];
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: CommonType;
  }[];
  types: {
    slot: number;
    type: CommonType;
  }[];
  weight: number;
};
