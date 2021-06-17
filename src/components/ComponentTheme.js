import React from 'react';
import { Box, Heading, Link, Text, VStack } from 'native-base';
import CodeBlock from '@theme/CodeBlock';
import { REPO_BRANCH, REPO_LINK } from '../../constants';
const url = REPO_LINK + '/tree/' + REPO_BRANCH;

const extendComponentInstruction = (name) => {
  return `
import { extendTheme, NativeBaseProvider } from "native-base";

const theme = extendTheme({
    components: {
        ${name}: {
            baseStyle: {},
            defaultProps: {},
            variants: {},
            sizes: {},
        }
    } 
});

function MyApp() {
    return (
        <NativeBaseProvider theme={theme}>
            {/* Rest of the app goes here */}
        </NativeBaseProvider>
    )
}
`;
};

export function ComponentTheme({ name }) {
  return (
    <VStack
      space={4}
      style={{
        '--ifm-link-hover-decoration': 'none',
      }}
    >
      <Box rounded="md">
        <Text>
          NativeBase ships with a default theme for each component.{' '}
          <Link
            _text={{ textDecorationLine: 'none' }}
            href={url + '/' + 'src/theme/components/' + name + '.ts'}
            isExternal
          >
            <Text
              borderBottomWidth="2px"
              _hover={{
                bg: 'secondary.200',
                color: 'black',
                borderColor: 'gray.900',
              }}
              borderStyle="dashed"
              rounded="md"
              p={1}
              borderColor="secondary.300"
            >
              Checkout the default theme of {name}
            </Text>
          </Link>
        </Text>
      </Box>
      <Heading size="sm">
        We can easily extend the {name} component using extendTheme function as
        shown below.
      </Heading>
      <CodeBlock className="language-jsx">
        {extendComponentInstruction(
          name[0].toUpperCase() + name.slice(1, name.length)
        )}
      </CodeBlock>
      <Link
        _text={{ textDecorationLine: 'none' }}
        href={'customizingComponents'}
      >
        <Text
          borderBottomWidth="2px"
          _hover={{
            bg: 'secondary.200',
            color: 'black',
            borderColor: 'gray.900',
          }}
          borderStyle="dashed"
          rounded="md"
          p={1}
          borderColor="secondary.300"
          fontWeight="bold"
        >
          Read more about extending component theme here.
        </Text>
      </Link>
    </VStack>
  );
}
