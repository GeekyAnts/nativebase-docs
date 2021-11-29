import Link from "next/link";
import { HStack, Button, AddIcon, IconButton, SunIcon } from "native-base";
import NativebaseLogo from "./NativebaseLogo";

export default function Navbar(props: any) {
  const { sidebar } = props;

  return (
    <HStack
      w="100%"
      borderBottomWidth="1"
      borderColor="gray.100"
      px="6"
      h="16"
      justifyContent="space-between"
    >
      <NativebaseLogo />
      <HStack space="2" alignItems="center">
        <Link href="#">
          <Button
            variant="unstyled"
            _text={{
              color: "coolGray.400",
              fontWeight: "normal",
            }}
            _hover={{
              // @ts-ignore
              _text: {
                borderBottomWidth: "1px",
                borderBottomColor: "coolGray.200",
              },
            }}
          >
            Documentation
          </Button>
        </Link>
        <Link href="#">
          <Button
            variant="unstyled"
            _text={{
              color: "coolGray.400",
              fontWeight: "normal",
            }}
            _hover={{
              // @ts-ignore
              _text: {
                borderBottomWidth: "1px",
                borderBottomColor: "coolGray.200",
              },
            }}
          >
            Case Studies
          </Button>
        </Link>
        <Link href="#">
          <Button
            variant="unstyled"
            _text={{
              color: "coolGray.400",
              fontWeight: "normal",
            }}
            _hover={{
              // @ts-ignore
              _text: {
                borderBottomWidth: "1px",
                borderBottomColor: "coolGray.200",
              },
            }}
            rightIcon={<AddIcon size="3" />}
          >
            Resources
          </Button>
        </Link>
        <IconButton
          _icon={{ size: "5", color: "coolGray.500" }}
          icon={<AddIcon />}
        />
      </HStack>
    </HStack>
  );
}
