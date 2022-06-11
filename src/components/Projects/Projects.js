import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ontors Manufacturer "
              description="
              This is a Full Stack Website
              Technologies:React JS,Node JS,Tailwind CSS,Daisy UI.
              Multi-authentication system.
              Payment Method added.
              Create Admin.
              Use Nested Route.
              Admin Can Add or Delete a   Product from the inventory.
              If normal user confirm to buy any product,it will take the user to the payment page. 
              Normal user can not see the admin’s work.
              Google popup login system.
              Login,Registration,Email verification,Reset password system added.
              "
              link="https://github.com/Ariful-Srity/assignment12"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ontors Bake Haven"
              description="This is a Bike service website
              Technologies: React JS,Node JS, Express JS,Mongo DB,Firebase,React BootStrap,React Router Hooks.
              Login,Register,Email verification,Reset password system added.
              User can see user name , Log out,Manage Items,My Items,Add Items routes, after login.
              Review system implemented.
              Use Nested Route.
              After login User will see some extra pages.
              Google popup login system.
              Deploy in firebase
              "
              link="https://github.com/Ariful-Srity/warehouse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Dr.MST Sumaiya Akter"
              description="This ia a personal website.
              Technologies:React js,CSS,React BootStrap,React Router,Firebase.
              This is a Personal Website For a Doctor.
              Login,Register,Email verification,Reset password system added.
              Google popup login system.
              Use Firebase Authentication.
              After Login User will see Logout Button At the  navbar.
              Use Require Auth.
              Use A Dynamic Banner.
              Deploy in Firebase.
              "
              link="https://github.com/Ariful-Srity/independent-service"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/Ariful-Srity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/Ariful-Srity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/Ariful-Srity"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
