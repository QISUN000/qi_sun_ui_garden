import React from 'react';
import { Card } from '../components/Card';
import { Text } from '../components/Text';
import { Img } from '../components/Img';
import { Button } from '../components/Button';

const Resources = () => {
  return (
    <div className="resources-page">
      <section className="section resources">
        <Text variant="h2">Learning Resources</Text>
        <div className="text-center mb-2">
          <Text variant="body">
            A collection of resources I've found helpful in my development journey
          </Text>
        </div>

        <div className="resources-grid">
          <Card>
            <Text variant="h4">Spring & Java Resources</Text>
            <Img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
              alt="Spring Resources"
            />
            <Text variant="body">
              Valuable resources for Spring Boot, Spring Cloud, and Java development:
              <ul>
                <li>Spring.io official documentation</li>
                <li>Baeldung tutorials for Spring ecosystem</li>
                <li>Spring Microservices in Action (book)</li>
                <li>Java Brains YouTube channel</li>
              </ul>
            </Text>
            <Button onClick={() => window.open('https://spring.io/guides', '_blank')}>
              Explore Spring Guides
            </Button>
          </Card>

          <Card>
            <Text variant="h4">React & Frontend Development</Text>
            <Img
              src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80"
              alt="React Resources"
            />
            <Text variant="body">
              Essential resources for modern frontend development:
              <ul>
                <li>React official documentation</li>
                <li>Kent C. Dodds blog for React patterns</li>
                <li>CSS-Tricks for layout techniques</li>
                <li>Web.dev for performance optimization</li>
              </ul>
            </Text>
            <Button onClick={() => window.open('https://react.dev', '_blank')}>
              Explore React Docs
            </Button>
          </Card>

          <Card>
            <Text variant="h4">DevOps & Cloud</Text>
            <Img
              src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80"
              alt="DevOps Resources"
            />
            <Text variant="body">
              Tools and guides for containerization and orchestration:
              <ul>
                <li>Docker documentation and tutorials</li>
                <li>Kubernetes patterns and best practices</li>
                <li>The DevOps Handbook (book)</li>
                <li>TechWorld with Nana YouTube channel</li>
              </ul>
            </Text>
            <Button onClick={() => window.open('https://kubernetes.io/docs/home/', '_blank')}>
              Kubernetes Resources
            </Button>
          </Card>

          <Card>
            <Text variant="h4">Software Architecture</Text>
            <Img
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80"
              alt="Architecture Resources"
            />
            <Text variant="body">
              Resources for microservices and API design:
              <ul>
                <li>Microservices Patterns (book)</li>
                <li>Martin Fowler's blog on architecture</li>
                <li>System Design Primer (GitHub)</li>
                <li>RESTful API Design Best Practices</li>
              </ul>
            </Text>
            <Button
              onClick={() => window.open('https://martinfowler.com/microservices/', '_blank')}
            >
              Architecture Resources
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Resources;
