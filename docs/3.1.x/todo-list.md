---
id: todo-example
title: Todo-List
---

A simple To Do App made using NativeBase 3.0.

```jsx isLive=true
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
  NativeBaseProvider,
} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';

export function Example() {
  const instState = [
    { title: 'code', isCompleted: true },
    { title: 'sleep', isCompleted: false },
    { title: 'repeat', isCompleted: false },
  ];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState('');
  const addItem = (title) => {
    setList([
      ...list,
      {
        title: title,
        isCompleted: false,
      },
    ]);
  };
  const handleDelete = (index) => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };
  const handleStatusChange = (index) => {
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
        <VStack space={4} flex={1} w="90%" mt={4}>
          <Heading color="emerald.400">Todo App</Heading>
          <Input
            variant="filled"
            InputRightElement={
              <IconButton
                icon={<Icon as={FontAwesome5} name="plus" size={4} />}
                colorScheme="emerald"
                ml={1}
                onPress={() => {
                  addItem(inputValue);
                  setInputValue('');
                }}
                mr={1}
              />
            }
            onChangeText={(v) => setInputValue(v)}
            value={inputValue}
            placeholder="Add Item"
          />
          <VStack>
            {list.map((item, itemI) => (
              <HStack
                w="100%"
                justifyContent="space-between"
                alignItems="center"
                key={item.title + itemI.toString()}
              >
                <Checkbox
                  colorScheme="emerald"
                  isChecked={item.isCompleted}
                  onChange={() => handleStatusChange(itemI)}
                  value={item.title}
                >
                  <Text mx={2} strikeThrough={item.isCompleted}>
                    {item.title}
                  </Text>
                </Checkbox>
                <IconButton
                  colorScheme="emerald"
                  icon={<Icon as={FontAwesome5} name="trash" size={5} />}
                  onPress={() => handleDelete(itemI)}
                />
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
```
