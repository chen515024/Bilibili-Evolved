export enum PreviewTimerKeyMap {
  store = 'preview-timer-data',
}

export interface PreviewTimeItemInstance {
  mid: string
  aid: string
  title: string
  coverUrl: string
  previewTime: number
  createDate: number
  up: {
    uid: number
    name: string
    faceUrl: string
  }
}
