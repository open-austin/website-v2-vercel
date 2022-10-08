import ProjectCards from '../components/ProjectCards'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState<Set<string>>(new Set())
  const [currentStatus, setCurrentStatus] = useState<Set<string>>(new Set())

  return (
    <>
      <SearchBar
        setCurrentCategory={setCurrentCategory}
        setCurrentStatus={setCurrentStatus}
      />
      <ProjectCards
        currentCategory={currentCategory}
        currentStatus={currentStatus}
      />
    </>
  )
}

export default Portfolio
