'use client'

import { useRouter } from 'next/navigation';
import { Button, Container, Title, Text, Stack, Card, Grid } from '@mantine/core';
import { IconPlayerPlay } from '@tabler/icons-react';
import classes from './HomePage.module.css';

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

  const router = useRouter();

  const handleStartGame = () => {
    router.push('/game');
  };

  return (
    <Container size="md" py="xl">
      <Stack align="center" gap="xl">
        <Title order={1} size="h1" ta="center">
          You’re On
        </Title>
        <Text size="lg" ta="center" maw={500}>
          An AI-powered improv game of voices, characters, chaos, and big bit energy. Step up, take the stage, and let the weirdness begin.
        </Text>
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
      </Stack>

      <Title order={2} mt={80} mb="md" ta="center">
        🎮 Prompt Types
      </Title>

      <Grid gutter="md">
        {promptTypes.map((mode) => (
          <Grid.Col key={mode.title} span={{ base: 12, sm: 6 }}>
            <Card shadow="md" padding="lg" radius="md" bg="stage.7" withBorder>
              <Title order={3}>{mode.title}</Title>
              <Text mt="sm" size="sm">
                {mode.description}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Stack align="center" mt={80}>
        <Text size="lg">Ready to make a fool of yourself (on purpose)?</Text>
        <Button 
          size="lg" 
          radius="xl" 
          variant="gradient"
          gradient={{ from: 'electric.4', to: 'amber.4', deg: 135 }}
          className={classes.gradientButton}
          onClick={handleStartGame}
        >
          Let’s Play
        </Button>
      </Stack>
    </Container>
  );
}