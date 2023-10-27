import { UserInterface } from 'interfaces/user';
import { CinemaInterface } from 'interfaces/cinema';
import { GetQueryInterface } from 'interfaces';

export interface TeamMemberInterface {
  id?: string;
  user_id: string;
  position: string;
  hire_date: any;
  salary: number;
  cinema_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  cinema?: CinemaInterface;
  _count?: {};
}

export interface TeamMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  position?: string;
  cinema_id?: string;
}
