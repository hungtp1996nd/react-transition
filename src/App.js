import { useMemo, useState, useTransition } from 'react';
import './App.css';
import dataList from './data.json'

function App() {
  const [text, setText] = useState('')
  const [filterText, setFilterText] = useState('')
  const [isPending, startTransition] = useTransition()

  const data = useMemo(() => {
    return dataList.map((student) => {
      const index = student.indexOf(filterText);
      return index === -1 ? (
        <p>{student}</p>
      ) : (
        <p>
          {student.slice(0, index)}
          <span style={{backgroundColor: 'yellow'}}>{student.slice(index, index + filterText.length)}</span>
          {student.slice(index + filterText.length)}
        </p>
      )
    })
  }, [filterText])

  const handleSearch = (e) => {
    setText(e.target.value)

    startTransition(() => {
      setFilterText(e.target.value)
    })
  }

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleSearch} />
      {isPending ? <p>Loading...</p> : data.map(student => <p>{student}</p>)}
    </div>
  );
}

export default App;
