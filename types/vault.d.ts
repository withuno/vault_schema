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
  idCardValue: string;
  vaultSchemaMajor: number;
  uuid: string;
  email?: string;
  validatedPhoneNumber?: string;
  manualItems?: ManualItem[];
  vault?: Vault1[];
  privateKeys?: PrivateKey[];
  groups?: Group[];
  contacts?: Contact[];
  confidants?: Contact[];
  friends?: Contact[];
  oldPasswords?: string[];
  creditCards?: CreditCard[];
  addresses?: Address[];
  notes?: Note[];
  refreshTokens?: RefreshToken[];
}
export interface ManualItem {
  id: string;
  name?: string;
  url?: string;
  username?: string;
  password?: string;
  intendedPassword?: string;
  otpSeed?: string;
  notes?: string;
  ssoProvider?: unknown[];
  relatedItems?: RelatedItem[];
}
export interface RelatedItem {
  password?: string;
  otp?: string;
}
export interface Vault1 {
  id: string;
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
export interface SsoProvider {
  default: "boolean";
  provider: "string";
  username: "string";
}
export interface PrivateKey {
  name: string;
  key: string;
  password?: string;
  walletAddresses?: string[];
  notes?: string;
  url?: string;
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
  state: "denied" | "error" | "pending" | "protecting" | "recovery" | "removing" | "owner" | "readonly";
  id: string;
  share?: string;
  signingKey?: string;
  encryptionKey?: string;
  oldShares?: string[];
  session?: {
    seed?: string;
  };
}
export interface CreditCard {
  id: string;
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
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
export interface Note {
  id: string;
  title: string;
  notes: string;
}
export interface RefreshToken {
  id: string;
  clientId: string;
  refreshToken: string;
}