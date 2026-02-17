import baseCredentials from "./credentials.conf.json";

export interface UserCredentials {
  username: string;
  password: string;
}
export const CREDENTIALS: {
  admin: UserCredentials;
  invalidAdmin: UserCredentials;
} = {
  admin: {
    username: process.env.CI_USER || baseCredentials.admin.username,
    password: process.env.CI_PASS || baseCredentials.admin.password,
  },
  invalidAdmin: {
    username:
      process.env.CI_INVALID_USER || baseCredentials.invalidAdmin.username,
    password:
      process.env.CI_INVALID_PASS || baseCredentials.invalidAdmin.password,
  },
};
