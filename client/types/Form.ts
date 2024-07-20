export interface FormField {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}

export type FormFields = FormField[];

export type AuthForm = "login" | "register";

export type FormType = AuthForm | "default";
