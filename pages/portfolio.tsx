import SearchBar from '../components/SearchBar'
import { useState } from 'react'
import Projects from '../components/projects'

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState<Set<string>>(new Set())
  const [currentStatus, setCurrentStatus] = useState<Set<string>>(new Set())

  return (
    <>
      <SearchBar
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
