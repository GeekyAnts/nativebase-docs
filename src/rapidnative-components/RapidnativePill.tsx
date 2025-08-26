import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Linking } from 'react-native';

const RapidnativePill = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePress = () => {
    Linking.openURL('https://rapidnative.com/?utm_source=nativebase-docs-banner&utm_medium=referral&utm_campaign=landing-banner');
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    //   backgroundColor: isPressed ? '#0891b2' : isHovered ? '#0e7490' : '#06b6d4',
    // backgroundColor: isPressed ? '##0891b2' : isHovered ? '#06b6d4' : '#0891b2',
      style={{
        backgroundColor: isPressed ? '##0891b2' : isHovered ? '#0891b2' : '#06b6d4',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: isHovered ? 0.15 : 0.1,
        shadowRadius: isHovered ? 3 : 2,
        elevation: isHovered ? 3 : 2,
        transform: [{ scale: isPressed ? 0.98 : isHovered ? 1.02 : 1 }],
        transition: 'all 0.2s ease',
      }}
    >
      <Text
        style={{
          color: '#ffffff',
          fontSize: 14,
          fontWeight: '500',
          marginRight: 4,
        }}
      >
        Prompt to React Native UI
      </Text>
      <Text
        style={{
          color: '#ffffff',
          fontSize: 12,
          fontWeight: '400',
        }}
      >
        →
      </Text>
    </TouchableOpacity>
  );
};

export default RapidnativePill;