import React, { useEffect, useState } from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

const MessageComponent: React.FC = () => {
    const [message, setMessage] = useState('No Alarm');
    const [bgColor, setBgColor] = useState('green');
    const [displayText, setDisplayText] = useState('It\'s okay');
    const [imageSrc, setImageSrc] = useState('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngedits.com%2Fpng%2F2106%2Fsmiley-face-emoji-png-images-hd-download&psig=AOvVaw1YyFLsB1W3YS_gdZfWnE0G&ust=1717027466505000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNiLovPHsYYDFQAAAAAdAAAAABAR');

    useEffect(() => {
        const ws = new WebSocket(`ws://localhost:3000`);

        ws.onopen = () => {
            console.log('Connected to the WebSocket server');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessage(data.message);
            if (data.message === 'Movement or force detected!') {
                setBgColor('red');
                setDisplayText('Alert!! Unwanted Movement on yur motor');
                setImageSrc('https://www.google.com/url?sa=i&url=https%3A%2F%2Femoji.gg%2Femoji%2F4571-despair&psig=AOvVaw1HYi_ZWMGbUsJ79EoC4ZUE&ust=1717027508154000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjn7ofIsYYDFQAAAAAdAAAAABAE');
            } else {
                setBgColor('green');
                setDisplayText('It\'s okay, Your motor is fine');
                setImageSrc("https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngedits.com%2Fpng%2F2106%2Fsmiley-face-emoji-png-images-hd-download&psig=AOvVaw1YyFLsB1W3YS_gdZfWnE0G&ust=1717027466505000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNiLovPHsYYDFQAAAAAdAAAAABAR");
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
