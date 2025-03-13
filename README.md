
# **Vehicle Management System - Frontend**

This is the frontend part of the **Vehicle Management System**, which allows mechanics to manage vehicles, add problems, and retrieve solutions using OpenAI's GPT API.

## **Table of Contents**

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)

---

## **Features**

- **List of Vehicles**: View all the vehicles currently in the system.
- **Add Vehicle**: Ability to add new vehicles into the system.
- **Edit Vehicle**: Edit details of an existing vehicle and add problems.
- **Problem-Solution Generation**: Use OpenAI to generate solutions for vehicle problems with three levels of possibility.
- **User-friendly Interface**: Simple UI with **Bootstrap** for styling.

---

## **Technologies Used**

- **React**: Frontend framework for building the user interface.
- **TypeScript**: Adds static type checking to JavaScript, making it more robust.
- **Vite**: Build tool that provides fast development and optimized production builds.
- **React Router**: Handles routing between pages in the app.
- **Bootstrap**: Frontend CSS framework for styling the UI components.

---

## **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/emsabbatini8416/mech-front.git
   cd mech-front
   ```

2. **Install the dependencies:**
   Ensure you have **Node.js** installed on your machine, then run:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root of the project.
   - Add your backend API URL (adjust based on your backend setup):
     ```env
     VITE_BACKEND_API_URL=http://localhost:5000/api
     ```

---

## **Running the Application**

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open the app in your browser**:
   After running the above command, open your browser and go to:
   ```
   http://localhost:3000
   ```
