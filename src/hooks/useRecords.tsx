import { useState, useEffect } from "react";
import { useUpdate } from "./useUpdate";

export type RecordItem = {
  tagIds: number[];
  note: string;
  category: "+" | "-";
  amount: number;
  createdAt: string;
};

type NewRecordItem = Omit<RecordItem, "createdAt">;

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  const [status, setStatus] = useState<Boolean>(false);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, records);

  const addRecord = (newRecord: NewRecordItem) => {
    setStatus(false);
    if (newRecord.tagIds.length === 0) {
      alert("请选择标签");
      return false;
    }
    if (newRecord.amount <= 0) {
      alert("请输入金额");
      return false;
    }
    const record = { ...newRecord, createdAt: new Date().toISOString() };
    setRecords([...records, record]);
    return true;
  };

  return { records, addRecord, status, setStatus };
};

export { useRecords };
