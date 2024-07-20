<template>
    <form @submit.prevent="onSubmit">
        <fieldset
            v-for="{ name, label, type, placeholder } in fields"
            :key="name"
            :name
        >
            <div id="form-item">
                <label>{{ label }}</label>
                <div id="form-control">
                    <input :type :placeholder required />
                </div>
                <div id="form-error-message" />
            </div>
        </fieldset>
        <div id="toaster" />
        <button type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? "Logging in..." : "Submit" }}
        </button>
    </form>
</template>

<script setup lang="ts">
import { useFormFields } from "~/composables/useFormFields";

const isSubmitting = ref(false);

const { fields } = useFormFields("register");

const onSubmit = () => {
    isSubmitting.value = true;
    alert("Form Submitted");
    isSubmitting.value = false;
};
</script>
