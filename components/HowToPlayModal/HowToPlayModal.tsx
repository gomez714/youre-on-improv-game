'use client';

import { Modal, Text } from '@mantine/core';

type Props = {
  opened: boolean;
  onClose: () => void;
};

export default function HowToPlayModal({ opened, onClose }: Props) {
  return (
    <Modal opened={opened} onClose={onClose} title="How to Play" centered size="lg">
      <Text mb="md">
        🎤 Welcome to <strong>You’re On</strong>!
      </Text>
      <Text>
        The AI-powered improv game where the only rule is: commit to the bit.

        You’ll get a random prompt — it might ask you to be a doorbell with abandonment issues...
        or pitch the gritty reboot of Beanie Babies.

        Your job? Go full send.

        Act it out. Make the noise. Sell the nonsense.

        Whether you're flying solo or playing with friends — don't think, just perform.

        Ready to embarrass yourself on purpose?

        Good.

        🎙️ Because... You’re On.
      </Text>
      <Text mt="sm">
        Play solo or with friends. Hit <strong>Start</strong> when you're ready to steal the show.
      </Text>
    </Modal>
  );
}