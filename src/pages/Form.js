import React from 'react';
import { Box, Flex, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useState } from 'react';

export default function form() {

    const emailArray = [];

    const [email, setEmail] = useState('');
    console.log(email);

    const handleSubmit = (e) => {
        emailArray.push(email)
        console.log([...emailArray]);
    }

    

  return (
    <>
    <FormControl>
        <FormLabel>Email:</FormLabel>
        <Input 
            placeholder="email"
            type="email"
            id="email"
            size="md"
            onChange={(e) => setEmail(e.target.value)}
        />
        <Button 
        onClick={handleSubmit}
        colorScheme="blue"
        variant="outline"
        >Submit</Button>
    </FormControl>
    </>
  )
}
