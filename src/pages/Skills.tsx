import React from 'react';
import { Card } from '../components/Card';
import { Text } from '../components/Text';
import { Table } from '../components/Table';

const Skills = () => {
  return (
    <div className="skills-page">
      <section className="section tech-list">
        <Text variant="h2">Skills & Expertise</Text>

        <div className="skills-container">
          <Card>
            <Text variant="h4">Programming Languages & Frameworks</Text>
            <Table
              headers={['Skill', 'Experience Level']}
              rows={[
                ['JavaScript/React', 'Advanced'],
                ['Java/Spring Boot', 'Advanced'],
                ['Spring Cloud', 'Intermediate'],
                ['HTML/CSS', 'Advanced'],
                ['MySQL/PostgreSQL', 'Intermediate'],
                ['REST APIs', 'Advanced'],
              ]}
            />
          </Card>

          <Card>
            <Text variant="h4">DevOps & Tools</Text>
            <Table
              headers={['Tool', 'Experience Level']}
              rows={[
                ['Git', 'Advanced'],
                ['Docker', 'Intermediate'],
                ['Kubernetes', 'Intermediate'],
                ['JUnit', 'Advanced'],
                ['Postman', 'Advanced'],
                ['Microservices', 'Intermediate'],
              ]}
            />
          </Card>

          <Card>
            <Text variant="h4">Additional Skills</Text>
            <Table
              headers={['Skill', 'Experience Level']}
              rows={[
                ['Power Platform', 'Basic'],
                ['.NET', 'Basic'],
                ['Microsoft Access', 'Basic'],
                ['RabbitMQ', 'Intermediate'],
                ['Agile Methodologies', 'Advanced'],
                ['System Documentation', 'Advanced'],
              ]}
            />
          </Card>
        </div>

        <div className="education-section mt-3">
          <div className="text-center mb-2">
            <Text variant="h3">Education & Certification</Text>
          </div>
          <Card>
            <Text variant="h4">Full Stack Web Development</Text>
            <Text variant="caption">Red River College Polytechnic</Text>
            <div className="mt-1">
              <Text variant="body">
                • Diploma program (Expected completion: August 2025)
                <br />
                • GPA: 4.33 (Spring/Summer/Fall 2024)
                <br />• Focus on full stack web development technologies and methodologies
              </Text>
            </div>
          </Card>

          <div className="mt-2">
            <Card>
              <Text variant="h4">Certifications</Text>
              <Table
                headers={['Certification', 'Status']}
                rows={[
                  ['CompTIA A+', 'Completed'],
                  ['Criminal Record Check (CRC)', 'In progress'],
                ]}
              />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
