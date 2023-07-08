import type { RegisteredComponent } from '@builder.io/sdk-qwik';

import { RegisteredTalkCard } from './TalkCard/TalkCard.registered';
import { TimelineRegistry } from './molecules/Timeline';

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  RegisteredTalkCard,
  TimelineRegistry,
];
