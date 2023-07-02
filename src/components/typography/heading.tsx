import { component$ } from "@builder.io/qwik";

type HeadingProps = {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = component$<HeadingProps>(({ text, level = 1 }) => {
  if (level < 1) {
    level = 1;
  } else if (level > 6) {
    level = 6;
  }

  switch (level) {
    case 1:
      return <h1>{text}</h1>;
    case 2:
      return <h2>{text}</h2>;
    case 3:
      return <h3>{text}</h3>;
    case 4:
      return <h4>{text}</h4>;
    case 5:
      return <h5>{text}</h5>;
    case 6:
      return <h6>{text}</h6>;
  }
});
