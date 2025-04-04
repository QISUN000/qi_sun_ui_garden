# Qi Sun Portfolio Website

A portfolio website built using a React component library, showcasing my work, skills, and resources.

## Portfolio Structure

This portfolio website includes the following navigation pages:
- **Home** - Basic information about me with a brief introduction
- **Work** - Showcases of my projects with descriptions, images, and links
- **Skills** - Technical expertise broken down by category
- **Resources** - Curated collection of design and development resources
- **Dev Setup** - My development environment preferences (VSCode, Terminal, etc.)

## Prerequisites

- Docker installed on your machine
- Git (optional, for cloning)

## Getting Started

### Running with Docker

1. Clone the repository:
```bash
git clone <repository-url>
cd qi_sun_ui_garden
```

2. Build the Docker container:
```bash
docker build -t qi_sun_coding_assignment14 .
```

3. Run the container:
```bash
docker run -d -p 5575:5575 --name qi_sun_coding_assignment14 qi_sun_coding_assignment14
```

4. Access the portfolio website:
- Open a browser and navigate to http://localhost:5575 or http://127.0.0.1:5575

### Development Setup

If you want to run the application locally without Docker:

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run Storybook:
```bash
npm run storybook
```

## Docker Commands

Stop the container:
```bash
docker stop qi_sun_coding_assignment14
```

Remove the container:
```bash
docker rm qi_sun_coding_assignment14
```

Remove the image:
```bash
docker rmi qi_sun_coding_assignment14
```

## Tech Stack

- React.js
- TypeScript
- React Router (for page navigation)
- Styled Components
- Docker
- Nginx

## Component Library

This portfolio website uses a custom UI component library that includes:
- Button
- Card
- Dropdown
- HeroImage
- Img
- Label
- RadioButton
- Table
- Text

Each component is fully responsive, accessible, and tested.