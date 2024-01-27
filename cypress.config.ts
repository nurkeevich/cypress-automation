import { defineConfig } from "cypress";

const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

export default defineConfig({
    e2e: {
        // node event listener
        setupNodeEvents(on, config) {
            // adding cucumber preprocessor
            const options = {
                ...browserify.defaultOptions,
                typescript: require.resolve("typescript"),
            };
            on("file:preprocessor", cucumber(options));
        },

        // feature file spec pattern
        specPattern: "**/*.feature",

        // excludeSpecPattern excludes specified files and folder
        excludeSpecPattern: [
            "cypress/e2e/2-advanced-examples",
            "cypress/e2e/1-getting-started",
        ],

        // keeps the test video records
        video: false,

        // baseURL
        baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth",
    },
});
