# Firebase authentication Next js App

Check out my article on <a href="https://medium.com/@dadilukshan/firebase-authentication-in-a-next-js-web-application-5131b19a0b26" target="_blank">Firebase Authentication with Next.js</a> to learn how I integrated Firebase authentication into my Next.js app.

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

![Firebase Authentication](https://firebasestorage.googleapis.com/v0/b/viduna-image.appspot.com/o/images%2FScreenshot%202025-03-13%20143128%20copy.png?alt=media&token=41772575-fd34-4eb4-86b4-b4428cf50df4)



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
