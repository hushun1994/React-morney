import React from "react";
import { useTags } from "useTags";
import { useParams } from "react-router-dom";
import Layout from "components/Layout";
import Icon from "components/Icon";
import { Button } from "components/Button";
import styled from "styled-components";
import { Input } from "components/Input";
import { Center } from "components/Center";

const Topbar = styled.header`
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

const InputWrapper = styled.div`
  background: #fff;
  padding: 0 16px;
  margin-top: 8px;
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
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名" />
      </InputWrapper>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export { Tag };
