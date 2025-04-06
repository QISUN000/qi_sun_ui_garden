import React from 'react';
import { Card } from '../components/Card';
import { Text } from '../components/Text';
import { Img } from '../components/Img';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Work = () => {
  const navigate = useNavigate();
  return (
    <div className="work-page">
      <section className="section work">
        <Text variant="h2">Work Experience & Projects</Text>

        {/* Work Experience */}
        <div className="text-center mb-2">
          <Text variant="h3">Professional Experience</Text>
        </div>
        <div className="work-grid">
          <Card>
            <Text variant="h4">Web Designer</Text>
            <Text variant="caption">
              Tian Ke Digital Innovation Science & Technology Co. Ltd, China (2016 – 2024)
            </Text>
            <Img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80"
              alt="Web Design"
            />
            <Text variant="body">
              <ul>
                <li>
                  Developed and maintained customer-facing web applications serving 10,000+
                  companies
                </li>
                <li>Ensured consistent functionality and accessibility for enterprise clients</li>
                <li>
                  Collaborated with backend teams to standardize API patterns across multiple
                  product teams
                </li>
                <li>Enhanced system integration and development consistency</li>
              </ul>
            </Text>
          </Card>

          <Card>
            <Text variant="h4">Sales Associate</Text>
            <Text variant="caption">7-Eleven, Winnipeg (2024 – Current)</Text>
            <Img
              src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80"
              alt="Sales Associate"
            />
            <Text variant="body">
              <ul>
                <li>Current position while pursuing education</li>
                <li>Providing customer service in a fast-paced retail environment</li>
                <li>Managing inventory and handling transactions</li>
              </ul>
            </Text>
          </Card>
        </div>

        {/* Projects */}
        <div className="text-center mt-3 mb-2">
          <Text variant="h3">Key Projects</Text>
        </div>
        <div className="work-grid">
          <Card>
            <Text variant="h4">Nail Salon Booking System</Text>
            <Text variant="caption">React, Spring Boot, MySQL</Text>
            <Img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80"
              alt="Nail Salon Booking System"
            />
            <Text variant="body">
              <ul>
                <li>
                  Developed a full stack booking platform with JWT authentication for secure access
                </li>
                <li>
                  Built real-time appointment scheduling system with automated availability checking
                </li>
                <li>
                  Designed responsive admin dashboard for staff to manage services and bookings
                </li>
              </ul>
            </Text>
            <Button onClick={() => navigate('/projects/nail-salon-booking')}>View Project</Button>
          </Card>

          <Card>
            <Text variant="h4">Job Board Platform</Text>
            <Text variant="caption">
              Spring Cloud, Spring Boot, PostgreSQL, RabbitMQ, Docker, Kubernetes
            </Text>
            <Img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
              alt="Job Board Platform"
            />
            <Text variant="body">
              <ul>
                <li>
                  Designed microservices (Company, Job, Review) architecture with Eureka Server for
                  service discovery and Spring Cloud Config
                </li>
                <li>
                  Implemented inter-service communication using Spring Cloud Gateway and RabbitMQ
                  for message queuing
                </li>
                <li>
                  Deployed using Docker containers and Kubernetes, with Zipkin for distributed
                  tracing and monitoring
                </li>
              </ul>
            </Text>
            <Button onClick={() => navigate('/projects/job-board-platform')}>View Project</Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Work;
