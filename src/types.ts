export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visibility {
  Poor = 'poor',
  Great = 'great',
  Good = 'good',
  Ok = 'ok'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
