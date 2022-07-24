export interface getImagesResponse {
  statusCode: number;
  body: Body[];
  error: string;
}

export interface Body {
  id: string;
  observation_id: string;
  program: number;
  details: Details;
  file_type: string;
  thumbnail: string;
  location: string;
}

export interface Details {
  mission: string;
  instruments: Instrument[];
  suffix: string;
  description: string;
}

export interface Instrument {
  instrument: string;
}
