/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Uno Vault
 */
export interface Vault {
  idCardValue?: string;
  vaultSchemaMajor: number;
  vaultSchemaMinor?: number;
  uuid: string;
  email?: string;
  validatedPhoneNumber?: string;
  name?: string;
  manualItems?: ManualItem[];
  vault: VaultItem[];
  privateKeys?: PrivateKey[];
  groups?: Group[];
  contacts: Contact[];
  confidants: Contact[];
  friends?: Contact[];
  oldPasswords: string[];
  creditCards?: CreditCard[];
  addresses?: Address[];
  notes?: Note[];
  refreshTokens?: RefreshToken[];
  personas?: unknown[];
  travel?: unknown[];
  wifi?: unknown[];
  wiringDetails?: unknown[];
}
export interface ManualItem {
  id: string;
  schema_type?: string;
  matching_hosts?: string[];
  name?: string;
  url?: string;
  username?: string;
  password?: string;
  intendedPassword?: string;
  otpSeed?: string | null;
  notes?: string;
  ssoProvider?: SsoProvider[];
  relatedItems?: RelatedItem[];
}
export interface SsoProvider {
  default: boolean;
  provider: string;
  username: string;
}
export interface RelatedItem {
  password?: string;
  otpSeed?: string;
}
export interface VaultItem {
  id: string;
  schema_type?: string;
  name: string;
  username?: string;
  password?: string;
  intendedPassword?: string;
  intendedOTPSeed?: string;
  otpSeed?: string;
  notes?: string;
  relatedItems?: RelatedItem[];
  ssoProvider?: SsoProvider[];
}
export interface PrivateKey {
  name: string;
  key: string;
  password?: string;
  walletAddresses?: string[];
  notes?: string;
  url?: string;
  schema_type?: string;
  id: string;
}
export interface Group {
  id: string;
  seed: string;
  ownerPublicSigningKey: string;
}
export interface Contact {
  givenName: string;
  fullName: string;
  initials: string;
  phoneNumber: string;
  state?: "denied" | "error" | "pending" | "protecting" | "recovery" | "removing" | "owner" | "readonly";
  id: string;
  share?: string;
  signingKey?: string;
  encryptionKey?: string;
  oldShares: string[];
  session?: {
    seed: string;
  };
}
export interface CreditCard {
  id: string;
  schema_type?: string;
  type?: string;
  name?: string;
  holder: string;
  number: string;
  expiration: string;
  cvv?: string;
  addressUUID?: string;
}
export interface Address {
  id: string;
  schema_type?: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
export interface Note {
  id: string;
  schema_type?: string;
  title: string;
  notes: string;
}
export interface RefreshToken {
  id: string;
  clientId: string;
  refreshToken: string;
}
