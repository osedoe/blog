import React, { FC, useState } from "react";

export const BlogContext = React.createContext<any>(null);

export interface Context {
  menu: {
    isMenuOpen: boolean;
    setIsMenuOpen: (state: boolean) => void;
  }
}

export const BlogProvider: FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const values: Context = {
    menu: { isMenuOpen, setIsMenuOpen },
  };

  return <BlogContext.Provider value={values}>
    {children}
  </BlogContext.Provider>;
};

BlogProvider.displayName = "Blog Provider";
