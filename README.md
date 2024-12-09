# React Forms Application

This project implements a React application with a Sign Up and Login form, utilizing Formik and TypeScript.

## Features
1. Form validation with Formik and Yup.
2. Password strength indicator for Sign Up.
3. Remember Me functionality for Login.
4. Accessibility features (ARIA roles and labels).

## How to Run the Project
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

## Design Choices
- **Formik**: Simplifies form handling.
- **Yup**: Provides schema-based validation.
- **TypeScript**: Ensures type safety.
- **CSS**: Custom styling to avoid third-party libraries.

## Assumptions
- User's email is stored in local storage when "Remember Me" is checked.
- Password strength is displayed based on length.

## Limitations
- No backend integration for authentication.
