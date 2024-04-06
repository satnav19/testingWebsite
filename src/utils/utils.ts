import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { apiUri } from "../const";

export const logOutPlase = async (navigate: NavigateFunction) =>{
    await axios.post(apiUri+ "/api/logout");
    console.log(document.cookie);
    navigate("/");
}