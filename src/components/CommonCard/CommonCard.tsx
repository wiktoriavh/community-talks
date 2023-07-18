import { Card } from '@/Card';
import { CardTitle } from '@/CardTitle';
import { Slot, component$ } from '@builder.io/qwik';

type CommonCardProps = {
  title: string;
};

export const CommonCard = component$<CommonCardProps>(({ title }) => {
  return (
    <Card class="space-y-3">
      <CardTitle q:slot="title" class="font-bold">
        {title}
      </CardTitle>
      <p class="text-lg font-light ">
        <Slot />
      </p>
    </Card>
  );
});
