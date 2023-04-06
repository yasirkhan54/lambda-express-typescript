export interface ProfileCriteria {
  profile_criteria_id: number;
  lead_id: number;
  age: number;
  gender: string;
  is_us_citizen: boolean;
  is_us_military: boolean;
  military_status: string;
  military_branch: string;
  high_school_graduation_year: number;
}