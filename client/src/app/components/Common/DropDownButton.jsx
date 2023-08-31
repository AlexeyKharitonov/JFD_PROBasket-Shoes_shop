import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
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
  const [isClicked, setIsClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [upArrow, setUpArrow] = useState(false);

  const handleSortChange = (plan) => {
    setSelected(plan);
    setSortType(plan);
  };
  // const toggleArrow = () => {
  //   setUpArrow((prevState) => !prevState);
  // };

  useEffect(() => {
    if (menuOpen) {
      // console.log("Menu opened");
    } else {
      // console.log("Menu closed");
    }
  }, [menuOpen]);

  return (
    <div className="mb-0 mt-0 mr-0 flex justify-end z-20">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button
          role="button"
          tabIndex={0}
          // className={`leading-normal hover:scale-105 transition duration-500`}
          className="leading-normal transition duration-500 hover:scale-105"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 200);
          }}
        >
          <div
            className={`transform transition-transform duration-300 ${
              isClicked ? "scale-105" : "scale-102"
            }`}
          >
            <Button type="purple">
              {selected}
              {menuOpen ? (
                <IoIosArrowUp className="ml-1 mt-1" size={19} />
              ) : (
                <IoIosArrowDown className="ml-1 mt-1" size={19} />
              )}
            </Button>
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          afterLeave={() => setMenuOpen(false)}
        >
          <Menu.Items className="absolute right-0 mt-0 w-[305px] origin-top-right divide-y divide-gray-100 rounded-3xl bg-[#ECEBED] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                              ? "ring-2 ring-gray-400 ring-opacity-60 ring-offset-1"
                              : ""
                          }
                  ${
                    checked
                      ? "bg-[#7b68ee] bg-opacity-100 text-white"
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
DropDownSort.propTypes = {
  setSortType: PropTypes.func.isRequired,
};

export default DropDownSort;
