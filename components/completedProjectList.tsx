import React from 'react'
import ProjectCard from './ProjectCard'
import { SimpleGrid, Text, Link, Heading, Box, Flex } from '@chakra-ui/react'
import { ProjectListProp } from '../types/Projects'

function CompletedProjectList({ projects }: ProjectListProp) {
  return (
    <>
      <Heading variant="projectSection">Completed Works</Heading>
      <Text maxW={{ base: '90%', md: '100%' }} style={{ textAlign: 'center' }}>
        Here are a few of our complete work. For all of our projects visit our
        <Link> Github Page</Link>.
      </Text>
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

export default CompletedProjectList
