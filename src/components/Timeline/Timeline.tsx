import { TalkCard } from '@/TalkCard';
import { formatDateTime } from '@/utils/formatDateTime';
import { Resource, component$, useResource$ } from '@builder.io/qwik';
import { getAllContent } from '@builder.io/sdk-qwik';

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

function getTodayAtMidnight() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

export const Timeline = component$(() => {
  const talks = useResource$(async () => {
    // TODO: Mutate the data to be in the correct format once getContent becomes type-safe
    const content = await getAllContent({
      model: 'talk',
      apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
      query: {
        'data.datetime.$gt': getTodayAtMidnight().getTime(),
      },
      options: {
        includeRefs: true,
      },
    });

    return content;
  });

  return (
    <Resource
      value={talks}
      onPending={() => <div>Loading...</div>}
      onRejected={
        (/*error*/) => {
          return (
            <h2 class="prose text-primary-500 text-3xl font-bold font-heading w-2/3 m-auto">
              Something went wrong. Please try again later.
            </h2>
          );
        }
      }
      onResolved={(talk) => {
        if (!talk?.results || talk.results.length === 0) {
          return (
            <h2 class="prose text-primary-500 text-3xl font-bold font-heading w-2/3 m-auto">
              No scheduled events. Please check back later for updates and
              upcoming Community Talks.
            </h2>
          );
        }
        return (
          <>
            {talk.results.map((talk) => {
              const usableData = getUsableData(talk.data);
              return <TalkCard {...usableData} key={talk.id} />;
            })}
          </>
        );
      }}
    />
  );
});
