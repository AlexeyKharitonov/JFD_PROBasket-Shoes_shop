import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Button from "./Buttons/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const options = [
  "По новизне",
  "По цене: по возрастанию",
  "По цене: по убыванию",
];

const DropDownSort = ({ setSortType }) => {
  const [selected, setSelected] = useState(options[0]);
  const [upArrow, setUpArrow] = useState(false);

  const handleSortChange = (plan) => {
    setSelected(plan);
    setSortType(plan);
  };
  const toggleArrow = () => {
    setUpArrow((prevState) => !prevState);
  };

  return (
    <div className="mb-0 mt-0 mr-0 flex justify-end z-20">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="leading-normal" onClick={toggleArrow}>
            <Button type="white">
              {selected}
              {upArrow ? (
                <IoIosArrowUp className="ml-1 mt-1" size={19} />
              ) : (
                <IoIosArrowDown className="ml-1 mt-1" size={19} />
              )}
            </Button>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-0 w-72 origin-top-right divide-y divide-gray-100 rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="w-full px-4 py-4">
              <div className="mx-auto w-full max-w-md">
                <RadioGroup
                  value={selected}
                  onChange={(value) => handleSortChange(value)}
                >
                  <RadioGroup.Label className="sr-only">
                    Server size
                  </RadioGroup.Label>
                  <div className="space-y-2">
                    {options.map((plan, index) => (
                      <RadioGroup.Option
                        key={index}
                        value={plan}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? "ring-2 ring-white ring-opacity-60 ring-offset-2"
                              : ""
                          }
                  ${
                    checked
                      ? "bg-[#0f6fd1] bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-3xl px-5 py-4 shadow-md focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex w-full items-center justify-between">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium  ${
                                      checked ? "text-white" : "text-gray-900"
                                    }`}
                                  >
                                    {plan}
                                  </RadioGroup.Label>
                                </div>
                              </div>
                              {checked && (
                                <div className="shrink-0 text-white">
                                  <CheckIcon className="h-6 w-6" />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DropDownSort;
