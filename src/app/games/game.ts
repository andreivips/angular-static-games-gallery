// made based on available data...
export interface Game {
  id: string;
  categories: string[]; // may be number also ??? number|string
  features: string[];
  themes: string[];
  icons: string[];
  backgrounds: string[];
  background?: string;
  server_game_id: string;
  extearnal_game_id: string;
  front_game_id: string;
  name: string;
  title: string|null;
  ratio?: '0'|'4:3'|'16:9';
  width?: string;
  height?: string;
  status: string; // or 'published'|... ???
  provider: string;
  show_as_provider: string;
  provider_title: string;
  game_options: string|null;
  blocked_countries: string[]|null; // ???
  has_age_restriction: number;
  icon_2: string;
  icon_3?: string;
  types: GameType;
  game_skin_id: string;
  cats: GameCat[];
  feats: GameFeat[];
  thms: GameThm[];
  active: string;
}

interface GameCat {
  id: string;
  title: string;
  type: string;
}
interface GameType {
  realMode?: number;
  funMode?: number;
  viewMode?: number;
  is_target?: number;
}
interface GameFeat {
  id: string;
  title: string;
  type: string;
}
interface GameThm {
  id: string;
  title: string;
  type: string;
}
