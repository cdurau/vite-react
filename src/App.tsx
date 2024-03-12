import { useEffect } from 'react';
import Counter from './components/Counter';


function App() {
  useEffect(() => {
    document.title = 'Dankbarkeits - Zähler'
  })

  return (
    <>
      <Counter></Counter>
    </>
  )
}

export default App
