import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';


const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Primary Care',
        description: 'Comprehensive primary healthcare services',
      },
      {
        label: 'Specialist Consultations',
        description: 'Expert care from certified specialists',
      },
      {
        label: 'Diagnostic Services',
        description: 'Advanced diagnostic testing and imaging',
      },
      {
        label: 'Preventive Care',
        description: 'Health screenings and preventive medicine',
      },
      {
        label: 'Telemedicine',
        description: 'Remote consultations and follow-ups',
      },
      {
        label: 'Emergency Services',
        description: '24/7 emergency medical care',
      },
    ],
  },
  {
    label: 'Partnerships',
    href: '/partnerships',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
];

const Header: React.FC = () => {
  return (
    <Box position="absolute" width="100%" top={0} left="0" zIndex={1}>
      <Flex
        bg="white"
        color="gray.600"
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor="gray.200"
        align={'center'}
        position="sticky"
        top={0}
        zIndex={1000}
        boxShadow={'sm'}
      >
        {/* Logo */}
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            fontFamily={'heading'}
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight={'bold'}
            color="blue.600"
            cursor="pointer"
            _hover={{
              color: 'blue.800',
            }}
          >
            JnJ MedCare
          </Text>
        </Flex>

        {/* Navigation */}
        <NavBar />
      </Flex>
    </Box>
  );
};

const NavBar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <HStack display={{ base: 'none', md: 'flex' }}>
      {NAV_ITEMS.map((navItem) => (
        <Box 
          key={navItem.label}
          position="relative"
          onMouseEnter={() => navItem.children && setHoveredItem(navItem.label)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Button
            variant="ghost"
            size="sm"
            fontWeight={500}
            color="gray.600"
            _hover={{
              bg: 'gray.100',
              color: 'blue.600',
            }}
            onClick={() => {
              if (!navItem.children) {
                console.log(`Navigate to ${navItem.href}`);
              }
            }}
          >
            {navItem.label}
          </Button>
          
          {navItem.children && hoveredItem === navItem.label && (
            <Box
              position="absolute"
              top="100%"
              left="0"
              bg="white"
              boxShadow="xl"
              p={4}
              rounded="xl"
              minW="sm"
              zIndex={1000}
              border="1px solid"
              borderColor="gray.200"
            >
              <VStack align="stretch">
                <Text
                  fontSize="md"
                  fontWeight="bold"
                  color="blue.600"
                  mb={2}
                >
                  Our Services
                </Text>
                {navItem.children.map((child) => (
                  <Box
                    key={child.label}
                    p={3}
                    rounded="md"
                    cursor="pointer"
                    _hover={{
                      bg: 'blue.50',
                      transform: 'translateY(-1px)',
                    }}
                    transition="all 0.2s"
                    onClick={() => console.log(`Navigate to ${child.label}`)}
                  >
                    <Text fontWeight="semibold" color="gray.700">
                      {child.label}
                    </Text>
                    <Text fontSize="sm" color="gray.500" mt={1}>
                      {child.description}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>
          )}
        </Box>
      ))}
    </HStack>
  );
};

const DevNavBar: React.FC = () => {
  return (
    <Box bg="gray.100" p={2} textAlign="center" fontSize="sm" color="gray.700">
      This is a development navigation bar. It will be removed in production.
    </Box>
  );
};


export default Header;
