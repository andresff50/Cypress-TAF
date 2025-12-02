# Setup a first Project from scratch

## Step 1: Initialize an npm Project
1. mkdir cypress-typescript-demo
2. cd cypress-typescript-demo
3. npm init -y 

## Step 2: Set Up Cypress
1. npm install cypress --save-dev

## Step 3: Configure TypeScript
1. npm install typescript --save-dev
2. npx tsc --init

That will create a tsconfig.json in the root of your project. Open it and replace its content with:
```
{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["es2020", "dom"],
    "moduleResolution": "node",
    "types": ["cypress"]
  },
  "include": ["cypress/**/*.ts"]
}
```

## Step 4: Create Your First Cypress TypeScript Script

npx cypress open