//LOGIN
//REGISTER
//LOGOUT

export const UserReducer = (state, action) => {

  switch (action.type) {
    case 'LOGIN':
      return {...state, ...action.payload}
    case 'REGISTER':
      return {...state, isAuthenticated: true, user: {...action.payload}}
    case 'LOGOUT':
      return {...state, isAuthenticated: false, user: null}
    default:
      //haz algo por default
  }

}



// action : {
//   type
//   payload
// }