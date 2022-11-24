import { SimpleGrid } from '@chakra-ui/react'
import { projectData } from '../data/project_data'
import ProjectCard from './ProjectCard'

const ProjectList = () => {
  return (
    <SimpleGrid
      minChildWidth={{ md: '45%' }}
      w={{ base: '100%', md: '50%' }}
      mt={{ base: '5%', md: '2%' }}
      justifyItems={{ base: 'center' }}
      spacing="1%"
    >
      {projectData.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </SimpleGrid>
  )
}

export default ProjectList
