import { List, ListItem } from '@chakra-ui/react';

export const Nav = ({ ...props }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'projects' },
    { id: 'contact', label: 'contact' },
  ];
  return (
    <List display='flex' justifyContent='space-between' {...props}>
      {navItems.map((nav) => {
        return (
          <ListItem
            key={nav.id}
            color={props.color || 'white'}
            p={props.p}
            fontSize='md'
            fontWeight='600'
            textTransform='capitalize'
            _hover={{
              color: 'button',
              opacity: '1',
              cursor: 'pointer',
            }}
          >
            <a href={`#${nav.id}`}>{nav.label} </a>
          </ListItem>
        );
      })}
    </List>
  );
};
