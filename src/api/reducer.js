let init = {
  links: ["usuarios", "contacto", "nosotros"],
}; //esta variable seria como el this.state = { }

let reducer = (prevState = init, action) => {
  switch (action.type) {
    default:
      return prevState;
  }
}; //cada case seria como un setState({})

export default reducer;
