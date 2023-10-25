import { useState  , createContext} from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
 
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

 
    return (
      <UserContext.Provider
        value={{ userData, setUserData, isLoading, setIsLoading }}
      >
        {children}
      </UserContext.Provider>
    );
}