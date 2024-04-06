import {
  Space,
  Button,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { User } from "@ticket-monster/schemas";
import { zodResolver } from "mantine-form-zod-resolver";
const signUpPlease = (
  username: string,
  password: string,
  navigate: NavigateFunction,
) => {
  console.log(`Username is ${username}\n Password is ${password}`);
  /// change so it depends on users role
  navigate("/");
};
const signUpPage = () => {
  const navigate = useNavigate();
  const background: string = "hsl(150,40%,80%)";
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
        ml="auto"
        w="max-content"
        onClick={() => {
          navigate("/");
        }}
      >
        Have an account already?
      </Button>

      <form
        onSubmit={form.onSubmit((values) => {
          signUpPlease(values.username, values.password, navigate);
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
export default signUpPage;
