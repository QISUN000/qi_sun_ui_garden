import React from 'react';
import { Text } from '../components/Text';
import { Img } from '../components/Img';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const NailSalonProject = () => {
  return (
    <div className="project-page">
      <div className="container">
        <div className="project-header">
          <Text variant="h2">Nail Salon Booking System</Text>
          <Text variant="caption">Full-Stack Web Application</Text>
        </div>

        <div className="project-showcase">
          <Img
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80"
            alt="Nail Salon Booking System"
            className="project-hero-image"
          />
        </div>

        <div className="project-details">
          <div className="project-info">
            <div className="info-section">
              <Text variant="h4">Overview</Text>
              <Text variant="body">
                A comprehensive booking platform for nail salons that enables clients to schedule
                appointments and allows salon staff to manage their business operations efficiently.
                The system provides real-time availability checking, service management, and secure
                user authentication.
              </Text>
            </div>

            <div className="info-section">
              <Text variant="h4">Technologies Used</Text>
              <ul className="tech-list">
                <li>Frontend: React, Redux, Material UI</li>
                <li>Backend: Spring Boot, Java</li>
                <li>Database: MySQL</li>
                <li>Authentication: JWT</li>
                <li>Deployment: AWS EC2, Docker</li>
              </ul>
            </div>

            <div className="info-section">
              <Text variant="h4">Key Features</Text>
              <ul className="feature-list">
                <li>
                  <strong>User Authentication:</strong> Secure login system for clients and salon
                  staff with role-based access control
                </li>
                <li>
                  <strong>Appointment Booking:</strong> Interactive calendar for selecting available
                  time slots with automated confirmation
                </li>
                <li>
                  <strong>Service Management:</strong> Admin dashboard to add, edit, and remove
                  services with pricing
                </li>
                <li>
                  <strong>Staff Management:</strong> Schedule management for nail technicians with
                  availability tracking
                </li>
                <li>
                  <strong>Customer Profiles:</strong> Personalized customer accounts with
                  appointment history and preferences
                </li>
                <li>
                  <strong>Notifications:</strong> Automated email and SMS reminders for upcoming
                  appointments
                </li>
              </ul>
            </div>
          </div>

          <div className="project-gallery">
            <Text variant="h4">Project Gallery</Text>
            <div className="gallery-grid">
              <Img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80"
                alt="Booking Interface"
              />
              <Img
                src="https://images.unsplash.com/photo-1610992198762-78436841f7a3?auto=format&fit=crop&q=80"
                alt="Admin Dashboard"
              />
              <Img
                src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80"
                alt="Mobile View"
              />
            </div>
          </div>

          <div className="back-navigation">
            <Link to="/work">
              <Button>← Back to Portfolio</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NailSalonProject;
