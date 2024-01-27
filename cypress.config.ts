import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },

        // excludeSpecPattern excludes specified files and folder
        excludeSpecPattern: [
            "cypress/e2e/2-advanced-examples",
            "cypress/e2e/1-getting-started",
        ],
        // baseURL
        baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth",
    },
});
