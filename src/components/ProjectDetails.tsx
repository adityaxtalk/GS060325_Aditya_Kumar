import React from "react";
import { Accordion, Card, Container, ListGroup, Badge } from "react-bootstrap";

const ProjectDetails: React.FC = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-3 text-center">React Application Overview</h2>
      <Accordion defaultActiveKey="0">
        
        <Accordion.Item eventKey="0">
          <Accordion.Header>Login Page</Accordion.Header>
          <Accordion.Body>
            <p>The home page consists of a login form where users can enter their credentials.</p>
            <ListGroup>
              <ListGroup.Item><strong>Email:</strong> admin@admin.com</ListGroup.Item>
              <ListGroup.Item><strong>Password:</strong> admin@1234</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>Redux State Management</Accordion.Header>
          <Accordion.Body>
            <p>Login user details are stored in the Redux state. A utility function saves the email in local storage, ensuring persistence across page refreshes.</p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* Protected Routes */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Protected Routes</Accordion.Header>
          <Accordion.Body>
            <p>Users must be authenticated to access the dashboard. Unauthorized access redirects to the login page.</p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="3">
          <Accordion.Header>Header Section</Accordion.Header>
          <Accordion.Body>
            <p>The header displays the logged-in user's email and a logout button.</p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="4">
          <Accordion.Header>Sidebar Navigation</Accordion.Header>
          <Accordion.Body>
            <p>Navigation options for switching between:</p>
            <ListGroup>
              <ListGroup.Item>Charts</ListGroup.Item>
              <ListGroup.Item>Store</ListGroup.Item>
              <ListGroup.Item>SKU</ListGroup.Item>
              <ListGroup.Item>Planning</ListGroup.Item>
            </ListGroup>
            <p>Active navigation is highlighted.</p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="5">
          <Accordion.Header>Store Page</Accordion.Header>
          <Accordion.Body>
            <p>Displays store data using <strong>Ag Grid</strong> with the following features:</p>
            <ListGroup>
              <ListGroup.Item>Edit, Drag, and Delete data</ListGroup.Item>
              <ListGroup.Item>Add new stores via a modal form (Formik validation applied)</ListGroup.Item>
              <ListGroup.Item>Confirmation modal before adding data</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="6">
          <Accordion.Header>SKU Page</Accordion.Header>
          <Accordion.Body>
            <p>Similar to the Store page but for product SKUs.</p>
            <ListGroup>
              <ListGroup.Item>Ag Grid for displaying SKU data</ListGroup.Item>
              <ListGroup.Item>Options to Edit, Drag, and Delete data</ListGroup.Item>
              <ListGroup.Item>Formik form for adding new products</ListGroup.Item>
              <ListGroup.Item>Confirmation modal for inserting new data</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="7">
          <Accordion.Header>Planning Page</Accordion.Header>
          <Accordion.Body>
            <p>Sales details are categorized by weeks, and data is mapped to corresponding months.</p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="8">
          <Accordion.Header>Helper Functions</Accordion.Header>
          <Accordion.Body>
            <p>A helper function ensures that numerical columns contain valid numbers, avoiding format errors.</p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="9">
          <Accordion.Header>Conditional Cell Styling</Accordion.Header>
          <Accordion.Body>
            <p>Based on GM% (Gross Margin Percentage), cell styling is applied dynamically.</p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="10">
          <Accordion.Header>Charts Using ApexCharts</Accordion.Header>
          <Accordion.Body>
            <p>ApexCharts is used to provide rich visual representations with features like:</p>
            <ListGroup>
              <ListGroup.Item>Downloadable visualizations</ListGroup.Item>
              <ListGroup.Item>Zoom functionality</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default ProjectDetails;
