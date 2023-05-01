import { createSlice } from "@reduxjs/toolkit";

interface journalList {
  journal: string,
  date: string
}

const journalList : journalList[] = []

const journalSlice = createSlice({
  name: 'journal',
  initialState: journalList,
  reducers: {
    addJournal: (state, action) => {
      const date : string = new Date(Date.now()).toDateString()
      return [
        {
          journal: action.payload,
          date: date
        }
        , ...state
      ]
    },
    editJournal: (state, action) => {
      const {journalIndex, edit} = action.payload
      const journalToEdit = state.find((_, index) => index === journalIndex)
      const date : string = new Date(Date.now()).toDateString()
      if (journalToEdit) {
       state[journalIndex] = {journal: edit, date: date}
      }
    },
    deleteJournal: (state, action) => {
      const journalIndex = action.payload
      state.splice(journalIndex, 1)
    }
  }
})

export const { addJournal, editJournal, deleteJournal } = journalSlice.actions

export default journalSlice.reducer