import eslint from "@eslint/js";
import next from "@next/eslint-plugin-next";

export default [
    eslint.configs.recommended,
    {
        plugins: {
            "@next/next": next,
        },
        rules: {
            ...next.configs.recommended.rules,
        },
    },
];