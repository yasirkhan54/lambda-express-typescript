export interface LeadStatus {
  lead_status_id: number;
  lead_id: number;
  api_response_json: any;
  original_status: string;
  current_status: string;
  status_update_timestamp: Date;
  reject_reason: string;
  type: string;
}
