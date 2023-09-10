import { useContext } from "react";
import { AgeContext } from "./App";

const inputStyle = `w-full h-11 border-[1px] border-gray-200 border-solid rounded-md p-2 text-lg md:text-xl text-gray-500 font-bold focus:outline-none focus:border-indigo-600`;
const labelStyle = `text-gray-500 font-bold mb-1 text-lg md:text-xl`;

const inputStyleError = `w-full h-11 border-[1px] border-red-500 border-solid rounded-md p-2 text-lg md:text-xl text-gray-500 font-bold focus:outline-none focus:border-red-600`;
const labelStyleError = `text-red-500 font-bold mb-1 text-lg md:text-xl`;

function InputSection() {
  const { age, setAge } = useContext(AgeContext);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    let defaultValue = { ...age };

    switch (key) {
      case "day":
        defaultValue = {
          ...defaultValue,
          day: {
            ...defaultValue.day,
            value: event?.target.value,
          },
        };
        break;
      case "months":
        defaultValue = {
          ...defaultValue,
          months: {
            ...defaultValue.months,
            value: event?.target.value,
          },
        };
        break;
      case "years":
        defaultValue = {
          ...defaultValue,
          years: {
            ...defaultValue.years,
            value: event?.target.value,
          },
        };
        break;
    }

    setAge(defaultValue);
  };

  return (
    <div className="flex gap-4">
      <div className="md:w-28">
        <div className={age?.day?.error ? labelStyleError : labelStyle}>
          DAY
        </div>
        <input
          className={age?.day?.error ? inputStyleError : inputStyle}
          placeholder="DD"
          value={age?.day?.value}
          onChange={(event) => onChange(event, "day")}
        />
        {age?.day?.error && (
          <div className="text-red-500 italic text-xs whitespace-nowrap mt-2">
            {age?.day?.error}
          </div>
        )}
      </div>
      <div className="md:w-28">
        <div className={age?.months?.error ? labelStyleError : labelStyle}>
          MONTH
        </div>
        <input
          className={age?.months?.error ? inputStyleError : inputStyle}
          placeholder="MM"
          value={age?.months?.value}
          onChange={(event) => onChange(event, "months")}
        />
        {age?.months?.error && (
          <div className="text-red-500 italic text-xs whitespace-nowrap mt-2">
            {age?.months?.error}
          </div>
        )}
      </div>
      <div className="md:w-28">
        <div className={age?.years?.error ? labelStyleError : labelStyle}>
          YEAR
        </div>
        <input
          className={age?.years?.error ? inputStyleError : inputStyle}
          placeholder="YYYY"
          value={age?.years?.value}
          onChange={(event) => onChange(event, "years")}
        />
        {age?.years?.error && (
          <div className="text-red-500 italic text-xs whitespace-nowrap mt-2">
            {age?.years?.error}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputSection;
