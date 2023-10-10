declare namespace Express {
  export interface Request {
    userId: string,
    teste: string
  }

  export interface Response {
    responser: (
      status: number,
      message: string,
      data: any,
      error: any,
      type: string
    ) => void
  }

}
