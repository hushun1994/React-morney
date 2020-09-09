import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        width: 100%;
        background: #333;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
`;

const CategorySection: React.FC = () => {
  const [category, setCategory] = useState("-");
  type Keys = keyof typeof categoryMap;
  const [categoryList] = useState<Keys[]>(["-", "+"]);
  const categoryMap = { "-": "支出", "+": "收入" };
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            className={category === c ? "selected" : ""}
            key={c}
            onClick={() => {
              setCategory(c);
            }}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export { CategorySection };
