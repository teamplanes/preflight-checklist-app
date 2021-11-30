import type {NextPage} from 'next';
import Head from 'next/head';
import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import {CheckIcon, DeleteIcon} from '@chakra-ui/icons';
import {datatype, lorem, date} from 'faker';

const INITIAL_TASKS = Array.from({length: 10}, () => ({
  id: datatype.uuid(),
  title: lorem.sentence(),
  date: date.past(),
  done: datatype.boolean(),
}));

interface TaskListItemProps {
  title: string;
}

const TaskListItem: React.FC<TaskListItemProps> = (props) => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      layerStyle="card"
      flex={1}
      marginTop={2}
    >
      <Flex flex={1}>{props.title}</Flex>
      <ButtonGroup size="sm" isAttached variant="outline">
        <IconButton
          mr="-px"
          variant="solid"
          colorScheme="green"
          aria-label="Mark as Done"
          icon={<CheckIcon />}
        />
        <IconButton aria-label="Delete Task" icon={<DeleteIcon />} />
      </ButtonGroup>
    </Flex>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AddTaskFieldProps {
  // TODO
}

const AddTaskField: React.FC<AddTaskFieldProps> = () => {
  const handleSubmit: React.FormEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
  };
  return (
    <Flex as="form" onSubmit={handleSubmit} layerStyle="card">
      <InputGroup size="md">
        <Input pr="4.5rem" placeholder="Add task..." />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" type="submit">
            Add
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>✈️ Planes Coding Challenge</title>
      </Head>
      <Flex minH="100vh" bg="gray.100">
        <Container py={5} maxW="container.md">
          <Flex mb={8} textStyle="h1">
            Planes Pre-flight Checklist 🛫
          </Flex>
          <AddTaskField />
          <Divider my={4} />
          <TaskListItem title={INITIAL_TASKS[0].title} />
        </Container>
      </Flex>
    </>
  );
};

export default Home;
