import { useFetchUserInfo } from '@/hooks/useFetchApiCall';
import { Box, Heading, Text, Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { UserTableInfo } from './UserTableInfo';
const size = 5;
export const ApiCall = () => {
  const { error: fetchError, userInfo, isLoading } = useFetchUserInfo();
  const usersList = userInfo?.slice(0, size).map((users) => {
    return users;
  });
  const toast = useToast();
  useEffect(() => {
    const errorToast = () =>
      toast({
        title: 'Ran into issue while, fetching user info.',
        description: `${fetchError}`,
        status: 'error',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      });
    if (fetchError) {
      errorToast();
    }
  }, [fetchError, toast]);

  return (
    <Box>
      <Heading mb='20px' textAlign='center'>
        API CALL EXAMPLE
      </Heading>
      <Text mb={2}>
        Reason for choosing this API : {"It's"} is a free online REST API that can be used whenever
        i want to mock data that i will be expecting from the backend for development purpose
      </Text>
      {isLoading && <Spinner />}
      <UserTableInfo usersList={usersList} />
    </Box>
  );
};
