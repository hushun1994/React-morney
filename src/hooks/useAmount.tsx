import { useState } from "react";

const useAmount = (value: string) => {
  const [amount, setAmount] = useState(parseFloat(value));
  return { amount, setAmount };
};

export { useAmount };
