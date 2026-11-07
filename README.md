# SQA Practice: Login Checker

Rule: a login is valid only if the username is not empty AND the password has AT LEAST 8 characters.

## Part 1 - See the errors (GitHub)
1. Create a free account at github.com and make a new repository.
2. Upload ALL files in this folder (keep the .github/workflows folder).
3. Open the "Actions" tab. Wait for "SQA Checks" to finish. It will show a RED X.
4. Click the run, then "Step 1 - Linter (ESLint)". Read the errors:
   - unused variable `attempts`
   - missing semicolon
   - use === instead of ==
5. Fix them in login.js (edit the file on GitHub, then Commit). Watch the Actions tab again.
6. Now the linter passes, but "Step 2 - Unit tests" fails. Read which test failed.
   Hint: the rule says AT LEAST 8 characters. Which symbol is wrong, > or >= ?
7. Fix it, commit, and wait for the GREEN check.

## Part 2 - Run on your computer (optional)
Install Node.js, open a terminal in this folder, then run:
    npm install
    npm run lint
    npm test

## Check your work
The corrected code is in solution/login.js. Try to fix it yourself first!

## Challenge
Add a new rule (password must contain a number) and write a test for it BEFORE you change the code.
