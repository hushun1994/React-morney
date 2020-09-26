import React, { useState, ReactNode } from "react";
import Layout from "components/Layout";
import { CategorySection } from "./Money/CategorySection";
import styled from "styled-components";
import { useRecords, RecordItem } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import dayjs from "dayjs";

const CategoryWrapper = styled.div`
  background: #fff;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const ReplaceItem = styled.div`
  padding: 32px;
  text-align: center;
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
`;

function Statistics() {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getName } = useTags();
  const hash: { [k: string]: RecordItem[] } = {};
  const selectedRecords = records.filter((r) => r.category === category);

  selectedRecords.forEach((r) => {
    const key = dayjs(r.createdAt).format("YYYY-MM-DD");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) {
      return 0;
    } else if (a[0] > b[0]) {
      return -1;
    } else if (a[0] < b[0]) {
      return 1;
    } else {
      return 0;
    }
  });

  const showDate = (date: string) => {
    const day = dayjs(date);
    const now = dayjs();
    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else if (day.isSame(now, "year")) {
      return day.format("M月D日");
    } else {
      return day.format("YYYY年MM月DD日");
    }
  };

  const showTotal = (records: RecordItem[]) => {
    const amountArray = records.map((record) => {
      return record.amount;
    });
    return amountArray.reduce((pre, cur) => {
      return pre + cur;
    });
  };

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(value) => setCategory(value)}
        />
      </CategoryWrapper>

      {selectedRecords.length === 0 ? (
        <ReplaceItem>啥也没有看个球哦</ReplaceItem>
      ) : (
        array.map(([date, records]) => {
          return (
            <div key={date}>
              <Header>
                {showDate(date)} <span>¥{showTotal(records)}</span>
              </Header>

              <div>
                {records.map((r, index) => {
                  return (
                    <Item key={index}>
                      <div className="tags oneLine">
                        {r.tagIds
                          .map((tagId, index) => (
                            <span key={index}>{getName(tagId)}</span>
                          ))
                          .reduce((result, span, index) => {
                            return result.concat(
                              index < r.tagIds.length - 1
                                ? [span, "，"]
                                : [span]
                            );
                          }, [] as ReactNode[])}
                      </div>
                      {r.note && <div className="note">{r.note}</div>}
                      <div>¥{r.amount}</div>
                    </Item>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </Layout>
  );
}

export default Statistics;
