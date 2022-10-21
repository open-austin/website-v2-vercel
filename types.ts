import { ReactNode } from 'react'
import { ListItemProps, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { MultiValue } from 'chakra-react-select'

export type LinkProps = ChakraLinkProps

export type SocialLink = ChakraLinkProps & {
  label: string
}

export type FooterItems = SocialLink & {
  key: string
  icon?: ReactNode
}

export type ListProps = ListItemProps

export type ProjectCardsProps = {
  projectList: Projects[]
}

export type NavItem = {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
  external?: boolean
  wip?: boolean
}

export type Projects = {
  title: string
  description: string
  access_at?: string | null
  project_at?: string | null
  type: string
  status: string
  categories: Array<string>
  contact: string | Array<string>
  cfa_stage?: string
  date: string
  thumb?: string | null
  stack?: Array<string>
  published?: boolean
  screenshot?: string
  featured?: boolean
  archived?: boolean
  skipSize: number
}

export type SelectedMulti = Array<{ value: string; label: string }>

export type SearchProps = {
  setProjectList: (projectList: Projects[]) => void
}

export type SearchBarProps = {
  categories: SelectedMulti
  statuses: SelectedMulti
  selectionHandler: (
    selection: MultiValue<{
      value: string
      label: string
    }>,
    selector: string
  ) => void
}
