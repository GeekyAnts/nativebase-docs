import React, { useState } from 'react';
import { CodeComponent } from '../CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons';

export function ComponentLibrary() {
  // const { isDarkTheme } = useThemeContext();
  // TODO: change this
  const foldBg = '';
  // const foldBg = !isDarkTheme ? 'bg-gray-100' : '';
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-100';
  const [currentTheme, setCurrentTheme] = useState('forms');
  const exampleCode =
    currentTheme === 'forms'
      ? `
  <Box alignItems="flex-end" p={8}>
  <VStack alignItems="flex-end" space={5}>
    <FormControl>
      <FormControl.Label mb={3}>What's your event called?</FormControl.Label>
      <Input placeholder="Event's Name" />
    </FormControl>
    <FormControl>
      <FormControl.Label mb={3}>When is your Event?</FormControl.Label>
      <Radio.Group nativeID="patani" name="day_night">
        <VStack space={3}>
          <Radio value="day">Day</Radio>
          <Radio value="night">Night</Radio>
        </VStack>
      </Radio.Group>
    </FormControl>
    <Divider />
    <Checkbox size="sm" value="tnc" justifyContent="center" mb={4}>
      I agree to Terms and conditions
    </Checkbox>
  </VStack>
  <Button mt={2} endIcon={<AddIcon size={3} />}>Create Event</Button>
</Box>
`.trim()
      : currentTheme === 'interaction'
      ? `
<Button.Group
  direction={{ base: "column", sm: "row" }}
  variant="unstyled"
  space={2}
>
  {plans.map((plan, ind) => {
    return (
      <Button
        key={ind}
        justifyContent="flex-start"
        p={6}
        rounded="lg"
        shadow={0}
        bg={plan.color[500]}
        _hover={{ bg: plan.color[600] }}
        _focus={{ bg: plan.color[600], shadow: 3 }}
        _pressed={{ shadow: 3 }}
      >
        <Box>
          {Plan.name}
          {Plan.stats}
        </Box>
      </Button>
    );
  })}
</Button.Group>
`.trim()
      : `
 <Box alignItems="flex-end" p={8}>
  <Avatar.Group
    size="lg"
    max={{ base:3, sm:5 }}
    borderWidth={4}
  >
    {
      users.map((user,ind)=>{
        <Avatar
          key={ind}
          source={{
            uri:
              user.img_source,
          }}
        >
          {user.initials} 
        </Avatar>
      })
    }
  </Avatar.Group>
  <Button size="sm" mt={4} mr={1} endIcon={<AddIcon size={3} />}>
    Add Member
  </Button>
</Box>
`.trim();
  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-6 md:px-10 xl:px-0">
        <div className="relative py-12 md:py-20">
          <div className="max-w-3xl flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7">
            <span className="mt-1.5">{SVGs.Logo}</span>
            <span>
              <h2 className={`text-4xl leading-snug  ${headingColor}`}>
                <span>Rich </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-700">
                  Component Library
                </span>
              </h2>
              <p
                className={`text-lg md:text-xl font-medium leading-normal mt-7 ${subHeadingColor}`}
              >
                NativeBase offers 40+ components so you can build seamlessly. It
                includes button, checkbox, flex, stack, menu and more.
              </p>
              <p className="mt-7">
                <a
                  className="text-green-700 no-underline border-0 border-b-2 border-solid hover:border-green-700 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://nativebase.io/button"
                >
                  Learn More
                </a>
              </p>
            </span>
          </div>
          <div
            className="flex flex-col lg:flex-row z-0  lg:space-y-0 rounded-md lg:items-center mt-20 lg:mt-0"
            // style={{ border: '1px solid black' }}
          >
            <div className="sm:w-full rounded-lg lg:w-1/2 flex flex-col -mt-8">
              {/* tabs */}
              <div className="flex px-6 space-x-6 flex-row">
                <div className="text-left">
                  <a
                    id="forms-btn"
                    className={`pb-1 text-xs tracking-wider font-bold text-gray-500 ${
                      currentTheme === 'forms'
                        ? 'border-b-2 text-green-700 border-solid border-green-700'
                        : ''
                    }  border-0 cursor-pointer`}
                    onClick={(e) => {
                      setCurrentTheme('forms');
                    }}
                  >
                    FORMS
                  </a>
                </div>
                <div className="text-left">
                  <a
                    id="interaction-btn"
                    className={`pb-1 text-xs tracking-wider font-bold text-gray-500 ${
                      currentTheme === 'interaction'
                        ? 'border-b-2 text-green-700 border-solid border-green-700'
                        : ''
                    }  border-0 cursor-pointer`}
                    onClick={() => {
                      setCurrentTheme('interaction');
                    }}
                  >
                    INTERACTION
                  </a>
                </div>
                <div className="text-left">
                  <a
                    className={`pb-1 text-xs tracking-wider font-bold text-gray-500 ${
                      currentTheme === 'avatar'
                        ? 'border-b-2 text-green-700 border-solid border-green-700'
                        : ''
                    }  border-0 cursor-pointer`}
                    id="avatar-btn"
                    onClick={() => {
                      setCurrentTheme('avatar');
                    }}
                  >
                    AVATAR
                  </a>
                </div>
              </div>
              <div className="h-96 flex justify-center bg-white rounded-lg themeable relative w-full mt-5">
                <div className="h-full w-full bg-white md:px-4 py-4 rounded-lg lg:absolute lg:-right-5 md:top-0">
                  {currentTheme === 'forms' ? (
                    <iframe
                      className="border-0"
                      src="https://nativebase-v3-examples-form-components.vercel.app/"
                      width="100%"
                      height="100%"
                      title="NativeBase v3 Forms Example"
                    />
                  ) : currentTheme === 'interaction' ? (
                    <iframe
                      className="border-0"
                      src="https://nativebase-v3-examples-interactions.vercel.app"
                      width="100%"
                      height="100%"
                      title="NativeBase v3 Interactions Example"
                    />
                  ) : (
                    <iframe
                      className="border-0"
                      src="https://nativebase-v3-examples-avatar.vercel.app"
                      width="100%"
                      height="100%"
                      title="NativeBase v3 Avatar Example"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="flex-1 z-50 -mt-2 rounded-lg overflow-hidden px-0 md:px-0">
              <CodeComponent classStyle={'px-10 py-10'} code={exampleCode} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
