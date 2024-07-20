import type { FormField, FormType } from "~/types/Form";

const formFields: Record<string, FormField> = {
    name: {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Enter your name",
    },
    email: {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
    },
    password: {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
    },
    passwordConfirmation: {
        name: "password_confirmation",
        label: "Confirm Password",
        type: "password",
        placeholder: "Confirm your password",
    },
};

const formConfigurations: Record<FormType, string[]> = {
    login: ["email", "password"],
    register: ["name", "email", "password", "passwordConfirmation"],
    default: ["name"],
};

export function useFormFields(formType: FormType) {
    const selectedFormType = ref(formType);

    const fields = computed(() =>
        formConfigurations[selectedFormType.value].map(
            (fieldName) => formFields[fieldName],
        ),
    );

    return {
        fields,
        setFormType: (newType: FormType) => (selectedFormType.value = newType),
    };
}
