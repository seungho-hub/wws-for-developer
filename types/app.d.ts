export interface App {
  client_id: string;
  client_name: string;
  client_secret: string;
  client_uri: string;
  contacts: Array<string>;
  grant_types: Array<string>;
  jwks_uri: string;
  logo_uri: string;
  policy_uri: string;
  redirect_uri: Array<string>;
  response_type: string;
  scope: string;
  token_endpoint_auth_method: string;
  tos_uri: string;
  user_id: number;
}
