import { useState } from "react";
import { createId } from "lib/createId";

const defaultTags = [
  { id: createId(), name: "衣" },
  { id: createId(), name: "食" },
  { id: createId(), name: "住" },
  { id: createId(), name: "行" },
];

type tag = { id: number; name: string };

const useTags = () => {
  const [tags, setTags] = useState<tag[]>(defaultTags);
  const findTag = (id: number) => {
    return tags.filter((tag) => tag.id === id)[0];
  };
  return { tags, setTags, findTag };
};

export { useTags };
