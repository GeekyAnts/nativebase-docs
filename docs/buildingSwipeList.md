---
id: buildingSwipeList
title: Swipe List
---

SwipeListView is a vertical ListView with rows that swipe open and closed. Handles default native behavior such as closing rows when ListView is scrolled or when other rows are opened.

## Example

Here is an example to show how easily and quickly we can use [react-native-swipe-list](https://www.npmjs.com/package/react-native-swipe-list-view) in NativeBase.

```SnackPlayer name=SwipeList dependencies=react-native-swipe-list-view
import React, { useState } from 'react';
import {
    Dimensions,
    TouchableOpacity,
    View,
} from 'react-native';

import {NativeBaseProvider,Box, Text,Pressable,Heading,IconButton,Icon, HStack } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons,Ionicons } from '@expo/vector-icons';

export default function App() {
    const [mode, setMode] = useState('Basic');

    return (
      <NativeBaseProvider >
        <Box textAlign="center" bg= 'white' flex= {1} safeAreaTop>
          <Heading my={6} textAlign="center">Swipe list Example</Heading>
            <Basic />
        </Box>
        </NativeBaseProvider>
    );
}


function Basic() {
    const [listData, setListData] = useState(
        Array(20)
            .fill('')
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
    );

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = data => (
        <Box >
            <Pressable
                onPress={() => console.log('You touched me')}
                alignItems= 'center'
                bg="white"
                borderBottomColor= 'trueGray.200'
                borderBottomWidth= {1}
                justifyContent= 'center'
                height= {50}
                underlayColor={'#AAA'}
                _pressed={{
                  bg:'trueGray.200'
                }}
                py={8}
            >
                  <Text >I am {data.item.text} in a SwipeListView</Text>
            </Pressable>
            </Box>
    );

    const renderHiddenItem = (data, rowMap) => (
        <HStack
        flex= {1}
        pl={2}
        >
            <Text alignSelf="center">Left</Text>
            <Pressable
             px={4}
              ml='auto'
              cursor="pointer"
              bg="dark.500"
              justifyContent="center"
              onPress={() => closeRow(rowMap, data.item.key)}
              _pressed={{
                  opacity: 0.5
                }}
              >
                <Icon as={<Ionicons name="close"  />} color='white'/>
            </Pressable>
            <Pressable
              px={4}
              cursor="pointer"
              bg="red.500"
              justifyContent="center"
              onPress={() => deleteRow(rowMap, data.item.key)}
              _pressed={{
                  opacity: 0.5
                }}
              >
                <Icon as={<MaterialIcons name="delete"/>} color="white" />
           </Pressable>
        </HStack>
    );

    return (
        <Box  bg= 'white' safeArea
        flex= {1}>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={45}
                rightOpenValue={-130}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
            />
        </Box>
    );
}
```
