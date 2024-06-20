import { createContext } from "react";

const UserContext = createContext({
  userName: "anon",
});

export default UserContext;
