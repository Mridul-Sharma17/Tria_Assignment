# Contact List Application

A simple and intuitive contact management application built with React and DaisyUI.

## 🚀 Live Demo

**Deployed Application**: https://intern-assignment-96yxrw2lh-mridul-sharmas-projects-8fc52955.vercel.app

## ✨ Features

- **View Contacts**: Display all contacts in a clean, organized grid layout
- **Search Functionality**: Search contacts by name, email, or phone number
- **Add New Contact**: Add contacts with validation for name, email, and phone fields
- **Delete Contact**: Remove contacts with confirmation dialog
- **Alphabetical Sorting**: Contacts are automatically sorted A-Z by name
- **Persistent Storage**: Contacts are saved in browser localStorage
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices

## 🛠️ Technologies Used

- **React 19.2** - Modern UI library for building interactive interfaces
- **Vite 7.1.12** - Fast build tool with hot module replacement for efficient development
- **DaisyUI 5.4.2** - Tailwind CSS component library for consistent and professional UI design
- **Tailwind CSS 4** - Utility-first CSS framework for rapid styling
- **Vercel** - Deployment platform for seamless hosting

### Why These Technologies?

- **React**: Chosen for its component-based architecture and efficient state management
- **Vite**: Provides instant server start and lightning-fast HMR for better developer experience
- **DaisyUI**: Offers pre-built accessible components that maintain design consistency
- **Tailwind CSS**: Enables rapid UI development with utility classes

## 📦 Local Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/Mridul-Sharma17/Tria_Assignment.git
cd Tria_Assignment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🎨 Design Choices

- **Android/OneUI Inspired Design**: Clean, centered layout with solid colors for a modern look
- **Alphabetical Organization**: Contacts are sorted alphabetically for easy navigation
- **Confirmation Dialogs**: Delete actions require confirmation to prevent accidental data loss
- **Success Feedback**: Visual feedback through alerts when actions are completed
- **Persistent Data**: localStorage ensures contacts persist across browser sessions

## 📝 Assumptions

- The application uses mock data as no backend API was specified
- Contact data persists only in browser localStorage (cleared when browser data is cleared)
- Phone numbers are validated for basic format but accept international formats
- Email validation uses standard regex pattern
- No user authentication is required

## 📱 Contact Database

The application comes pre-loaded with 6 sample contacts for demonstration purposes.

## 🔍 Search Implementation

Search works across three fields:
- Contact name (case-insensitive)
- Email address (case-insensitive)  
- Phone number

---

