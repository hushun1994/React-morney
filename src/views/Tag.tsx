import React from "react";
import { useTags } from "useTags";
import { useParams } from "react-router-dom";
import Layout from "components/Layout";
import Icon from "components/Icon";
import { Button } from "components/Button";
import styled from "styled-components";

const Topbar = styled.header`
  /* border: 1px solid red; */
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  > .icon {
    width: 20px;
    height: 20px;
  }
`;

const Tag: React.FC = () => {
  const { findTag } = useTags();
  const { id } = useParams();
  return (
    <Layout>
      <Topbar>
        <Icon name="left" />
        <span>编辑标签</span>
        <span></span>
      </Topbar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名" />
        </label>
      </div>
      <Button>删除标签</Button>
    </Layout>
  );
};

export { Tag };
