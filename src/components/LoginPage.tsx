import {
  Button,
  PasswordInput,
  Space,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { StatusCodes } from "http-status-codes"
import { apiUri } from "../const";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { USER_ROLES, User } from "@ticket-monster/schemas";
import { zodResolver } from "mantine-form-zod-resolver";
import axios from "axios";
const loginPlease = async (
  username: string,
  password: string,
  navigate: NavigateFunction,
) => {
  let response;
  try {
    response = await axios.post(apiUri + "/api/login", {
      username: username,
      password: password,
    },{
      withCredentials:true
    });
  }
  catch (e) {
    alert("incorrect username or password");
    return;
  }
  if (response.status !== StatusCodes.OK) {
    alert("incorrect username or password");
    return;
  }
  if (username === USER_ROLES[0]) { 
    setTimeout(()=>navigate("AdminPage"),500) 
  }
  else{
    setTimeout(()=>navigate("userPanel"),500)
  }

};
const LoginPage = () => {
  const navigate = useNavigate();
  const background: string = "hsl(200,40%,80%)";
  const form = useForm({
    initialValues: { username: "", password: "" },
    validate: zodResolver(User),
  });
  return (
    <Stack ta="center" align="center" bg={background} h="100svh">
      <Title ta="center" w="100svw">
        Ticket Monster
      </Title>
      <Button
        mih="20px"
        ml="auto"
        w="max-content"
        onClick={() => {
          navigate("SignUp");
        }}
      >
        Don't have an account yet?
      </Button>

      <form
        onSubmit={form.onSubmit((values) => {
          loginPlease(values.username, values.password, navigate);
        })}
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
          label="Password"
          {...form.getInputProps("password")}
        />
        <Space h="xl" />
        <Button w="max-content" type="submit">
          Submit
        </Button>
      </form>
    </Stack>
  );
};
export default LoginPage;
