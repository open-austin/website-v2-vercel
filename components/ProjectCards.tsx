import { Box, Badge, Image, Flex, Link, Text } from '@chakra-ui/react'
import { TProjects } from './projects'

type Props = {
  projectList: TProjects[]
}

const ProjectCards = ({ projectList }: Props) => {
  return (
    <Flex
      justifyContent="space-between"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="start"
      gap="3"
      w="50%"
      m="auto"
    >
      {projectList.map((project) => (
        <Box
          maxW="45%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          key={project.title}
        >
          <Image
            src={`/assets/images/projects/screenshots/${project.screenshot}`}
            fallbackSrc={'/assets/logo/OpenAustin_Symbol_FullColor.jpg'}
            alt=""
            objectFit="cover"
          />
          <Box p="6">
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {project.title}
              </Box>
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {project.status}
                </Badge>
              </Box>
            </Flex>
            <Box>{project.description}</Box>
            <Flex flexDirection="row" justifyContent="start">
              <Text>Links: </Text>
              <Link
                href={`${project.project_at}`}
                color="red"
                paddingLeft="1%"
                isExternal
              >
                Github
              </Link>
              <Text>, </Text>
              <Link
                href={`${project.access_at}`}
                color="red"
                paddingLeft="1%"
                isExternal
              >
                Project
              </Link>
            </Flex>
            {project.stack && (
              <Box>
                Technologies:{' '}
                {project.stack?.map((tech, i) => {
                  if (project.stack && i === project.stack.length - 1) {
                    return tech
                  } else {
                    return `${tech}, `
                  }
                })}
              </Box>
            )}
            <Box>
              Categories:{' '}
              {project.categories?.map((category, i) => {
                if (i === project.categories.length - 1) {
                  return category
                } else {
                  return `${category}, `
                }
              })}
            </Box>
          </Box>
        </Box>
      ))}
    </Flex>
  )
}

export default ProjectCards
