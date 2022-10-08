import { useState } from 'react'
import Projects from '../components/projects'
import Search from '../components/search'

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState<Set<string>>(new Set())
  const [currentStatus, setCurrentStatus] = useState<Set<string>>(new Set())

  return (
    <>
      <Search
        setCurrentCategory={setCurrentCategory}
        setCurrentStatus={setCurrentStatus}
      />
      <Projects
        currentCategory={currentCategory}
        currentStatus={currentStatus}
      />
    </>
  )
}

export default Portfolio
