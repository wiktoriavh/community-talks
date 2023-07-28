import { TalkCard } from '@/TalkCard';
import { formatDateTime } from '@/utils/formatDateTime';
import { Resource, component$, useResource$ } from '@builder.io/qwik';
import { getContent } from '@builder.io/sdk-qwik';

type Talk = {
  title: string;
  speaker: string;
  job?: string;
  company?: string;
  avatar?: string;
  date: string;
  time: string;
  duration: number;
  description: string;
  cover: string;
  recording?: string;
};

function getUsableData(data: any): Talk {
  const usableData = {
    ...data,
    ...formatDateTime(data.datetime),
  };

  delete usableData.datetime;

  return usableData;
}

export const Timeline = component$(() => {
  const talks = useResource$(async () => {
    // Can I mutate the returned data so it matches type Talk?
    const content = await getContent({
      model: 'talk',
      apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
      options: {
        includeRefs: true,
      },
    });

    return content;
  });

  return (
    <div>
      <h1>Timeline</h1>
      <Resource
        value={talks}
        onPending={() => <div>Loading...</div>}
        onResolved={(talk) => {
          if (!talk) {
            return <div>Not found</div>;
          }
          const usableData = getUsableData(talk.data);
          return <TalkCard {...usableData} />;
        }}
      />
    </div>
  );
});
