import React from "react";

const UxContext = React.createContext({
  sideNavVisible: false,
  bgFadeVisible:false,
  initialLoading:true,
  categories:[],
});

export default UxContext;
