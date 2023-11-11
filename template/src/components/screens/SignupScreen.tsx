import React, { useState } from 'react';
import {
  Button,
  ButtonText,
  Heading,
  VStack,
  Text,
  View,
} from '@gluestack-ui/themed';
import UserForm from '../molecules/UserForm';

type SignupScreenProps = {
  navigation: any;
};

const SignupScreen = ({ navigation }: SignupScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    // TODO: Handle signup function
  };

  return (
    <VStack flex={1}>
      <Heading size="3xl" textAlign="center" my={30}>
        Sign up
      </Heading>
      <VStack my={20}>
        <UserForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmitCallback={signup}
          buttonText="Sign up"
        />
        <Text textAlign="center" mt={15}>
          Already have an account?
        </Text>

        <View alignSelf="center">
          <Button
            size="md"
            variant="link"
            onPress={() => navigation.navigate('Login')}>
            <ButtonText>Log in</ButtonText>
          </Button>
        </View>
      </VStack>
    </VStack>
  );
};

export default SignupScreen;
