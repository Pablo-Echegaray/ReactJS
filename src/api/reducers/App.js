let init = {
  links: ["usuarios", "contacto", "nosotros"],
};

let AppReducer = (prevState = init, action) => {
  switch (action.type) {
    default:
      return prevState;
  }
};

export default AppReducer;
