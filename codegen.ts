import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "./storage/app/lighthouse-schema.json",
    documents: "./client/graphql/*",
    generates: {
        "./client/types/codegen/": {
            preset: "client",
            presetConfig: { fragmentMasking: false },
        },
    },
};

export default config;
