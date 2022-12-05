interface User {
  id: number | undefined,
  name: string,
  email: string,
  password: string
}

interface UserLogin {
  email: string,
  password: string
}

interface ErrorMessage {
  sucess: boolean,
  message: string
}

export { User, UserLogin, ErrorMessage }
