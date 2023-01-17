import React from 'react'
import Image from 'next/image'
import { Box, Badge, Flex, Text, Link } from '@chakra-ui/react'
import { Project } from '../types/Projects'

export type ProjectProp = {
  project: Project
}

function ProjectCard({ project }: ProjectProp) {
  return (
    <Box
      maxW={{ base: '90%', md: '100%' }}
      boxShadow="base"
      borderWidth="1px"
      borderRadius="lg"
      key={project.title}
    >
      {project.screenshot !== '' && (
        <Image
          src={`/assets/${project.screenshot}`}
          height={300}
          width={450}
          objectFit="cover"
          quality={90}
          // @TODO: add alt text for these images
          alt={project.description}
        />
      )}

      <Box p="6">
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignContent="center"
        >
          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {project.title}
          </Text>
        </Flex>
        <Text>{project.description}</Text>
        <Flex flexDirection="row" justifyContent="start">
          <Text>Links: </Text>
          <Link
            href={`${project.project_at}`}
            color="red"
            paddingLeft="1%"
            isExternal
          >
            <Text>Github</Text>
          </Link>
          <Text>, </Text>
          <Link
            href={`${project.access_at}`}
            color="red"
            paddingLeft="1%"
            isExternal
          >
            <Text>Project</Text>
          </Link>
        </Flex>
        <Box>
          {project.stack && (
            <Text>
              Technologies:{' '}
              {project.stack?.map((tech, i) => {
                if (project.stack && i === project.stack.length - 1) {
                  return tech
                } else {
                  return `${tech}, `
                }
              })}
            </Text>
          )}
        </Box>
        <Box>
          <Text>
            Categories:{' '}
            {project.categories?.map((category, i) => {
              if (i === project.categories.length - 1) {
                return category
              } else {
                return `${category}, `
              }
            })}
          </Text>
        </Box>
        <Badge borderRadius="full" px="2" colorScheme="teal" alignSelf="center">
          {project.status}
        </Badge>
      </Box>
    </Box>
  )
}

export default ProjectCard
