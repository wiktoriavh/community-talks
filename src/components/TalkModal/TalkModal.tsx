import { Modal } from '@/Modal';
import { component$ } from '@builder.io/qwik';

type TalkModalProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export const TalkModal = component$<TalkModalProps>(
  ({ imageSrc, title, description }) => {
    return (
      <Modal>
        <img
          q:slot="feature-image"
          width={160}
          height={90}
          src={imageSrc}
          class="object-cover w-full h-auto aspect-video rounded-xl"
        />
        <h2>{title}</h2>
        <p>{description}</p>
      </Modal>
    );
  }
);
