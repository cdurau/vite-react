import { useEffect, useState } from 'react';
import Counter from './components/Counter';


function App({ pageTitle }: { pageTitle: string }) {
  const [title, setTitle] = useState(pageTitle)

  useEffect(() => {
    setTitle(pageTitle)

    document.title = title
  })

  return (
    <>

      <Counter title={title} ></Counter>
    </>
  )
}

App.defaultProps = {
  pageTitle: "Dankbarkeits - Zähler"
}

export default App
