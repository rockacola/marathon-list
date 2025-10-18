export interface Race {
  id: string;
  label: string;
  distance: number;
  date: string;
}

export interface Price {
  amount: number;
  currency: string;
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
  races: Race[];
}
