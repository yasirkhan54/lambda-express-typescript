import { Address } from "./Address";
import { ProfileCriteria } from "./ProfileCriteria";
import { Qualification } from "./Qualification";

export interface Profile {
  profile_id: number;
  lead_id: number;
  salutation: string;
  first_name: string;
  last_name: string;
  phone_primary: string;
  phone_secondary: string;
  email: string;
}

export interface ProfileModel {
  profile: Profile;
  address: Address;
  profileCriteria: ProfileCriteria;
  qualification: Qualification;
}