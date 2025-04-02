'use client';

import { useState } from 'react';
import { Button, Card, Container, Stack, Text, Title } from '@mantine/core';

type GameMode = {
  title: string;
  description: string;
  examplePrompt: string;
};

const GAME_MODES: GameMode[] = [
  {
    title: '🎭 Role Roulette',
    description: 'Become a ridiculous character in a bizarre situation.',
    examplePrompt: "You are a deeply insecure pirate giving a TED Talk on leadership — in a Chuck E. Cheese.",
  },
  {
    title: '🔊 Make Some Noise',
    description: 'No words. Just weird, glorious sounds.',
    examplePrompt: "Make the sound of a haunted vending machine begging for release.",
  },
  {
    title: '📣 Unlikely PSA',
    description: 'Deliver a serious PSA about something totally absurd.',
    examplePrompt: "The dangers of letting raccoons invest in cryptocurrency.",
  },
  {
    title: '🎤 Tagline Takeover',
    description: 'Sell a terrible product like it’s the next big thing.',
    examplePrompt: "Introducing: Fork 2.0 — now with zero prongs.",
  },
  {
    title: '🕵️ Lie Detector',
    description: 'Convince us something fake is 100% true.',
    examplePrompt: "You invented elbows.",
  },
  {
    title: '📺 Reboot It',
    description: 'Pitch the worst reboot of a beloved pop culture thing.',
    examplePrompt: "Reboot Beanie Babies as an emo boy band trying to save their failing tour.",
  },
];

export default function GamePage() {
  const [currentMode, setCurrentMode] = useState<GameMode | null>(null);

  const generateRandomPrompt = () => {
    const random = GAME_MODES[Math.floor(Math.random() * GAME_MODES.length)];
    setCurrentMode(random);
  };

  return (
    <Container size="sm" py="xl">
      <Stack gap="xl" align="center">
        <Title order={1} ta="center">
          You’re On 🎤
        </Title>

        {currentMode ? (
          <Card withBorder shadow="md" radius="md" p="lg" w="100%">
            <Title order={3}>{currentMode.title}</Title>
            <Text c="dimmed" mt="xs" size="sm">
              {currentMode.description}
            </Text>
            <Text mt="lg" size="xl" fw={600}>
              {currentMode.examplePrompt}
            </Text>
          </Card>
        ) : (
          <Text c="dimmed" ta="center">
            Ready for your first prompt?
          </Text>
        )}

        <Button size="lg" color="grape" radius="xl" onClick={generateRandomPrompt}>
          {currentMode ? 'New Prompt' : 'Start'}
        </Button>
      </Stack>
    </Container>
  );
}