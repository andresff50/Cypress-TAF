import { defineConfig } from "cypress";
import installLogsPrinter from 'cypress-terminal-report/src/installLogsPrinter';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installLogsPrinter(on, {
        printLogsToConsole: 'onFail',
        printLogsToFile: 'always',
        outputRoot: 'reports/terminal'
      });
    },
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'reports/junit/[name]-[hash].xml',
      toConsole: false,
      attachments: true
    }
  },
});
