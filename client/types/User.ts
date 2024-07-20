export interface User {
    id: number;
    name: string;
    email: string;
}

export interface AuthState {
    user: User | null;
    token: string;
    tokenExpiration?: number;
}

export interface AuthCredentials {
    email: string;
    password: string;
    password_confirmation?: string;
}
