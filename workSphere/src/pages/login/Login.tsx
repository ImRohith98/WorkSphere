import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { useNavigate } from "react-router";
import { useAuth } from "../../Routes/Authcontext";
import classes from "./Login.module.css";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      password: "",
      email: "",
      checkbox: true,
    },
    validate: {
      email: isEmail("Invalid email"),
      password: (value) => (value.length < 8 ? "Invalid password" : null),
    },
  });
  const handleLogin = () => {
    login({
      id: "asdfgakdhcvbwiev",
      name: form.getValues().email,
      role: "admin",
      checked: form.getValues().checkbox,
    });

    navigate("/", { replace: true });
  };

  return (
    <div>
      <Container size={520} my={150}>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>

        <Text className={classes.subtitle}>
          Do not have an account yet? <Anchor>Create account</Anchor>
        </Text>

        <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
          <form onSubmit={form.onSubmit(() => handleLogin())}>
            <TextInput
              label="Email"
              placeholder="you@wolf.dev"
              required
              radius="md"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              radius="md"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
            <Group justify="space-between" mt="lg">
              <Checkbox
                label="Remember me"
                key={form.key("checkbox")}
                {...form.getInputProps("checkbox")}
              />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button type="submit" fullWidth mt="xl" radius="md">
              Sign in
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
