import { createContext, useContext, useMemo, useState } from "react";

const initialState = {
  displaySidebar: false,
};

export const UIContext = createContext(initialState);

// UIContext.displayName = "UIContext";

export const UIProvider = ({ children }) => {
  const [state, setState] = useState({
    ...initialState,
  });

  const openSidebar = () => setState(() => ({ displaySidebar: true }));
  const closeSidebar = () => setState(() => ({ displaySidebar: false }));
  const toggleSidebar = () =>
    setState((prev) => ({ displaySidebar: !prev.displaySidebar }));
  // console.log(state);

  const value = {
    ...state,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext = ({ children }) => (
  <UIProvider>{children}</UIProvider>
);
// }) => <UIProvider >{children}</UIProvider>
