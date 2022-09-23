import express from 'express'
import { getAllEntrys, getOneEntryByid } from '../services/diary'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(getAllEntrys())
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  res.send(getOneEntryByid(id))
})

router.post('/', (req, res) => {
  try {
    const { date, weather, visibility, comment } = req.body
    const newEntry = {
      date,
      weather,
      visibility,
      comment
    }
    res.send(toNewDiaryEntry(newEntry))
  } catch (error) {
    res.status(400).send(error)
  }
})

export default router
