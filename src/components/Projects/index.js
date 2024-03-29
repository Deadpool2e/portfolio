import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have an extensive portfolio spanning from frontend development to full-stack solutions, showcasing a diverse range of projects I have successfully delivered.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'fullstack' ?
            <ToggleButton active value="fullstack" onClick={() => setToggle('fullstack')}>FULL STACK</ToggleButton>
            :
            <ToggleButton value="fullstack" onClick={() => setToggle('fullstack')}>FULL STACK</ToggleButton>
          }
          <Divider />
          {toggle === 'frontend' ?
            <ToggleButton active value="frontend" onClick={() => setToggle('frontend')}>FRONTEND</ToggleButton>
            :
            <ToggleButton value="frontend" onClick={() => setToggle('frontend')}>FRONTEND</ToggleButton>
          }
          <Divider />
          {toggle === 'backend' ?
            <ToggleButton active value="backend" onClick={() => setToggle('backend')}>BACKEND</ToggleButton>
            :
            <ToggleButton value="backend" onClick={() => setToggle('backend')}>BACKEND</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects