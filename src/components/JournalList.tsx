import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {AiFillDelete} from 'react-icons/ai'

import { deleteJournal } from '../features/journal/journalSlice'




export default function JournalList() {

  const journalList = useSelector(state => state.journal)
  const dispatch = useDispatch()

  if (journalList.length) {
    return (
      <div className='px-4 py-4' >
        {journalList.map((journal : string [], index : number) => {
          return (
            <div key={index}
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
              <span>
              {journal}              
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