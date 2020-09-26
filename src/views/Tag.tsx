import React from "react";
import { useTags } from "hooks/useTags";
import { useParams, useHistory } from "react-router-dom";
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

type Params = { id: string };

const Tag: React.FC = () => {
  const { findTag, updateTag, deleteTag, updateTagError } = useTags();
  const { id: idString } = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const history = useHistory();
  const onClickBack = () => {
    if (updateTagError) {
      alert(updateTagError);
    } else {
      history.goBack();
    }
  };
  const deleteCurrentTag = (id: number) => {
    deleteTag(id);
    history.goBack();
  };
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack} />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      {tag ? (
        <div>
          <InputWrapper>
            <Input
              label="标签名"
              type="text"
              placeholder="标签名"
              value={tag.name}
              onChange={(e) => {
                updateTag(tag.id, { name: e.target.value });
              }}
            />
          </InputWrapper>
          <Center>
            <Button onClick={() => deleteCurrentTag(tag.id)}>删除标签</Button>
          </Center>
        </div>
      ) : (
        <div>tag 不存在</div>
      )}
    </Layout>
  );
};

export { Tag };
