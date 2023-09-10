import { lazy, Suspense, createContext, useState } from "react";

const Divider = lazy(() => import("./Divider"));
const InputSection = lazy(() => import("./InputSection"));
const Result = lazy(() => import("./Result"));

interface IKeyValue {
  value: string;
  error: string;
}

interface Iage {
  years: IKeyValue;
  months: IKeyValue;
  day: IKeyValue;
  isSubmited: boolean;
  result: {
    years: string;
    months: string;
    day: string;
  };
}

type TContext = {
  age: Iage;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAge: React.Dispatch<any>;
};

const defaultValue: Iage = {
  years: {
    value: "",
    error: "",
  },
  months: {
    value: "",
    error: "",
  },
  day: {
    value: "",
    error: "",
  },
  isSubmited: false,
  result: {
    years: "",
    months: "",
    day: "",
  },
};

export const AgeContext = createContext<TContext>({
  age: defaultValue,
  setAge: () => {},
});

const boxStyle = `h-auto w-full bg-white 
  rounded-tl-3xl rounded-tr-3xl
  rounded-bl-3x rounded-br-[150px] p-7 ml-4 md:ml-[20%] lg:ml-[30%] mr-4 md:mr-[20%] lg:mr-[30%]`;

function App() {
  const [age, setAge] = useState(defaultValue);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AgeContext.Provider value={{ age, setAge }}>
        <div className="flex items-center justify-center h-screen w-full bg-gray-200">
          <div className={boxStyle}>
            <InputSection />
            <Divider />
            <Result />
          </div>
        </div>
      </AgeContext.Provider>
    </Suspense>
  );
}

export default App;
