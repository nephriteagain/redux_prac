import { createSlice } from "@reduxjs/toolkit";

const journalList : string[] = []

const journalSlice = createSlice({
  name: 'journal',
  initialState: journalList,
  reducers: {
    addJournal: (state, action) => {
      return [action.payload, ...state]
    },
    editJournal: (state, action) => {
      const {journalIndex, edit} = action.payload
      const journalToEdit = state.find((journal, index) => index === journalIndex)
      if (journalToEdit) {
       state[journalIndex] = edit
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