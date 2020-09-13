import { useState, useEffect } from "react";
import { createId } from "lib/createId";
import { useUpdate } from "hooks/useUpdate";

type tag = { id: number; name: string };

const useTags = () => {
  const [tags, setTags] = useState<tag[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        { id: createId(), name: "衣" },
        { id: createId(), name: "食" },
        { id: createId(), name: "住" },
        { id: createId(), name: "行" },
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);
  const findTag = (id: number) => {
    return tags.filter((tag) => tag.id === id)[0];
  };
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const addTag = () => {
    const tagName = window.prompt("请输入标签名");
    if (tagName !== null && tagName !== "") {
      setTags([...tags, { id: createId(), name: tagName }]);
    }
  };
  const updateTag = (id: number, { name }: { name: string }) => {
    setTags(tags.map((tag) => (tag.id === id ? { id, name } : tag)));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };
  const getName = (id: number) => {
    const tag = tags.filter((t) => t.id === id)[0];
    return tag ? tag.name : "";
  };
  return {
    tags,
    setTags,
    addTag,
    findTag,
    findTagIndex,
    updateTag,
    deleteTag,
    getName,
  };
};

export { useTags };
