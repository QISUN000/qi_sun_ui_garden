import React from 'react';
import { Card } from '../components/Card';
import { Text } from '../components/Text';

const DevSetup = () => {
  return (
    <div className="dev-setup-page">
      <section className="section dev-setup">
        <Text variant="h2">Development Environment</Text>
        <div className="text-center mb-2">
          <Text variant="body">
            My preferred tools and configurations for efficient full-stack development
          </Text>
        </div>

        <Card>
          <Text variant="h4">VSCode Setup</Text>
          <Text variant="body">
            <ul>
              <li>
                <strong>Theme:</strong> One Dark Pro - Easy on the eyes for long coding sessions
              </li>
              <li>
                <strong>Font:</strong> JetBrains Mono (size 14, ligatures enabled) for clear code
                readability
              </li>
              <li>
                <strong>Extensions:</strong>
                <ul>
                  <li>Spring Boot Extension Pack - For Java/Spring development</li>
                  <li>ESLint & Prettier - For consistent code formatting</li>
                  <li>GitLens - Enhanced Git integration</li>
                  <li>REST Client - For API testing</li>
                  <li>Docker - Container management within VSCode</li>
                </ul>
              </li>
              <li>
                <strong>Settings:</strong> Auto-format on save, Bracket pair colorization,
                Integrated terminal
              </li>
            </ul>
          </Text>

          <div className="mt-2">
            <Text variant="h4">Terminal Setup</Text>
            <Text variant="body">
              <ul>
                <li>
                  <strong>Terminal:</strong> Windows Terminal with WSL2 (Ubuntu)
                </li>
                <li>
                  <strong>Shell:</strong> Zsh with Oh My Zsh
                </li>
                <li>
                  <strong>Theme:</strong> Powerlevel10k with customized prompt
                </li>
                <li>
                  <strong>Tools:</strong>
                  <ul>
                    <li>fzf - For fuzzy finding history and files</li>
                    <li>ripgrep - Fast code searching</li>
                    <li>bat - Enhanced cat with syntax highlighting</li>
                    <li>z - Quick directory navigation</li>
                  </ul>
                </li>
              </ul>
            </Text>
          </div>

          <div className="mt-2">
            <Text variant="h4">Java Development Setup</Text>
            <Text variant="body">
              <ul>
                <li>
                  <strong>JDK:</strong> Amazon Corretto 17 LTS
                </li>
                <li>
                  <strong>Build Tools:</strong> Maven for dependency management
                </li>
                <li>
                  <strong>Frameworks:</strong> Spring Boot, Spring Cloud for microservices
                </li>
                <li>
                  <strong>Testing:</strong> JUnit 5, Mockito, RestAssured
                </li>
                <li>
                  <strong>API Tools:</strong> Postman for API testing and documentation
                </li>
              </ul>
            </Text>
          </div>

          <div className="mt-2">
            <Text variant="h4">Frontend Development Setup</Text>
            <Text variant="body">
              <ul>
                <li>
                  <strong>Node Version Manager:</strong> nvm for managing multiple Node.js versions
                </li>
                <li>
                  <strong>Package Manager:</strong> npm/yarn for dependency management
                </li>
                <li>
                  <strong>Dev Tools:</strong> React Developer Tools, Redux DevTools
                </li>
                <li>
                  <strong>Performance:</strong> Lighthouse for web performance auditing
                </li>
                <li>
                  <strong>Browsers:</strong> Chrome as primary development browser, Firefox and Edge
                  for cross-browser testing
                </li>
              </ul>
            </Text>
          </div>

          <div className="mt-2">
            <Text variant="h4">Containerization & DevOps</Text>
            <Text variant="body">
              <ul>
                <li>
                  <strong>Docker:</strong> For containerized development and deployment
                </li>
                <li>
                  <strong>Kubernetes:</strong> For container orchestration (learning in progress)
                </li>
                <li>
                  <strong>CI/CD:</strong> GitHub Actions for continuous integration
                </li>
                <li>
                  <strong>Monitoring:</strong> Basic setup with Prometheus and Grafana
                </li>
              </ul>
            </Text>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default DevSetup;
