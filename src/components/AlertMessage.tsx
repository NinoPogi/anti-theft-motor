import React, { useEffect, useState } from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

const MessageComponent: React.FC = () => {
    const [message, setMessage] = useState('No Alarm');
    const [bgColor, setBgColor] = useState('green');
    const [displayText, setDisplayText] = useState('It\'s okay');
    const [imageSrc, setImageSrc] = useState('/src/assets/happy.png');

    useEffect(() => {
        const ws = new WebSocket(`wss://anti-motor-theft-api.vercel.app`);

        ws.onopen = () => {
            console.log('Connected to the WebSocket server');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
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
        };

        ws.onclose = () => {
            console.log('Disconnected from the WebSocket server');
        };

        return () => {
            ws.close();
        };
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
