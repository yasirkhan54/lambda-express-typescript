import { Consent } from "./Consent";
import { LeadStatus } from "./LeadStatus";
import { ProfileModel } from "./Profile";
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
  lead_status: LeadStatus;
  session: Session;
  consent: Consent;
  third_party_token: ThirdPartyToken;
  utm: UTM;
  profileModel: ProfileModel;
}