import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {AiFillDelete} from 'react-icons/ai'

import { deleteJournal } from '../features/journal/journalSlice'

interface item {
  journal: string,
  date: string
}


export default function JournalList() {

  const journalList = useSelector(state => state.journal)
  const dispatch = useDispatch()

  useEffect(() => {

    function deleteHotkey(e) {
      if (e.key === ';' || e.key === ':') {
        dispatch(deleteJournal(0))
      }
    }    
    window.addEventListener('keypress', deleteHotkey)
    return () => window.removeEventListener('keypress', deleteHotkey)
  }, [])


  if (journalList.length) {
    return (
      <div className='px-4 py-4' >
        {journalList.map((item: item, index : number) => {
          const { journal, date } = item
          return (
            <div key={index}
            className='flex hover:bg-slate-300 px-2 py-1 transition-all duration-100'
            >      
              <span className='me-2'>
                <button onClick={() => dispatch(deleteJournal(index))}
                  className='hover:scale-110  active:scale-95 transition-all duration-100'
                >
                  <AiFillDelete className='text-red-800 hover:text-red-600'
                  />
                </button>
              </span>
              <span className='me-4 text-sm opacity-50'>
                {index + 1}
              </span>
              <span className='me-auto'>
              {journal}              
              </span>
              <span className='ms-auto'>
                {date}  
              </span>         
            </div>
          )
        })}
      </div>
    )
  }

  else {
    return (
      <div>
        No Journal Entries...
      </div>
    )
  }

}