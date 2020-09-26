import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
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
      @media (max-height: 570px) {
        & {
          padding: 8px 0;
        }
      }
    }
  }
`;

type Props = {
  value: "-" | "+";
  onChange: (category: "-" | "+") => void;
};

const CategorySection: React.FC<Props> = (props) => {
  const category = props.value;
  const categoryMap = { "-": "支出", "+": "收入" };
  const [categoryList] = useState<("-" | "+")[]>(["-", "+"]);
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            className={category === c ? "selected" : ""}
            key={c}
            onClick={() => {
              props.onChange(c);
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
