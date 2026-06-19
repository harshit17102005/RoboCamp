# AI & Robotics Summer Workshop - Full Stack Landing Page

A complete, production-ready full-stack application built with React, TypeScript, Tailwind CSS, Express, and MongoDB.

## Features
- **Modern UI**: Polished, mobile-first design using Tailwind CSS v4 and Framer Motion animations.
- **Dark Mode**: Integrated dark mode toggle that persists seamlessly.
- **Form Validation**: React Hook Form and Zod for robust client-side validation.
- **Type Safe Backend**: Express.js with TypeScript and Zod validation on incoming requests.
- **MongoDB Integration**: Complete API to accept and store student enquiries via Mongoose.

## Project Structure

This is a monorepo containing both the frontend client and the backend server.

- `client/` - Vite + React + TypeScript + Tailwind v4 frontend
- `server/` - Node.js + Express + TypeScript + MongoDB backend

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or a MongoDB Atlas URI)

### Backend Setup (`server/`)
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the `server` directory and add:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/ai-workshop
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

*(Note: You will need to add a `dev` script in `server/package.json` like `"dev": "nodemon src/server.ts"` or use `ts-node` directly)*

### Frontend Setup (`client/`)
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

---

## Deployment

### Frontend (Vercel)
1. Push your repository to GitHub.
2. Go to Vercel and import your repository.
3. Set the Framework Preset to **Vite**.
4. Set the Root Directory to `client`.
5. Click **Deploy**. Vercel will automatically build (`npm run build`) and host your frontend.

### Backend (Render or Railway)
1. Go to Render.com (or Railway.app) and create a new **Web Service**.
2. Connect your GitHub repository.
3. Set the Root Directory to `server`.
4. Build Command: `npm install && npx tsc`
5. Start Command: `node dist/server.js`
6. **Environment Variables**: Add your `MONGO_URI` (from MongoDB Atlas) and `PORT`.
7. Click **Deploy**.

*(Note: Ensure you update the API URL in `client/src/components/RegistrationForm.tsx` to point to your new deployed backend URL instead of `http://localhost:5000`)*
