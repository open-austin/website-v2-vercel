import { Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectListProp } from '../types/Projects'

function WipProjectList({ projects }: ProjectListProp) {
  return (
    <>
      <Heading variant="projectSection">Works in Progress</Heading>
      <SimpleGrid
        minChildWidth={{ md: '45%' }}
        w={{ base: '100%', md: '50%' }}
        mt={{ base: '5%', md: '2%' }}
        justifyItems={{ base: 'center' }}
        spacing="1%"
      >
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default WipProjectList
