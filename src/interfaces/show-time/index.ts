import { TicketInterface } from 'interfaces/ticket';
import { MovieInterface } from 'interfaces/movie';
import { CinemaInterface } from 'interfaces/cinema';
import { GetQueryInterface } from 'interfaces';

export interface ShowTimeInterface {
  id?: string;
  start_time: any;
  end_time: any;
  movie_id: string;
  cinema_id: string;
  created_at?: any;
  updated_at?: any;
  ticket?: TicketInterface[];
  movie?: MovieInterface;
  cinema?: CinemaInterface;
  _count?: {
    ticket?: number;
  };
}

export interface ShowTimeGetQueryInterface extends GetQueryInterface {
  id?: string;
  movie_id?: string;
  cinema_id?: string;
}
