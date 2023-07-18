import type { RegisteredComponent } from '@builder.io/sdk-qwik';

import { TalkCardRegistry, TimelineRegistry } from './';
import { RegisteredTalkCard } from './TalkCard/TalkCard.registered';

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  RegisteredTalkCard,
  TimelineRegistry,
  TalkCardRegistry,
];
