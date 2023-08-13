import type { Component } from '@builder.io/qwik';
import {
  $,
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useSignal,
} from '@builder.io/qwik';

type PopupManagerContextType = {
  show: <T extends {}>(Component: Component<T>, props: T) => Promise<void>;
  hide: () => Promise<void>;
};

export const PopupManagerContext =
  createContextId<PopupManagerContextType>('PopupManager');

export const PopupManager = component$(() => {
  const popup = useSignal<{ Component: Component<any>; props: any }>();

  useContextProvider(PopupManagerContext, {
    show: $(<T extends {}>(component: Component<T>, props: T) => {
      popup.value = { Component: component as any, props };
    }),
    hide: $(() => {
      popup.value = undefined;
    }),
  });

  return (
    <>
      <Slot />
      <div class="__PORTAL__">
        {popup.value && <popup.value.Component {...popup.value.props} />}
      </div>
    </>
  );
});
