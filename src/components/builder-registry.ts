import type { RegisteredComponent } from '@builder.io/sdk-qwik';

import { RegisteredTalkCard } from './TalkCard/TalkCard.registered';
import { TalkCardRegistry, TimelineRegistry } from './molecules';

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  RegisteredTalkCard,
  TimelineRegistry,
  TalkCardRegistry,
];
