import eslint from "@eslint/js";
import next from "@next/eslint-plugin-next";
import pluginTailwindCSS from "eslint-plugin-tailwindcss";

export default [
    eslint.configs.recommended,
    {
        plugins: {
            "tailwindcss": pluginTailwindCSS,
            "@next/next": next
        },
        rules: {
            ...pluginTailwindCSS.configs.recommended.rules,
            ...next.configs.recommended.rules
        }
    }
];