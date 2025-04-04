import React from 'react';
import { Text } from '../components/Text';
import { Img } from '../components/Img';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const JobBoardProject = () => {
  return (
    <div className="project-page">
      <div className="container">
        <div className="project-header">
          <Text variant="h2">Job Board Platform</Text>
          <Text variant="caption">Microservices Architecture</Text>
        </div>

        <div className="project-showcase">
          <Img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
            alt="Job Board Platform"
            className="project-hero-image"
          />
        </div>

        <div className="project-details">
          <div className="project-info">
            <div className="info-section">
              <Text variant="h4">Overview</Text>
              <Text variant="body">
                A comprehensive job board platform built with a microservices architecture, allowing
                companies to post job listings and job seekers to find and apply for opportunities.
                The platform includes company profiles, job listings, and a review system with
                sophisticated search and filtering capabilities.
              </Text>
            </div>

            <div className="info-section">
              <Text variant="h4">Technologies Used</Text>
              <ul className="tech-list">
                <li>Spring Cloud & Spring Boot</li>
                <li>PostgreSQL</li>
                <li>RabbitMQ</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Eureka Server</li>
                <li>Spring Cloud Config</li>
                <li>Spring Cloud Gateway</li>
                <li>Zipkin</li>
                <li>React & Redux (Frontend)</li>
              </ul>
            </div>

            <div className="info-section">
              <Text variant="h4">Architecture</Text>
              <Text variant="body">
                The system is built using a microservices architecture with the following
                components:
              </Text>
              <ul className="architecture-list">
                <li>
                  <strong>Company Service:</strong> Manages company profiles, verification, and
                  account management
                </li>
                <li>
                  <strong>Job Service:</strong> Handles job postings, applications, and search
                  functionality
                </li>
                <li>
                  <strong>Review Service:</strong> Manages company and job reviews from verified
                  users
                </li>
                <li>
                  <strong>User Service:</strong> Handles user authentication, profiles, and
                  preferences
                </li>
                <li>
                  <strong>Notification Service:</strong> Manages email and in-app notifications
                </li>
                <li>
                  <strong>API Gateway:</strong> Single entry point for all client requests
                </li>
                <li>
                  <strong>Discovery Server:</strong> Service registration and discovery with Eureka
                </li>
                <li>
                  <strong>Config Server:</strong> Centralized configuration management
                </li>
              </ul>
            </div>

            <div className="info-section">
              <Text variant="h4">Key Features</Text>
              <ul className="feature-list">
                <li>
                  <strong>Advanced Job Search:</strong> Filter by location, salary, experience
                  level, and more
                </li>
                <li>
                  <strong>Company Profiles:</strong> Detailed company information with reviews and
                  ratings
                </li>
                <li>
                  <strong>Application Tracking:</strong> Monitor application status and receive
                  updates
                </li>
                <li>
                  <strong>Admin Dashboard:</strong> Comprehensive tools for platform management
                </li>
                <li>
                  <strong>Analytics:</strong> Detailed metrics on job postings, applications, and
                  user engagement
                </li>
                <li>
                  <strong>Scalability:</strong> Kubernetes orchestration for dynamic scaling based
                  on demand
                </li>
              </ul>
            </div>
          </div>

          <div className="project-gallery">
            <Text variant="h4">Project Gallery</Text>
            <div className="gallery-grid">
              <Img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
                alt="Job Listings"
              />
              <Img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                alt="Architecture Diagram"
              />
              <Img
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80"
                alt="Admin Dashboard"
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

export default JobBoardProject;
