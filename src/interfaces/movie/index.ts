import { ShowTimeInterface } from 'interfaces/show-time';
import { GetQueryInterface } from 'interfaces';

export interface MovieInterface {
  id?: string;
  title: string;
  director: string;
  duration: number;
  genre: string;
  rating: number;
  release_date: any;
  created_at?: any;
  updated_at?: any;
  show_time?: ShowTimeInterface[];

  _count?: {
    show_time?: number;
  };
}

export interface MovieGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  director?: string;
  genre?: string;
}
