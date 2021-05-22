import PageBase from '../components/PageBase'
import Hero from '../components/Hero'
import SelectedProjects from '../components/SelectedProjects'

export default function Home() {
  return (
    <PageBase pageTitle='Parssa K'>
      <Hero />
      <SelectedProjects />
    </PageBase> 
  )
}
