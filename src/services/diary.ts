import diaryData from './diaries.json'
import { DiaryEntry, NewDiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getAllEntrys = (): DiaryEntry[] => {
  return diaries
}

export const getOneEntryByid = (id: number): DiaryEntry | undefined => {
  const singleEntry = diaries.find(diaryEntry => diaryEntry.id === id)
  return singleEntry
}
export const createEntry = (newEntry: NewDiaryEntry): DiaryEntry => {
  const newId = diaries.length + 1
  const createdEntry = {
    id: newId,
    ...newEntry
  }
  diaries.push(createdEntry)
  return createdEntry
}
