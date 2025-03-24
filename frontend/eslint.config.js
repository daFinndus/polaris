import eslint from "@eslint/js";
import next from "@next/eslint-plugin-next";
import pluginTailwindCSS from "eslint-plugin-tailwindcss";

export default [
    eslint.configs.recommended,
    {
        plugins: {
            "@next/next": next,
            "tailwindcss": pluginTailwindCSS
        },
        rules: {
            ...next.configs.recommended.rules,
            ...pluginTailwindCSS.configs.recommended.rules
        }
    }
];