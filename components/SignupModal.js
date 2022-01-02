import { Dialog } from "@headlessui/react";
import { useMemo, useState } from "react";
import TwitterLogo from "../assets/images/twitter-logo.svg";
import Input from "./shared/Input";
import Select from "./shared/Select";

function SignupModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");

  const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const yearOptions = [];

  for (let i = new Date().getFullYear(); i >= 1923; i--) {
    yearOptions.push(i);
  }

  const dayOptions = useMemo(() => {
    const monthIndex = monthOptions.findIndex((m) => m.toLowerCase() === month);
    const date = new Date(Number(year), monthIndex + 1, 0);
    const latestDay = date.getDate();

    const options = [];

    for (let i = latestDay; i >= 1; i--) {
      options.push(i);
    }

    return options;
  }, [year, month]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="w-[600px] relative bg-white rounded-lg mx-auto p-6 space-y-8">
          <div className="flex justify-center">
            <TwitterLogo className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-2xl font-bold">Create your account</h2>

          <form className="space-y-4">
            <Input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div>
              <div className="font-bold">Date of birth</div>
              <div className="text-gray-600 mt-1 text-sm">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else
              </div>

              <div className="mt-4 w-full grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6">
                  <Select
                    label="Month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    options={monthOptions.map((month) => ({
                      label: month,
                      value: month.toLowerCase(),
                    }))}
                  />
                </div>

                <div className="col-span-3">
                  <Select
                    label="Day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    options={dayOptions.map((day) => ({
                      label: day,
                      value: day,
                    }))}
                  />
                </div>

                <div className="col-span-3">
                  <Select
                    label="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    options={yearOptions.map((year) => ({
                      label: year,
                      value: year,
                    }))}
                  />
                </div>
              </div>
            </div>
          </form>

          <button className="w-full py-2 px-6 text-center bg-primary text-white rounded-full">
            Create my account
          </button>
        </div>
      </div>
    </Dialog>
  );
}

export default SignupModal;
