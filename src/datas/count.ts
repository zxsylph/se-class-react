import { atom } from 'jotai'

const countAtom = atom<number>(0)
countAtom.debugLabel = 'countAtom'

export { countAtom }
