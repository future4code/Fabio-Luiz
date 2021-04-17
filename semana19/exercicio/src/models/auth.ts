export type AuthenticationData = {
  id: string;
  role: roles;
};

export enum roles {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export function convertStrToRole(role: string): roles {
  switch (role.toUpperCase()) {
    case "NORMAL":
      return roles.NORMAL;
    case "ADMIN":
      return roles.ADMIN;
    default:
      throw new Error("'role' must be 'NORMAL' or 'ADMIN'");
  }
}