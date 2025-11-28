# Xinyu Feng - Academic Personal Website

This is a personal academic website for Xinyu Feng, built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured to deploy to GitHub Pages automatically using GitHub Actions.

### Steps to Deploy:

1.  Push this code to a GitHub repository.
2.  Go to the repository **Settings**.
3.  Navigate to **Pages** (under the "Code and automation" section).
4.  Under **Build and deployment**, select **GitHub Actions** as the source.
5.  The action will automatically trigger on push to `main`.

## Project Structure

-   `app/`: Next.js app router pages and global styles.
-   `components/`: React components for different sections of the CV.
-   `lib/cv_data.ts`: Centralized data file containing CV content. Update this file to change the website text.

## Customization

To update your CV information, edit `lib/cv_data.ts`.
To change styles, you can modify the components or `app/globals.css`.
