export class Video {
  readonly quality: 'sd' | 'hd'
  readonly fileType: 'video/mp4'
  readonly width: number
  readonly height: number
  readonly fps: number
  readonly link: string

  constructor (values: { quality: 'hd', fileType: 'video/mp4', width: number, height: number }) {
    this.quality = values.quality
    this.fileType = values.fileType
    this.width = values.width
    this.height = values.height
  }
}
