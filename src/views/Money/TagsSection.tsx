import React from "react";
import styled from "styled-components";
import { useTags } from "hooks/useTags";
import classnames from "classnames";

const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
  > ol {
    margin: 0 -12px;
    max-width: 100%;
    > li {
      background: #888;
      color: #fff;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;
      max-width: 40%;
      &.selected {
        background: #fc5f20;
      }
      > span {
        font-size: 14px;
      }
    }
  }
  > button {
    background: none;
    padding: 0 2px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
};

const TagsSection: React.FC<Props> = (props) => {
  const { tags, addTag } = useTags();
  const selectedTagIds = props.value;
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter((t) => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const isSelected = (tagId: number) => {
    return selectedTagIds.indexOf(tagId) >= 0 ? "selected" : "";
  };
  return (
    <Wrapper>
      <button onClick={addTag}>新增标签</button>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => onToggleTag(tag.id)}
            className={classnames(isSelected(tag.id), "oneLine")}
          >
            <span>{tag.name}</span>
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};

export { TagsSection };
