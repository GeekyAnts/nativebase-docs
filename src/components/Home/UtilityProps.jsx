import React from 'react';
import { CodeComponent } from './CodeComponent';

const exampleCode = `
<Box width={80} p={5} rounded="xl" shadow={4}>
  <Stack space={6}>
    <Avatar
      size={'sm'}
      source={{
        uri:
          'https://i.pinimg.com/originals/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg',
      }}
    />
    <Stack space={3}>
      <Heading size="lg" color="blueGray.700">
        Dressing room
      </Heading>
      <Text color="blueGray.500" fontWeight="medium" fontSize="xs">
        Design the new dressing room for the upcoming tour.
      </Text>
    </Stack>
    <HStack justifyContent="space-between" alignItems="flex-end">
      <Stack space={3}>
        <HStack space={3} alignItems="center">
          <Icon
            name="grid"
            type="MaterialCommunityIcons"
            color="blueGray.700"
          />
          <Text fontWeight="medium" color="blueGray.500">
            Task: Commercial project
          </Text>
        </HStack>
        <HStack space={3} alignItems="center">
          <Icon
            name="calendar"
            type="MaterialCommunityIcons"
            color="blueGray.700"
          />
          <Text color="blueGray.500" fontWeight="medium">
            Date: 10.04.2021
          </Text>
        </HStack>
      </Stack>
      <Avatar.Group size="sm" spacing={-3}>
        <Avatar
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
          }}
        >
          AK
        </Avatar>
        <Avatar
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
          }}
        >
          RS
        </Avatar>
        <Avatar
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
          }}
        >
          MR
        </Avatar>
      </Avatar.Group>
    </HStack>
  </Stack>
  <HStack
    position="absolute"
    top={3}
    right={3}
    space={2}
    alignItems="center"
  >
    <Icon
      name="star"
      type="SimpleLineIcons"
      size={4}
      color="blueGray.700"
    />
    <Icon name="more-horiz" color="blueGray.700" />
  </HStack>
</Box>
`.trim();

export function UtilityProps() {
  // const { isDarkTheme } = useThemeContext();
  // TODO: change this
  const foldBg = '';
  // const foldBg = !isDarkTheme ? 'bg-gray-100' : '';
  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="h2 mb-4 text-4xl text-gray-800">
            Now Supporting Utility Props
          </h1>
          <p className="text-xl text-gray-600">
            Powered by{' '}
            <a
              className="span"
              target="_blank"
              rel="noopener noreferrer"
              href="https://styled-system.com/"
            >
              Styled System{' '}
            </a>{' '}
            so you can rapidly build custom UI components with constraint-based
            utility style props.
          </p>
        </div>
        <div
          className="flex flex-row rounded-md shadow-xl"
          // style={{ border: '1px solid black' }}
        >
          <div className="max-w-3xl mx-auto text-center flex-1">
            <div className="flex justify-center items-center pt-12 md:pt-20 py-10 px-8 md:py-16 md:px-12">
              <img
                className="rounded-3xl"
                style={{ zIndex: 1 }}
                src={'/img/home/util-props.png'}
                width="223"
                height="478"
                alt="Kitchen Sink iOS"
              />
            </div>
          </div>
          <div
            className="flex-1 bg-gray-700 w-1 overflow-hidden rounded-lg"
            style={{ maxHeight: '39rem' }}
          >
            <CodeComponent code={exampleCode} />
          </div>
        </div>
        {/* Circle part*/}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
            id="hithere"
          >
            <defs>
              <linearGradient x1="1" y1=".5" x2="0" y2="1" id="illustration-02">
                <stop stopColor="#34d399" offset="0%" />
                <stop stopColor="#818cf8" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-02)" fillRule="evenodd">
              <circle cx="300" cy="260" r="200" opacity="0.3" />
              {/* <circle cx="155" cy="443" r="64" opacity="0.3" /> */}
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
