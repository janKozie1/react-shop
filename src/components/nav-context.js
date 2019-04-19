import React from "react";

// set the defaults
const NavContext = React.createContext({
  isToggled: false,
  setToggle: () => {}
});

export default NavContext;
