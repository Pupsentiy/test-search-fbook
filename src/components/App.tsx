import { AppRouter } from 'routes/AppRouter'
import { Header } from './ui/Header'
const App = () => {
  return (
    <main>
      <Header/>
       <AppRouter/>
    </main>
  )
}

export default App
