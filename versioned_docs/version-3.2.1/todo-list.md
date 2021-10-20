---
id: todo-example
title: Todo-List
---

A simple To Do App made using NativeBase 3.0.

```SnackPlayer name=TodoList%20Examples
import React from 'react';
import {
  Input,
  Button,
  IconButton,
  Checkbox,
  Text,
  VStack,
  HStack,
  Heading,
  Icon,
  Center,
  Box,
  NativeBaseProvider,
} from 'native-base';
import { FontAwesome5, Feather, Entypo } from '@expo/vector-icons';

export default function () {
  const instState = [
    { title: 'Code', isCompleted: true },
    { title: 'Meeting with team at 9', isCompleted: false },
    { title: 'Check Emails', isCompleted: false },
    { title: 'Write an article', isCompleted: false },
  ];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState('');
  const addItem = (title: string) => {
   if(title) setList([
      ...list,
      {
        title: title,
        isCompleted: false,
      },
    ]);
  };
  const handleDelete = (index: number) => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };
  const handleStatusChange = (index: number) => {
    const temp = list.map((item, itemI) =>
      itemI !== index
        ? item
        : {
            ...item,
            isCompleted: !item.isCompleted,
          }
    );
    setList(temp);
  };
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>
          <Heading mb="5">Wednesday</Heading>
          <VStack space={4}>
            <HStack space={2}>
              <Input
                flex={1}
                onChangeText={(v) => setInputValue(v)}
                value={inputValue}
                placeholder="Add Task"
              />
              <IconButton
                borderRadius="sm"
                variant="solid"
                icon={
                  <Icon
                    as={Feather}
                    name="plus"
                    size="sm"
                    color="warmGray.50"
                  />
                }
                onPress={() => {
                  addItem(inputValue);
                  setInputValue('');
                }}
              />
            </HStack>
            <VStack space={2}>
              {list.map((item, itemI) => (
                <HStack
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  key={item.title + itemI.toString()}>
                  <Checkbox
                    isChecked={item.isCompleted}
                    onChange={() => handleStatusChange(itemI)}
                    value={item.title}>
                    <Text
                      mx="2"
                      strikeThrough={item.isCompleted}
                      _light={{
                        color: item.isCompleted ? 'gray.400' : 'coolGray.800',
                      }}
                      _dark={{
                        color: item.isCompleted ? 'gray.400' : 'coolGray.50',
                      }}>
                      {item.title}
                    </Text>
                  </Checkbox>
                  <IconButton
                    size="sm"
                    colorScheme="trueGray"
                    icon={
                      <Icon
                        as={Entypo}
                        name="minus"
                        size="xs"
                        color="trueGray.400"
                      />
                    }
                    onPress={() => handleDelete(itemI)}
                  />
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

```
