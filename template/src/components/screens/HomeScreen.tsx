import React from 'react';
import {
  VStack,
  Heading,
  Button,
  ButtonText,
  View,
} from '@gluestack-ui/themed';

const HomeScreen = () => {
  return (
    <VStack flex={1}>
      <Heading size="3xl" textAlign="center" my={30}>
        HomeScreen
      </Heading>
      <Heading size="xl" textAlign="center" my={30}>
        Hello Friend...
      </Heading>
      {/* TODO: Handle logout function: */}
      <View flex={1} alignSelf="center">
        <Button size="md" onPress={() => {}}>
          <ButtonText>Log out</ButtonText>
        </Button>
      </View>
    </VStack>
  );
};

export default HomeScreen;
