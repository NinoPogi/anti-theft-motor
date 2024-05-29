import React, { useEffect, useState } from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

const MessageComponent: React.FC = () => {
    const [message, setMessage] = useState('No Alarm');
    const [bgColor, setBgColor] = useState('green');
    const [displayText, setDisplayText] = useState('It\'s okay');
    const [imageSrc, setImageSrc] = useState('/src/assets/happy.png');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://maangasnamotorapp.vercel.app/api/alert');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMessage(data.message);
                if (data.message === 'Movement or force detected!') {
                    setBgColor('red');
                    setDisplayText('Alert!! Unwanted Movement on yur motor');
                    setImageSrc('/src/assets/despair.png');
                } else {
                    setBgColor('green');
                    setDisplayText('It\'s okay, Your motor is fine');
                    setImageSrc('/src/assets/happy.png');
                }
                // Do something with the received message
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }
        
        setInterval(fetchData, 2000);

    }, []);

    return (
        <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bg={bgColor}
        >
            <Image src={imageSrc}/>
            <Heading>{message}</Heading>
            <Text fontSize="lg" mt={4}>{displayText}</Text>
        </Box>
    );
};

export default MessageComponent;
