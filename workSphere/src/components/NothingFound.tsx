import { Button, Card, Center, Group, Text } from "@mantine/core";
import { useNavigate } from "react-router";
import PagenotFound from "../assets/pagenotfound.svg";

const NothingFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Center w={"100%"}>
        <Card shadow="sm" padding="lg" radius="md" withBorder w={"80%"}>
          <Card.Section>
            <Center w={"100%"}>
              <img
                src={PagenotFound}
                width={300}
                height={300}
                className="logo"
                alt="Vite logo"
              />
            </Center>
          </Card.Section>
          <Card.Section>
            <Group justify="space-between" m="md">
              <Text fw={500}> Something is not right...</Text>
            </Group>
          </Card.Section>

          <Text size="sm" c="dimmed">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>

          <Button
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            onClick={() => navigate("/", { replace: true })}
          >
            Back to HomePage
          </Button>
        </Card>
      </Center>

      <div></div>
    </div>
  );
};

export default NothingFound;
