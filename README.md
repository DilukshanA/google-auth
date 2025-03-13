This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Firebase authentication

## Step 1: Set Up Firebase Project
Create a new project and add a web app using firebase console

## Step 2: Install Firebase SDK

```bash
npm install firebase
```

## Step 3: Configure Firebase in Next.js
Create a firebaseConfig.ts inside the lib folder
Security Tip: Store Firebase credentials in .env.local

## Step 4: Implement Authentication Logic
Create a helper function auth.ts in lib

## Step 5: Create Authentication UI
Create the Reusable LoginSignup.tsx

## Step 6: Use the Component in a Page
Use LoginSignup.tsx component in Login and Signup 