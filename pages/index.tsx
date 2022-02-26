import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'
const Home: NextPage = () => {
  return (
    <div className="relative">
      <Header />
      <Main />
    </div>
  )
}

export default Home
