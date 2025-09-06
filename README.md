#  My Playwright Project

[![Playwright Test](https://img.shields.io/badge/Test%20Framework-Playwright-blue)](https://playwright.dev/)  
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)](https://developer.mozilla.org/docs/Web/JavaScript)

##  Overview
This is a **Playwright-based test automation project** for end-to-end testing of web applications.  
It includes structured test suites, CI workflows, and captures test artifacts like screenshots and trace reports.

---

##  Project Structure
```

/.github/workflows/    # CI/CD workflows (e.g., GitHub Actions)
/node\_modules/         # Installed dependencies
/tests/                # Your Playwright test files
/test-results/         # Test artifacts: traces, screenshots, reports
.gitignore
package.json           # Project metadata & dependencies
package-lock.json      # Lockfile for reproducibility
screenshot.png         # Example test screenshot (reference/demo)

````

---

##  Prerequisites
- **Node.js** (v14 or higher recommended)  
- **npm** (with Node.js installation)

---

##  Setup Instructions
1. **Clone the repo**  
   ```bash
   git clone <repo-url>
   cd my-playwright-project

2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Install Playwright browsers** (if not already included via `postinstall`)

   ```bash
   npx playwright install
   ```

---

## ▶  Running Tests

Run all tests across supported browsers:

```bash
npx playwright test
```

Run a specific test or suite:

```bash
npx playwright test tests/myTest.spec.js
```

Execute tests in headed mode (with visible browser):

```bash
npx playwright test --headed
```

Use the built-in test runner UI (watch mode, debugging):

```bash
npx playwright test --ui
```

---

## Artifacts & Reporting

* **Screenshots** are automatically saved in the defined folders (e.g., `/test-results/`)
* **Traces, videos, and logs** are captured when tests fail (if configured in `playwright.config.js`)
* You can view rich HTML reports after test runs:

  ```bash
  npx playwright show-report
  ```

---

## Continuous Integration (CI)

This project includes CI configuration under `.github/workflows/` to:

* Run tests automatically on push or pull requests
* Generate reports or status checks for build health

Customize or review your CI settings according to your preferred workflows.

---

## Customization Tips

* Edit `playwright.config.js` to adjust:

  * Target browsers (e.g., Chromium, Firefox, WebKit)
  * Test timeouts, retries, and parallelism
  * Reporters and output folder
* Use **projects** to define browser/device-specific configurations:
  ([playwright.dev][2])

---

## Troubleshooting

* Ensure all dependencies are installed (`npm install`)
* Confirm `npx playwright install` runs successfully (installs browsers)
* For test failures, review screenshots, traces, logs under `/test-results/`

---

## Contact

👤 **Rana Gamal**

🔗 [GitHub Profile](https://github.com/engRana404) | [LinkedIn](https://www.linkedin.com/in/rana-gamal-daif)

