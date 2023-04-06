CREATE TABLE leads (
  lead_id SERIAL PRIMARY KEY,
  external_lead_id TEXT,
  traffic_source TEXT,
  lead_cost NUMERIC,
  total_revenue NUMERIC,
  is_test_lead BOOLEAN
);

CREATE TABLE lead_status (
  lead_status_id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads (lead_id),
  api_response_json JSON,
  original_status TEXT,
  current_status TEXT,
  status_update_timestamp TIMESTAMP,
  reject_reason TEXT
);

CREATE TABLE sessions (
  session_id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads (lead_id),
  ip TEXT,
  web_url TEXT,
  traffic_brand_name TEXT,
  traffic_source_detail TEXT,
  traffic_source_type TEXT,
  web_access_key TEXT,
  web_session_id TEXT,
  landing_page TEXT,
  device_type TEXT
);

CREATE TABLE consents (
  consent_id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads (lead_id),
  tcpa_timestamp_traffic TEXT,
  tcpa_timestamp_marketing TEXT,
  tcpa_text_traffic TEXT,
  tpca_timestamp_client TEXT
);

CREATE TABLE third_party_tokens (
  third_party_tokens_id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads (lead_id),
  traffic_jornaya_lead_id TEXT,
  traffic_trusted_form_url TEXT,
  traffic_trustedform_token TEXT
);

CREATE TABLE utms (
  utm_id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads (lead_id),
  source TEXT,
  medium TEXT,
  campaign TEXT,
  content TEXT,
  term TEXT,
  supplier_id TEXT,
  sub_id TEXT,
  ad_id TEXT
);

CREATE TABLE profiles (
  profile_id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads (lead_id),
  salutation TEXT,
  first_name TEXT,
  last_name TEXT,
  phone_primary TEXT,
  phone_secondary TEXT,
  email TEXT
);

CREATE TABLE qualifications (
  qualification_id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles (profile_id),
  lead_id INTEGER REFERENCES leads (lead_id),
  enrollment_timeline JSON,
  current_edu_level TEXT,
  preferred_edu_level TEXT,
  learning_preference TEXT,
  is_graduated_in_us BOOLEAN,
  computer_internet_access TEXT,
  level_of_interest TEXT,
  time_of_day TEXT,
  previously_contacted BOOLEAN
);

CREATE TABLE addresses (
  address_id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles (profile_id),
  address_line_one TEXT,
  address_line_two TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT
);

CREATE TABLE profile_criteria (
  profile_criteria_id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads (lead_id),
  age INTEGER,
  gender TEXT,
  is_us_citizen BOOLEAN,
  is_us_military BOOLEAN,
  military_status TEXT,
  military_branch TEXT,
  high_school_graduation_year INTEGER
);
