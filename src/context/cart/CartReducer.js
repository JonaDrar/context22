

export const CartReducer = (state, action) => {

  switch (action.type) {
    case 'AGREGAR':
      return {...state, cantidad: state.cantidad + 1 }
    case 'RESTAR':
      return {...state, cantidad: state.cantidad - 1 }
    case 'VACIAR':
      return { cantidad: 0 }
    default:
      return state
  }

}