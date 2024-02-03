import { atom } from 'jotai'

type UserType = {
  id: number
  name: string
  permission: string
}

const userAtom = atom<UserType | null>(null)
userAtom.debugLabel = 'userAtom'

export { userAtom }
