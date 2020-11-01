export enum UserRoles {
  USER = "user",
  ADMIN = "admin",
  SUPER_ADMIN = "super_admin",
}

export interface User {
  name: string;
  email: string;
  role: UserRoles;
  id: string;
  googleId: string;
}
