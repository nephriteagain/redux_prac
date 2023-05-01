import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addJournal } from '../features/journal/journalSlice'

export default function CreateJournal() {
  const [ journalEntry, setJournalEntry ] = useState('')


  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    if (!journalEntry) return

   dispatch(addJournal(journalEntry))
   setJournalEntry('')
  }

  function journalEntryText(e) {
    setJournalEntry(e.currentTarget.value)
  }



  return (
    <div className='mt-4  mb-8 mx-auto flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="journal"
          className='block text-lg font-bold mb-1 text-center'
        >
          Create New Journal
        </label>
        <input 
          className='text-md px-3 py-1 me-3 bg-blue-300 rounded-s-md shadow-md drop-shadow-sm focus:bg-green-300 transition-all duration-300'
          type="text" 
          name="journal" 
          value={journalEntry}
          placeholder='. . .'
          onChange={journalEntryText}
        />
        <input type="submit" value='Save'
          className='bg-green-500 px-3 py-1 rounded-e-lg shadow-md drop-shadow-sm hover:bg-green-800 hover:text-white transition-all duration-300'
        />
      </form>
    </div>
  )
}