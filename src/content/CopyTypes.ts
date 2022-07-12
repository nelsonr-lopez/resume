export type Experience = {
  companyName: string
  workDate: string
  title: string
  task: string
  description: string
  tools: string[]
}

export type Projects = {
  about: string
  deployedTo: string
  codeRepo: string
  features: string[]
  builtWith: string[]
}

export type WebLink = {
  name: string
  link: string
  svg: string
}

type ContactInfo = {
  info: string
  svg: string
}

export type Contact = {
  name:string
  title: string
  email: ContactInfo
  phone: ContactInfo
  address: ContactInfo
  weblinks: WebLink[]
}

export type ProfileCopy = string[]

export type LearningCopy = string[]
