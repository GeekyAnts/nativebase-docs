---
id: modal
title: Modal
---

The Avatar component is used to represent a user, and displays the profile picture, initials or fallback icon.

## Import

NativeBase exports 7 modal-related components:

- `Modal`: The wrapper that provides context for its children
- `ModalOverlay`: The dimmed overlay behind the modal dialog
- `ModalContent`: The container for the modal dialog's content
- `ModalHeader`: The header that labels the modal dialog
- `ModalFooter`: The footer that houses the modal actions
- `ModalBody`: The wrapper that houses the modal's main content
- `ModalCloseButton`: The button that closes the modal.

```jsx
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "native-base";
```

## Usage

```SnackPlayer name=Modal%20Usage
import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Center,
  Input,
  NativeBaseProvider
} from 'native-base';

function ModalComponent () {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Center>
      <Modal isCentered isOpen={modalVisible} onClose={setModalVisible}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader fontSize="4xl" fontWeight="bold">
            Hello World
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            Accusamus?
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={1}>
              Save
            </Button>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        Open Modal
      </Button>
    </Center>
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

```SnackPlayer name=Modal%20Sizes
import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
    <Center>
      <Modal
        isCentered
        isOpen={modalVisible}
        onClose={setModalVisible}
        size={size}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader fontSize="4xl" fontWeight="bold">
            Hello World
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            Accusamus?
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={1} mb={1}>
              Save
            </Button>
            <Button
              colorScheme="red"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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

```SnackPlayer name=Modal%20intialFocusRef and finalFocusRef
import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
    <Center>
      <Modal
        isCentered
        isOpen={modalVisible}
        onClose={setModalVisible}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader fontSize="4xl" fontWeight="bold">
            Hello World
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            Accusamus?
            <Input mt={4} ref={initialRef} placeholder="First name" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={1}>
              Save
            </Button>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        Open Modal
      </Button>
      <Input mt={4} ref={finalRef} placeholder="I'll receive focus on close" />
    </Center>
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

> If you want a specifically aligned Modal pass `justifyContent` and `alignItems` to Modal.

## Props

### Modal

| Name                | Type                                     | Description                                                                 | Default |
| ------------------- | ---------------------------------------- | --------------------------------------------------------------------------- | ------- |
| isOpen              | boolean                                  | If true, the modal will open.                                               | -       |
| isCentered          | boolean                                  | If true, the Modal will be centered on screen.                              | -       |
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
| Component           |                                          |                                                                             |         |

### Child **components**

- `ModalOverlay`, `ModalHeader`, `ModalFooter` and `ModalBody` composes `Box` component
- `ModalCloseButton` composes `CloseButton`
