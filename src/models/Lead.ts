import { Address } from "./Address";
import { Consent } from "./Consent";
import { LeadStatus } from "./LeadStatus";
import { Profile } from "./Profile";
import { ProfileCriteria } from "./ProfileCriteria";
import { Qualification } from "./Qualification";
import { Session } from "./Session";
import { ThirdPartyToken } from "./ThirdPartyToken";
import { UTM } from "./UTM";

export interface Lead {
  lead_id: number;
  external_lead_id: string;
  traffic_source: string;
  lead_cost: number;
  total_revenue: number;
  is_test_lead: boolean;
}

export interface LeadModel {
  lead: Lead;
  leadStatus: LeadStatus;
  session: Session;
  consent: Consent;
  thirdPartyToken: ThirdPartyToken;
  utm: UTM;
  profile: Profile;
  address: Address;
  profileCriteria: ProfileCriteria;
  qualification: Qualification;
}