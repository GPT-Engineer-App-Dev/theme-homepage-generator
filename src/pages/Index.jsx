import { Box, Container, Flex, Heading, Text, VStack, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="white" p={4} boxShadow="md" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/">Brand</Link>
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} mx={2}>Home</Link>
          <Link as={RouterLink} to="/about" p={2} mx={2}>About</Link>
          <Link as={RouterLink} to="/services" p={2} mx={2}>Services</Link>
          <Link as={RouterLink} to="/contact" p={2} mx={2}>Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box
        as="section"
        height="70vh"
        backgroundImage="url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
      >
        <VStack spacing={4} bg="rgba(0, 0, 0, 0.5)" p={8} borderRadius="md">
          <Heading as="h2" size="2xl">Welcome to Our Website</Heading>
          <Text fontSize="xl">We are glad to have you here. Explore our services and get to know more about us.</Text>
        </VStack>
      </Box>

      {/* About Section */}
      <Box as="section" p={8} bg="gray.100">
        <Heading as="h3" size="lg" mb={4}>About Us</Heading>
        <Text fontSize="md">We are a company dedicated to providing the best services to our clients. Our team is composed of experienced professionals who are passionate about their work.</Text>
      </Box>

      {/* Services Section */}
      <Box as="section" p={8}>
        <Heading as="h3" size="lg" mb={4}>Our Services</Heading>
        <Text fontSize="md">We offer a wide range of services to meet your needs. Whether you are looking for consulting, development, or design, we have the expertise to help you succeed.</Text>
      </Box>

      {/* Contact Section */}
      <Box as="section" p={8} bg="gray.100">
        <Heading as="h3" size="lg" mb={4}>Contact Us</Heading>
        <Text fontSize="md">Feel free to reach out to us with any questions or inquiries. We are here to help you and provide the best service possible.</Text>
      </Box>
    </Container>
  );
};

export default Index;