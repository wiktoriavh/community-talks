import { component$ } from '@builder.io/qwik';
import type { RegisteredComponent } from '@builder.io/sdk-qwik';
import { RenderBlocks } from '@builder.io/sdk-qwik';
import type { BuilderBlock } from '@builder.io/sdk-qwik/types/types/builder-block';

type TimelineProps = {
  Heading: string;
  builderBlock: BuilderBlock;
  Cards: {
    'Bubble Image'?: string;
    content: BuilderBlock[];
  }[];
};

export const Timeline = component$<TimelineProps>((props) => {
  return (
    <ul role="list" class="space-y-6">
      {props.Cards.map((card, idx) => {
        return (
          <li class="relative flex gap-x-4" key={idx}>
            <div class="absolute left-0 top-0 flex w-8 justify-center -bottom-6">
              <div class="w-px bg-blue-800"></div>
            </div>
            <img
              src={card['Bubble Image'] ?? 'https://placekitten.com/100/100'}
              alt=""
              loading="lazy"
              class="relative mt-3 h-8 w-8 flex-none rounded-full"
              width="50"
              height="50"
            />
            <RenderBlocks
              parent={props.builderBlock.id}
              path={`component.options.Cards.${idx}.content`}
              blocks={card.content}
            />
          </li>
        );
      })}
    </ul>
  );
});

export const TimelineRegistry: RegisteredComponent = {
  component: Timeline,
  name: 'Timeline',
  inputs: [
    {
      name: 'Heading',
      type: 'string',
    },
    {
      name: 'Cards',
      type: 'list',
      subFields: [
        {
          name: 'Bubble Image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'png'],
        },
        {
          name: 'content',
          type: 'blocks',
          showIf: 'false',
          defaultValue: [],
        },
      ],
      defaultValue: [],
    },
  ],
};
