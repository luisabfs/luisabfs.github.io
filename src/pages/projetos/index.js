import React, { Component } from 'react';

import { Container, Wrapper, WrapCaption, WrapProjects } from './styles';

import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';

import project1 from '../../assets/images/todolist.png';
import project2 from '../../assets/images/barber.png';
import project3 from '../../assets/images/gituser.png';
import layer from '../../assets/images/layer.png';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Wrapper>
          <WrapCaption>
            <h1>meus projetinhos</h1>
            <img src={layer} alt="" />
          </WrapCaption>
          <WrapProjects>
            <ProjectCard
              link="https://github.com/luisabfs/todolist"
              img={project1}
              title="To-do List"
              content="Simple React application to dive into the Unform library."
            />
            <ProjectCard
              link="https://github.com/luisabfs/gobarber"
              img={project2}
              title="GoBarber"
              content="Node.js application for a fictional barber shop."
            />
            <ProjectCard
              link="https://github.com/luisabfs/gituser"
              img={project3}
              title="Git User"
              content="Simple React Native application for listing Github user's info."
            />
          </WrapProjects>
        </Wrapper>
      </Container>
    );
  }
}
