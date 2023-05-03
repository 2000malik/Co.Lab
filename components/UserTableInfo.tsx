import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, CardBody } from '@chakra-ui/react';
import { Card } from './Card';
import { usersTableHead } from '@/helpers/constants';
import React from 'react';
import { UserData } from '@/types/users';
type UserTableInfoProps = {
  usersList: UserData[];
};
export const UserTableInfo = ({ usersList }: UserTableInfoProps) => {
  return (
    <Card variant='elevated'>
      <CardBody>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>{React.Children.toArray(usersTableHead.map((name) => <Th>{name}</Th>))}</Tr>
            </Thead>
            <Tbody>
              {React.Children.toArray(
                usersList?.map((info) => (
                  <Tr>
                    <Td>{info.id}</Td>
                    <Td> {info.name}</Td>
                    <Td>{info.username}</Td>
                    <Td> {info.email}</Td>
                    <Td>{info.phone}</Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};
