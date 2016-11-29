export const initialState = {
  list: [],
  startingUp: true,
  listing: false,
  offset: 0,
  canList: false,
  creating: false,
  createError: null,
  lastCreated: null,
  listError: null,
}

export default function demands(state = initialState, action) {
  switch (action.type) {
    case 'DEMANDS_LIST_REQUEST':
      return {
        ...state,
        listing: true,
        listError: null,
      }
    case 'DEMANDS_LIST_SUCCESS':
      return {
        ...state,
        list: state.list.concat(action.list),
        listing: false,
        offset: state.offset + action.list.length,
        canList: (action.list.length >= 10 ? true : false),
        startingUp: false,
        listError: null,
      }
    case 'DEMANDS_LIST_FAILURE':
      return {
        ...state,
        listing: false,
        startingUp: false,
        listError: action.error,
      }
    case 'DEMANDS_REFUSE_REQUEST':
      return {
        ...state,
        list: state.list.filter(demand => action.demand.id !== demand.id),
        offset: state.offset - 1,
      }
    case 'DEMANDS_FLAG_REQUEST':
      return {
        ...state,
        list: state.list.filter(demand => action.demand.id !== demand.id),
        offset: state.offset - 1,
      }
    case 'DEMANDS_CREATE_REQUEST':
      return {
        ...state,
        lastCreated: null,
        creating: true,
        createError: null,
      }
    case 'DEMANDS_CREATE_SUCCESS':
      return {
        ...state,
        lastCreated: action.demand,
        creating: false,
        createError: null,
      }
    case 'DEMANDS_CREATE_FAILURE':
      return {
        ...state,
        creating: false,
        createError: action.error,
      }
    case 'TRANSACTIONS_CREATE_REQUEST':
      return {
        ...state,
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return {...demand, creatingTransaction: true}
          } else {
            return demand
          }
        }),
      }
    case 'TRANSACTIONS_CREATE_SUCCESS':
      return {
        ...state,
        list: state.list.filter(demand => action.transaction.demand.id !== demand.id),
        offset: state.offset - 1,
      }
    case 'TRANSACTIONS_CREATE_FAILURE':
      return {
        ...state,
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return {...demand, creatingTransaction: false}
          } else {
            return demand
          }
        }),
      }
    case 'UNREAD_NOTIFICATIONS_LIST_SUCCESS':
      if (state.startingUp)
        return state
      const newDemands = action.list.filter(notification => (
        notification.demand && notification.demand.state === 'notifying' && state.list.map(demand => demand.id).indexOf(notification.demand.id) < 0
      )).map(notification => notification.demand)
      return {
        ...state,
        list: newDemands.concat(state.list),
        offset: state.offset + newDemands.length,
      }
    case 'DASHBOARD_REFRESH':
      return initialState
    case 'LOCATION_SET_LOCATION_SUCCESS':
      return initialState
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
