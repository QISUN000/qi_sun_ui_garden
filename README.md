# UI Component Library with Code Quality Checks

A React component library created with Create React App and Storybook, featuring reusable UI components and code quality checks.

## Prerequisites

- Docker installed on your machine
- Git (optional, for cloning)

## Project Structure

```
qi_sun_ui_garden/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── Label/
│   │   ├── Text/
│   │   ├── Table/
│   │   ├── Dropdown/
│   │   ├── RadioButton/
│   │   ├── Image/
│   │   ├── HeroImage/
│   │   └── Card/
├── .storybook/
├── .github/workflows/
├── .husky/
├── package.json
├── Dockerfile
└── README.md
```

## Getting Started

### Running with Docker

1. Navigate to the project directory:
```bash
cd qi_sun_ui_garden
```

2. Build the Docker container:
```bash
docker build -t qi_sun_coding_assignment13 .
```

3. Run the container:
```bash
docker run -d -p 8018:8018 --name qi_sun_coding_assignment13 qi_sun_coding_assignment13
```

4. Access the application:
- Storybook: http://localhost:8018

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

## Code Quality Features

This project implements several code quality checks that run automatically:

### Pre-commit Hooks

Husky is configured to run the following checks before each commit:
- ESLint to enforce code quality rules
- Prettier for consistent code formatting
- Unit tests to ensure functionality

### GitHub Actions

The CI/CD pipeline automatically runs the same checks on all code submissions:
- Linting with ESLint
- Code formatting with Prettier
- Unit testing
- Build verification

These quality checks ensure that all code meets the project standards before being merged.

## Components

Each component in the library includes:
- TypeScript implementation
- Storybook stories with controls
- Type definitions
- Unit tests
- Responsive design
- Styled-components based styling
- Default and disabled states

### Available Components:

1. **Button**
   - Primary and secondary variants
   - Disabled state
   - Customizable background color

2. **Label**
   - Form label component
   - Optional required indicator

3. **Text**
   - Various text styles
   - Responsive font sizing

4. **Table**
   - Table header
   - Table row
   - Table cell
   - Table footer
   - Responsive design

5. **Dropdown**
   - Custom styled select
   - Multiple options support

6. **Radio Button**
   - Custom styled radio inputs
   - Group functionality

7. **Image**
   - Responsive image component
   - Lazy loading

8. **Hero Image**
   - Full-width banner image
   - Optional overlay text

9. **Card**
   - Content container
   - Header, body, footer sections

## Testing

Run unit tests:
```bash
npm test
```

## Building

Create a production build:
```bash
npm run build
```

Build Storybook:
```bash
npm run build-storybook
```

## Docker Commands

Stop the container:
```bash
docker stop qi_sun_coding_assignment13
```

Remove the container:
```bash
docker rm qi_sun_coding_assignment13
```

Remove the image:
```bash
docker rmi qi_sun_coding_assignment13
```
```
