CREATE TABLE IF NOT EXISTS leads (
  lead_id SERIAL PRIMARY KEY,
  external_lead_id text,
  traffic_source text,
  lead_cost money,
  total_revenue money,
  is_test_lead boolean
);

CREATE TABLE IF NOT EXISTS lead_status (
  lead_status_id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads (lead_id),
  api_response_json json,
  original_status text,
  current_status text,
  status_update_timestamp time,
  reject_reason text
);

CREATE TABLE IF NOT EXISTS sessions (
  session_id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads (lead_id),
  ip text,
  web_url text,
  traffic_brand_name text,
  traffic_source_detail text,
  traffic_source_type text,
  web_access_key text,
  web_session_id text,
  landing_page text,
  device_type text
);

CREATE TABLE IF NOT EXISTS consents (
  consent_id SERIAL PRIMARY KEY,
  lead_id integer REFERENCES leads (lead_id),
  tcpa_timestamp_traffic text,
  tcpa_timestamp_marketing text,
  tcpa_text_traffic text,
  tcpa_timestamp_client text
);

CREATE TABLE IF NOT EXISTS third_party_tokens (
  third_party_tokens_id SERIAL PRIMARY KEY,
  lead_id integer REFERENCES leads (lead_id),
  traffic_jornaya_lead_id text,
  traffic_trusted_form_url text,
  traffic_trustedform_token text
);

CREATE TABLE IF NOT EXISTS utms (
  utm_id SERIAL PRIMARY KEY,
  lead_id integer REFERENCES leads (lead_id),
  source text,
  medium text,
  campaign text,
  content text,
  term text,
  supplier_id text,
  sub_id text,
  ad_id text
);

CREATE TABLE IF NOT EXISTS profiles (
  profile_id SERIAL PRIMARY KEY,
  lead_id integer REFERENCES leads (lead_id),
  salutation text,
  first_name text,
  last_name text,
  phone_primary text,
  phone_secondary text,
  email text
);

CREATE TABLE IF NOT EXISTS addresses (
  address_id SERIAL PRIMARY KEY,
  profile_id integer REFERENCES profiles (profile_id),
  address_line_one text,
  address_line_two text,
  city text,
  state text,
  zip_code text
);

CREATE TABLE IF NOT EXISTS qualifications (
  qualification_id SERIAL PRIMARY KEY,
  profile_id integer REFERENCES profiles (profile_id),
  lead_id integer REFERENCES leads (lead_id),
  enrollment_timeline json,
  current_edu_level text,
  preferred_edu_level text,
  learning_preference text,
  is_graduated_in_us BOOLEAN,
  computer_internet_access text,
  level_of_interest text,
  time_of_day text,
  previously_contacted BOOLEAN
);

CREATE TABLE IF NOT EXISTS profile_criteria (
  profile_criteria_id SERIAL PRIMARY KEY,
  profile_id integer REFERENCES profiles (profile_id),
  lead_id integer REFERENCES leads (lead_id),
  age integer,
  gender text,
  is_us_citizen boolean,
  is_us_military boolean,
  military_status boolean,
  military_branch text,
  high_school_graduation_year integer
);