import { Container } from '@chakra-ui/react'
import { projectData } from '../data/project_data'
import CompletedProjectList from './completedProjectList'
import WipProjectList from './wipProjectList'

const ProjectList = () => {
  const completedProjects = projectData.filter((p) => {
    if (p.status === 'deployed') return p
  })
  const wipProjects = projectData.filter((p) => {
    if (p.status !== 'deployed') return p
  })

  return (
    <>
      <WipProjectList projects={wipProjects} />
      <CompletedProjectList projects={completedProjects} />
    </>
  )
}

export default ProjectList
