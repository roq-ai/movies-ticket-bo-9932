import { ShowTimeInterface } from 'interfaces/show-time';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TicketInterface {
  id?: string;
  price: number;
  seat_number: number;
  show_time_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  show_time?: ShowTimeInterface;
  user?: UserInterface;
  _count?: {};
}

export interface TicketGetQueryInterface extends GetQueryInterface {
  id?: string;
  show_time_id?: string;
  user_id?: string;
}
