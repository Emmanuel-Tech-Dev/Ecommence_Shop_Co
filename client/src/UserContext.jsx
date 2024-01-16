import { useState  , createContext} from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
 
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
   const [data , setData] = useState([])

    return (
      <UserContext.Provider
        value={{ userData, setUserData, isLoading, setIsLoading ,data , setData }}
      >
        {children}
      </UserContext.Provider>
    );
}