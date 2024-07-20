export interface AuthResponse {
    data: {
        user: {
            id: number;
            name: string;
            email: string;
        };
        token: string;
        expires_at?: number;
    };
    message?: string;
    status?: string;
}
