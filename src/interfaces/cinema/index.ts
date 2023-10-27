import { ShowTimeInterface } from 'interfaces/show-time';
import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CinemaInterface {
  id?: string;
  description?: string;
  location?: string;
  seating_capacity?: number;
  number_of_screens?: number;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  show_time?: ShowTimeInterface[];
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  _count?: {
    show_time?: number;
    team_member?: number;
  };
}

export interface CinemaGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
