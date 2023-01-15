import { Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectListProp } from '../types/Projects'

function WipProjectList({ projects }: ProjectListProp) {
  return (
    <>
      <Heading as="h2" size="xl" mt={10}>
        Works in Progress
      </Heading>
      <SimpleGrid
        minChildWidth={{ md: '45%' }}
        w={{ base: 'full', md: '80%' }}
        mt={{ base: '5%', md: '2%' }}
        justifyItems={{ base: 'center' }}
        spacing={4}
      >
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default WipProjectList
