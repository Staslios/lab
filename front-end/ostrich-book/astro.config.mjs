// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

export default defineConfig({
    integrations: [
        icon({
            include: {
                "mdi-light": ["*"], // loads entire Material Design Icon set
            }
        })
    ]
});
