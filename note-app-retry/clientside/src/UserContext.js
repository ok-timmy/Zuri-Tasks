const { createContext, useState } = require("react");

export const UserContext = createContext({name: ""}  );

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const login = (data) => {
        setUser((user) => (data));
      };
      const logout = () => {
        localStorage.removeItem('user');
        setUser({});
      };
    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  }

  export default UserProvider