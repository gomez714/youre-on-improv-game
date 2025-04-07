'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Container, Flex, Title, Text, Stack, Card, Grid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlayerPlay } from '@tabler/icons-react';
import classes from './HomePage.module.css';
import HowToPlayModal from '@/components/HowToPlayModal/HowToPlayModal';
import IntroAnimation from '@/components/IntroAnimation/IntroAnimation';

import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';


const promptTypes = [
  {
    title: '🎭 Role Roulette',
    description: 'Become a ridiculous character in a bizarre situation.',
  },
  {
    title: '🔊 Make Some Noise',
    description: 'No words. Just weird, glorious sounds.',
  },
  {
    title: '📣 Unlikely PSA',
    description: 'Deliver a serious PSA about something totally absurd.',
  },
  {
    title: '🎤 Tagline Takeover',
    description: 'Sell a terrible product like it’s the next big thing.',
  },
  {
    title: '🕵️ Lie Detector',
    description: 'Convince us something fake is 100% true.',
  },
  {
    title: '📺 Reboot It',
    description: 'Pitch the worst reboot of a beloved pop culture thing.',
  },
];

export default function HomePage() {
  const [opened, { open, close }] = useDisclosure(false);
  // const [introComplete, setIntroComplete] = useState(false);
  const router = useRouter();

  // if (!introComplete) {
  //   return <IntroAnimation onComplete={() => setIntroComplete(true)} />
  // }
  
  const handleStartGame = () => {
    router.push('/game');
  };

  return (
    <Flex justify="center" align="center" h="100vh">

      <Container size="md"py="xl" >
        <Stack align="center" gap="xl">
          <Title order={1} size="h1" ta="center">
            You’re On
          </Title>
          <Text size="lg" ta="center" maw={500}>
            An AI-powered improv game of voices, characters, chaos, and big bit energy. Step up, take the stage, and let the weirdness begin.
          </Text>
          <Flex justify="center" gap="md">
            <Button 
              size="lg"
              radius="xl" 
              variant="gradient"
              gradient={{ from: 'electric.4', to: 'amber.4', deg: 135 }}
              onClick={open}
              className={classes.gradientButton}
            >
              How To Play
            </Button>
            <Button 
              size="lg"
              radius="xl" 
              variant="gradient"
              gradient={{ from: 'electric.4', to: 'amber.4', deg: 135 }}
              leftSection={<IconPlayerPlay size={18} />} 
              onClick={handleStartGame}
              className={classes.gradientButton}
            >
              Start Game
            </Button>
          </Flex>
          
        </Stack>

        <HowToPlayModal opened={opened} onClose={close} />
      </Container>
    </Flex>
  );
}