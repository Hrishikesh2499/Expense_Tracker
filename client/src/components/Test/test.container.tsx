import { useEffect, useState } from "react";
import Test, { TCalculation } from "./test.component";

const TestContainer = () => {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
  }, [counter])
  
  const onClick: React.FormEventHandler<HTMLButtonElement> = (event) => {
    switch (event.currentTarget.name as TCalculation) {
      
        case "addtion":
        setCounter(counter + 1);
        break;
      
        case "subtraction":
        setCounter(counter - 1);

        break;
    }
  };
  return <Test onClick={onClick} value={counter} />;
};

export default TestContainer;
