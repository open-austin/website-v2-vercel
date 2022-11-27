export type Project = {
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

export type ProjectListProp = { projects: Project[] }
