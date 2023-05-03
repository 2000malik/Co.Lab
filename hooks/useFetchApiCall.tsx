import { baseUrl } from '@/helpers/constants';
import { ErrorHandler } from '@/types/Errors';
import { UserData } from '@/types/users';
import axios from 'axios';
import { useEffect, useState } from 'react';
type ResponseData = {
  status: number;
  data: UserData[];
};
export const useFetchUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserData[]>([]);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    const getUserData = async () => {
      try {
        await axios
          .get(`${baseUrl}/users`)
          .then((response: ResponseData) => {
            if (response.status === 200) {
              setUserInfo(response.data);
            }
          })
          .catch((error) => {
            const typedError = error as ErrorHandler;
            setError(typedError.message);
          });
      } catch (error) {
        const typedError = error as ErrorHandler;
        setError(typedError.message);
      }
    };
    getUserData();
  }, []);

  return {
    error,
    userInfo,
    isLoading: !error && !userInfo,
  };
};
