import { Button } from "@mantine/core";
import axios from "axios";

import { NavigateFunction, useNavigate } from "react-router-dom";
import { apiUri } from "../const";
import { useEffect, useState } from "react";
import { logOutPlase } from "../utils/utils";




const getUserData = async (setUserData:React.Dispatch<React.SetStateAction<string>>, setValid : React.Dispatch<React.SetStateAction<boolean>>,navigate: NavigateFunction) => {
  console.log(document.cookie);
  let response;
  try {
    response = await axios.get(apiUri + "/api/myinfo", {
      withCredentials: true,/// should this be true ????????, seems to fix a problem, but unsure

    });

  } catch (e) {
    await routeUser(false,navigate);
    return ;
  }

  setUserData(JSON.stringify(response.data));
  setValid(true);
  await routeUser(true,navigate);
};
const routeUser = async (valid: boolean, navigate: NavigateFunction)=>{
  if(!valid){
    navigate("/");
  }
}
const UserPanelPage = () => {
  const [valid, setValid] = useState(false);
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getUserData(setUserData,setValid,navigate)
  }, [])

  return (
    <>
      
      
      <div>{userData}</div>
      <Button
        onClick={()=>{
          logOutPlase(navigate);
        }}>
        log out
      </Button>
          <div>{valid}</div>

    </>
  )
}
export default UserPanelPage;
