export interface IAuth {
  IsAuthenticated: boolean;
  UserId: string;
  status: AuthStatus;
  message: string;
}

export type AuthStatus = "Logged Out" | "Logged In" | "Error"
