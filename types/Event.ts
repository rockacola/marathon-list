export interface Price {
  amount: number;
  currency: string;
}

export interface Website {
  url: string;
  title: string;
  blurb: string;
}

export interface Event {
  id: string;
  name: string;
  festival_id: string;
  start_date: string;
  end_date: string;
  main_date: string;
  price_guideline: Price;
  participant_count: number;
  websites: Website[];
  image_path?: string;
}
