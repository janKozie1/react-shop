import React from "react";

const NavContext = React.createContext({
  isToggled: false,
  setToggle: () => {}
});

export default NavContext;
