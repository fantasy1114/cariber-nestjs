export interface Auth {
  jwt: string;
  user: User;
  error: Error;
}

export interface User {
  id: number;
  email: string;
  username: string;
  blocked: boolean;
  confirmed: boolean;
}

export interface UserProfile {
  fullName: string,
  timeZone: string,
  notifyUpdatesProducts: boolean,
  notifyReplyMyPosts: boolean,
  emailPromotions: boolean,
  avatarUserBase64: string,
  bio: string,
  location: string
}

export interface Error {
  status: number;
  name: string;
  message: string;
}