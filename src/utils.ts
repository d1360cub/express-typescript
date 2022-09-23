import { NewDiaryEntry, Visibility, Weather } from './types'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}

const parsedDate = (dateFromBody: any): string => {
  if (!isDate(dateFromBody) || !isString(dateFromBody)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromBody
}

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

const parsedWeather = (weatherFromBody: any): Weather => {
  if (!isString(weatherFromBody) || isWeather(weatherFromBody)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromBody
}

const parsedVisibility = (visibilityFromBody: any): Visibility => {
  if (!isString(visibilityFromBody) || isVisibility(visibilityFromBody)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromBody
}

const parsedComment = (commentFromBody: any): string => {
  if (!isString(commentFromBody)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromBody
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const parsedDiaryEntry = {
    date: parsedDate(object.date),
    weather: parsedWeather(object.weather),
    visibility: parsedVisibility(object.Visibility),
    comment: parsedComment(object.comment)
  }
  return parsedDiaryEntry
}

export default toNewDiaryEntry
