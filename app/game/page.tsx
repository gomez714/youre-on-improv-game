'use client';

import { useState } from 'react';
import { Button, Card, Container, Flex, Stack, Text, Title } from '@mantine/core';
import {motion, AnimatePresence} from 'framer-motion';
import { prompts, Prompt } from '@/data/prompts';
import { promptModeLabels } from '@/constants/promptMap';

export default function GamePage() {
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const getRandomPrompt = (): Prompt => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    return prompts[randomIndex];
  };

  const handleNextPrompt = () => {
    if (!hasStarted) setHasStarted(true); 
    
    setPrompt(null); 

    setTimeout(() => {
      setPrompt(getRandomPrompt());
    }, 350); 
  };

  return (
    <Flex justify="center" align="center" h="100vh">

      <Container size="sm" py="xl">
        <Stack gap="xl" align="center">
          <Title order={1} ta="center">
            You’re On 🎤
          </Title>

          <div style={{ minHeight: 350, width: '100%' }}>

            <AnimatePresence>
              { prompt &&(
                <motion.div
                  key={prompt.text}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.3, ease: 'easeInOut' },
                  }}
                >
                  <Card
                    withBorder
                    shadow="lg"
                    radius="xl"
                    p="xl"
                    w="100%"
                    style={{
                      background: 'linear-gradient(145deg, #fff, #f8f0ff)',
                      border: '2px solid #e0d3fa',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Stack gap="md">
                      <Title
                        order={2}
                        ta="center"
                        c="grape.7"
                        style={{
                          fontFamily: "'Comic Neue', sans-serif",
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                        }}
                      >
                        {promptModeLabels[prompt.mode]}
                      </Title>

                      <Text
                        mt="lg"
                        size="xl"
                        fw={700}
                        ta="center"
                        style={{
                          fontSize: '1.75rem',
                          lineHeight: 1.5,
                          color: '#1A1B1E',
                        }}
                      >
                        {prompt.text}
                      </Text>
                    </Stack>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          
          

          {!hasStarted && (
            <Text
              ta="center"
              size="lg"
              fw={600}
              style={{
                fontSize: '1.5rem',
                color: '#6E56CF',
                fontStyle: 'italic',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              Ready for your first prompt?
            </Text>
          )}
          
          <Button
            size="lg"
            radius="xl"
            onClick={handleNextPrompt}
            variant="gradient"
            gradient={{ from: 'grape', to: 'violet', deg: 135 }}
            style={{
              paddingInline: '2rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {hasStarted ? 'Next Prompt' : 'Start'}
          </Button>
        </Stack>
      </Container>
    </Flex>
  );
}