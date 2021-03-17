import React from 'react';
import { CodeComponent } from './CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';

const exampleCode = `
<Box width={72} bg="gray.50" shadow={4}>
  <Box>
    <AspectRatio ratio={16 / 9}>
      <Image
        source={{
          uri:
            'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
        }}
        alt="image"
      />
    </AspectRatio>
    <Center
      bg="red.500"
      _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
      position="absolute"
      bottom={0}
      px={2}
      py={1}
    >
      PHOTOS
    </Center>
    <Center
      p={1}
      rounded="full"
      bg="red.500"
      boxSize={10}
      position="absolute"
      right={0}
      m={2}
      _text={{
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 'xs',
      }}
    >
      27 MAR
    </Center>
  </Box>
  <Stack p={4} space={3}>
    <Stack space={2}>
      <Heading size="md">Life in the Garden City</Heading>
      <Heading size="sm" color="red.500" fontWeight="500">
        The Silicon Valley of India.
      </Heading>
    </Stack>
    <Text lineHeight={6} fontWeight={400}>
      Bengaluru (also called Bangalore) is the center of India's high-tech
      industry. The city is also known for its parks and nightlife.
    </Text>
    <HStack alignItems="center" space={4} justifyContent="space-between">
      <HStack alignItems="center">
        <Icon name="access-time" color="gray.500" />
        <Text ml={1} color="gray.500" fontWeight="500">
          6 mins ago
        </Text>
      </HStack>
      <HStack alignItems="center">
        <Icon name="ios-chatbubbles" type="Ionicons" color="gray.500" />
        <Text ml={1} color="gray.500" fontWeight="500">
          39 comments
        </Text>
      </HStack>
    </HStack>
  </Stack>
</Box>
`.trim();

export function Web() {
  const { isDarkTheme } = useThemeContext();
  const foldBg = !isDarkTheme ? 'bg-green-50' : 'bg-green-200';
  const [activePlatform, setActivePlatform] = React.useState('android');
  return (
    <section className={'relative ' + foldBg}>
      <div
        className={'absolute inset-0 pointer-events-none '}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center">
          <div
            className="flex-1 flex flex-col justify-center w-2 overflow-hidden rounded-lg"
            style={{ height: 420 }}
          >
            <CodeComponent code={exampleCode} />
          </div>
          <div className="flex items-center">
            <img
              className={`shadow-sm rounded-${
                activePlatform === 'web' ? 'lg' : '3xl'
              }`}
              style={{ zIndex: 1 }}
              src={`/img/home/main-${activePlatform}.png`}
              width="223"
              height="478"
              alt="NativeBase Works on Mobile and Web"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center p-12">
            <h1 className="h2 mb-4 text-4xl text-gray-800">
              Now Available for both Mobile & Web
            </h1>
            <p className="text-xl text-gray-800">
              Powered by React Native Web. Build consistent UIs across Web,
              Android and iOS with ease.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <ul className="list-none flex justify-center text-sm font-medium mb-0 pl-0">
            <li className="m-2">
              <button
                className={
                  activePlatform === 'android'
                    ? 'inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out  border-purple-300 border-2 border-solid bg-purple-400 text-gray-100 hover:bg-purple-800'
                    : 'inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out  border-purple-300 border-2 border-solid text-purple-400'
                }
                href="#0"
                onClick={() => {
                  setActivePlatform('android');
                }}
              >
                Android
              </button>
            </li>
            <li className="m-2">
              <button
                className={
                  activePlatform === 'ios'
                    ? 'inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out  border-purple-300 border-2 border-solid bg-purple-400 text-gray-100 hover:bg-purple-800'
                    : 'inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out  border-purple-300 border-2 border-solid text-purple-400'
                }
                href="#0"
                onClick={() => {
                  setActivePlatform('ios');
                }}
              >
                iOS
              </button>
            </li>
            <li className="m-2">
              <button
                className={
                  activePlatform === 'web'
                    ? 'inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out  border-purple-300 border-2 border-solid bg-purple-400 text-gray-100 hover:bg-purple-800'
                    : 'inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out  border-purple-300 border-2 border-solid text-purple-400'
                }
                href="#0"
                onClick={() => {
                  setActivePlatform('web');
                }}
              >
                Web
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
