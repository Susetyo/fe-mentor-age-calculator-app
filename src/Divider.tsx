import { useContext } from "react";
import { AgeContext } from "./App";
import IconArrow from "./assets/icon-arrow.svg";

function Divider() {
  const { age, setAge } = useContext(AgeContext);

  const onClick = () => {
    const getLastDate = new Date(
      new Date(`${age?.months?.value} 01 ${age?.years?.value}`).getFullYear(),
      new Date(`${age?.months?.value} 01 ${age?.years?.value}`).getMonth() + 1,
      0
    ).getDate();
    const empty = !age?.years?.value || !age?.months?.value || !age?.day?.value;
    const invalid =
      parseInt(age?.years?.value) > new Date().getFullYear() ||
      parseInt(age?.months?.value) < 1 ||
      parseInt(age?.months?.value) > 12 ||
      parseInt(age?.day?.value) < 1 ||
      parseInt(age?.day?.value) > 31 ||
      getLastDate <= parseInt(age?.day?.value);

    if (empty || invalid) {
      setAge({
        ...age,
        years: {
          ...age.years,
          error: !age?.years?.value
            ? "This field is required"
            : parseInt(age?.years?.value) > new Date().getFullYear()
            ? "Must be in the past"
            : "",
        },
        months: {
          ...age?.months,
          error: !age?.months?.value
            ? "This field is required"
            : parseInt(age?.months?.value) < 1 ||
              parseInt(age?.months?.value) > 12
            ? "Must be a valid month"
            : "",
        },
        day: {
          ...age?.day,
          error: !age?.day?.value
            ? "This field is required"
            : parseInt(age?.day?.value) < 1 ||
              parseInt(age?.day?.value) > 31 ||
              getLastDate <= parseInt(age?.day?.value)
            ? "Must be a valid day"
            : "",
        },
        result: {
          years: "",
          months: "",
          day: "",
        },
      });
    } else {
      setAge({
        ...age,
        years: {
          ...age?.years,
          error: false,
        },
        months: {
          ...age?.months,
          error: false,
        },
        day: {
          ...age?.day,
          error: false,
        },
        result: {
          years: age?.years?.value,
          months: age?.months?.value,
          day: age?.day?.value,
        },
      });
    }
  };

  return (
    <div className="flex items-center my-14 relative">
      <div className="w-full h-0 border-[1px] border-gray-200 border-solid" />
      <div
        onClick={onClick}
        className="flex absolute left-1/2 -translate-x-1/2 md:left-full md:-translate-x-full justify-center items-center bg-indigo-600 rounded-full h-16 w-16 p-4 hover:bg-black cursor-pointer"
      >
        <img src={IconArrow} alt="arrow-svg" />
      </div>
    </div>
  );
}

export default Divider;
