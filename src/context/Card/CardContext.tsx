import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { CardProp } from '../../components/Card'
import { appendCard, deleteCard, editCard } from '../../server/cardApi'

export type ServerCardProps = Omit<CardProp, 'setModalIsOpen' | 'size'> & {
  createAt: number
}

export type CardDispatchAddType = { id: string; card: ServerCardProps }
type CardContextProps = Record<string, ServerCardProps>
type AddPayload = CardDispatchAddType
type Action =
  | { type: 'ADD'; payload: AddPayload }
  | { type: 'INIT'; payload: CardContextProps }
  | { type: 'DELETE'; payload: { cardId: string } }
  | { type: 'EDIT'; payload: AddPayload }

type CardDispatcher = Dispatch<Action>

export const cardContext = createContext<CardContextProps | undefined>(
  undefined
)
export const cardDispatcherContext = createContext<CardDispatcher | undefined>(
  undefined
)

function cardReducer(
  state: CardContextProps,
  action: Action
): CardContextProps {
  const prevState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'INIT':
      return action.payload

    case 'ADD':
      appendCard(action.payload)
      prevState[action.payload.id] = action.payload.card

      return prevState

    case 'DELETE':
      deleteCard(action.payload.cardId)
      delete prevState[action.payload.cardId]
      return prevState

    case 'EDIT':
      editCard(action.payload)
      prevState[action.payload.id] = action.payload.card
      return prevState
  }
}

export default function CardContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [state, dispatch] = useReducer(cardReducer, {})

  return (
    <cardDispatcherContext.Provider value={dispatch}>
      <cardContext.Provider value={state}>{children}</cardContext.Provider>
    </cardDispatcherContext.Provider>
  )
}
