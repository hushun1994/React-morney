import React from "react";
import Layout from "components/Layout";
import { useTags } from "useTags";
import styled from "styled-components";
import Icon from "components/Icon";

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 0;
    margin: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      max-width: 20px;
      max-height: 20px;
    }
  }
`;

const Button = styled.button`
  font-size: 17px;
  border: none;
  padding: 8px 16px;
  background: #666;
  color: #fff;
  border-radius: 4px;
  margin: 30px 0;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Tags() {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => {
          return (
            <li key={tag}>
              <span className="oneLine">{tag}</span>
              <Icon name="right" />
            </li>
          );
        })}
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
