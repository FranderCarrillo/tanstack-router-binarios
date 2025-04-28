export interface User {
    id: number
    email: string
    password: string
    name: string
    role: string
    avatar: string
  }

export const UserInitialState={
    id: 0,
    email: '',
    password: '',
    name: '',
    role: '',
    avatar: ''
}