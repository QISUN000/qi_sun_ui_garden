import React from 'react';
import { HeroImage } from '../components/Hero Image';
import { Card } from '../components/Card';
import { Text } from '../components/Text';
import { Button } from '../components/Button';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroImage
        imageUrl="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*7VyEZgzwUhQMeBqb"
        title="Qi Sun"
        subtitle="Full Stack Developer"
        onClick={() => console.log('Hero clicked')}
      />

      {/* Basic Information */}
      <section className="section basic-info">
        <Text variant="h2">About Me</Text>
        <Card>
          <Text variant="body">
            Full Stack Developer with 7+ years' experience in the IT industry, specializing in
            developing and maintaining customer-facing web applications for enterprise clients.
            Experienced in REST API integration, microservices architecture, and Agile workflows.
            Familiar with Power Platform and eager to expand expertise in Robotic Process Automation
            (RPA).
          </Text>
          <div className="mt-1">
            <Text variant="body">
              Skilled in unit testing, debugging, and system documentation using JUnit, Postman, and
              Git. Basic knowledge of .NET and Microsoft Access. Collaborative team player with
              strong problem-solving skills homed in cross-functional teams.
            </Text>
          </div>
          <div className="contact-info">
            <Text variant="h5">Contact Information</Text>
            <Text variant="body">Email: Lukesun2023@gmail.com | Phone: (431) 373-6550</Text>
            <Text variant="body">
              LinkedIn: linkedin.com/in/qisun000 | GitHub: github.com/QISUN000
            </Text>
            <div className="mt-1">
              <Button onClick={() => window.open('mailto:Lukesun2023@gmail.com')}>
                Contact Me
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Featured Work Preview */}
      <section className="section featured-work">
        <Text variant="h2">Featured Projects</Text>
        <Card>
          <Text variant="h4">Nail Salon Booking System</Text>
          <Text variant="body">
            Developed a full stack booking platform with JWT authentication for secure access,
            real-time appointment scheduling system with automated availability checking, and
            responsive admin dashboard for staff to manage services and bookings.
          </Text>
          <div className="featured-button">
            <Button onClick={() => (window.location.href = '/work')}>View My Work</Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;
