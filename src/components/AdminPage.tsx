import { Button,Stack,Space,PasswordInput,TextInput } from "@mantine/core";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { apiUri } from "../const";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { logOutPlase } from "../utils/utils";
type userInfo = {
  username: string,
  role: "admin" | "manager" | "worker";
}

const getUsers = async (set: React.Dispatch<React.SetStateAction<userInfo[]>>) => {
  let response;
  setTimeout(async()=>{
    try {
   
    response = await axios.get(apiUri + "/api/users",{
      withCredentials:true
    })}
    catch (e) {
      set([{username: "error in fetching data",role: "worker" }])
      return;
    }
    set(response.data);
  },500);
  }
  
  





const AdminPage = () => {
  const background = "hsl(100,50%,50%)"
  const [users , setUsers] = useState<userInfo[]>([]) 
  const navigate = useNavigate();
  const form = useForm({ 
    initialValues: { username: "", newRole: "" },
   })
  useEffect(() => {
    getUsers(setUsers);
  }, [])

  return (
    <>
      <Button
        onClick={() => {
        logOutPlase(navigate);  
        }}
      >
        logout
      </Button>

      <div>Admin</div>
      {
        users.map((user) =>

          <div key={user.username}>{JSON.stringify(user)}</div>
        )
      }
      <Stack ta="center" align="center" bg={background} h="100svh">
      
      <form
        
      >
        <TextInput
          required
          w="30svw"
          ta="center"
          label="Username"
          {...form.getInputProps("username")}
        />
        <PasswordInput
          required
          w="30svw"
          ta="center"
          label="new-role"
          {...form.getInputProps("newRole")}
        />
        <Space h="xl" />
        <Button w="max-content" type="submit">
          Submit
        </Button>
      </form>
    </Stack>


    </>
  )
}
export default AdminPage;
