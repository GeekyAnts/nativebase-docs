---
id: modal
title: Modal
---

A Modal is a window overlaid on either the primary window or another dialog window. Content behind a modal dialog is **inert**, meaning that users cannot interact with it.

## Import

NativeBase exports Modal Compound component:

- `Modal`: The wrapper that provides context for its children.
- `Modal.Overlay`: The dimmed overlay behind the modal dialog.
- `Modal.Content`: The container for the modal dialog's content.
- `Modal.Header`: The header that labels the modal dialog.
- `Modal.Footer`: The footer that houses the modal actions.
- `Modal.Body`: The wrapper that houses the modal's main content.
- `Modal.CloseButton`: The button that closes the modal.

```jsx
import { Modal } from 'native-base';
```

## Basic

```SnackPlayer name=Modal%20Basic
import React from 'react';
import {
  Modal
  Button,
  Center,
  Input,
  NativeBaseProvider
} from 'native-base';

function ModalComponent () {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={setModalVisible}
        overlayVisible={true}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header _text={{ fontSize: '4xl', fontWeight: 'bold' }}>
            Hello World
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme="blue" mr={1}>
              Done
            </Button>
            <Button
              colorScheme="secondary"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Center>
        <Button
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Open Modal
        </Button>
      </Center>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <ModalComponent />
    </NativeBaseProvider>
  );
}
```

## Modal Sizes

You can pass `size` prop to NativeBase Modal , it can take `xs` , `sm`, `md`, `lg`, `xl`, `full` that maps to **40%**, **48%**, **60%**, **75%**, **90%** and **100%** respectively , or a string or a numerical width of the Modal.

```SnackPlayer name=Modal%20Sizes
import React from 'react';
import {
  Modal,
  Button,
  Center,
  Input,
  NativeBaseProvider
} from 'native-base';

function ModalComponent() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState('md');

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <Modal
        isCentered
        isOpen={modalVisible}
        onClose={setModalVisible}
        size={size}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header _text={{ fontSize: '4xl', fontWeight: 'bold' }}>
            Hello World
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa delectus!
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme="blue" mr={1} mb={1}>
              Save
            </Button>
            <Button
              colorScheme="secondary"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Center>
        <Button
          onPress={() => handleSizeClick('xs')}
          key={'xs'}
          m={4}
        >{`Open ${'xs'} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick('sm')}
          key={'sm'}
          m={4}
        >{`Open ${'sm'} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick('md')}
          key={'md'}
          m={4}
        >{`Open ${'md'} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick('lg')}
          key={'lg'}
          m={4}
        >{`Open ${'lg'} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick('xl')}
          key={'xl'}
          m={4}
        >{`Open ${'xl'} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick('full')}
          key={'full'}
          m={4}
        >{`Open ${'full'} Modal`}</Button>
      </Center>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <ModalComponent />
    </NativeBaseProvider>
  );
}
```

## intialFocusRef and finalFocusRef Example

```SnackPlayer name=Modal%20Refs
import React from 'react';
import {
  Modal,
  Button,
  Center,
  Input,
  NativeBaseProvider
} from 'native-base';

function ModalComponent () {
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Modal
        isCentered
        isOpen={modalVisible}
        onClose={setModalVisible}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header _text={{ fontSize: '4xl', fontWeight: 'bold' }}>
            Hello World
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            Accusamus?
            <Input mt={4} ref={initialRef} placeholder="First name" />
          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme="blue" mr={1}>
              Save
            </Button>
            <Button
              colorScheme="secondary"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        Open Modal
      </Button>
      <Input mt={4} ref={finalRef} placeholder="I'll receive focus on close" />
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <ModalComponent />
    </NativeBaseProvider>
  );
}
```

## Modal with avoidKeyboard

```SnackPlayer name=Modal%20avoidKeyboard
import React from 'react';
import {
  Modal,
  Button,
  Center,
  Input,
  NativeBaseProvider
} from 'native-base';

function ModalComponent () {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <Modal
        isCentered
        isOpen={modalVisible}
        onClose={setModalVisible}
        avoidKeyboard
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header _text={{ fontSize: '4xl', fontWeight: 'bold' }}>
            Hello World
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            Accusamus?
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme="blue" mr={1}>
              Save
            </Button>
            <Button
              colorScheme="secondary"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <VStack space={2}>
        <Button
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Open Modal
        </Button>
        <Text>
          Open modal and focus on the input element to see the effect.
        </Text>
      </VStack>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <ModalComponent />
    </NativeBaseProvider>
  );
}
```

> If you want a specifically aligned Modal, pass `justifyContent` and `alignItems` to Modal.

## Props

### Modal

| Name                | Type                                     | Description                                                                 | Default |
| ------------------- | ---------------------------------------- | --------------------------------------------------------------------------- | ------- |
| isOpen              | boolean                                  | If true, the modal will open.                                               | -       |
| onClose             | function                                 | Callback invoked to close the modal.                                        | -       |
| motionPreset        | fade, none, slide                        | The default animation or transition to apply to the modal.                  | -       |
| initialFocusRef     | React.ref                                | The least destructive action to get focus when dialog is open.              | -       |
| finalFocusRef       | React.ref                                | The least destructive action to get focus when dialog is closed. (ios only) | -       |
| size                | full, lg, md, number, sm, string, xl, xs | The content of the modal.                                                   | -       |
| closeOnOverlayClick | boolean                                  | If true, the modal will close when the overlay is clicked.                  | -       |
| id                  | string                                   | The top-level id to use for the modal and it's sub-components.              | -       |
| avoidKeyboard       | boolean                                  | If true, Modal will avoid keyboard to overlap.                              | -       |
| closeOnOverlayClick | boolean                                  | If true, clicking on overlay will close the modal.                          | -       |
| overlayVisible      | boolean                                  | To set the visibility the overlay.                                          | -       |
| overlayColor        | string                                   | To set the color of overlay.                                                | -       |

### Child **components**

- `Modal.Overlay`, `Modal.Header`, `Modal.Footer` and `Modal.Body` composes the `Box` component.
- `Modal.CloseButton` composes the `CloseButton`.
