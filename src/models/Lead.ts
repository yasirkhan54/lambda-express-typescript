export interface Lead {
  lead_id: number;
  external_lead_id: string;
  traffic_source: string;
  lead_cost: number;
  total_revenue: number;
  is_test_lead: boolean;
}