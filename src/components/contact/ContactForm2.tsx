import React from "react";

interface ContactFormProps {
  address: string;
  mobile: string;
  hotline: string;
  weekdayWorkingTime: string;
  weekendWorkingTime: string;
  addressIcon: string;
  phone: string;
  workingTime: string;
  values: {
    yourName: string;
    email: string;
    subject: string;
    message: string;
  };
  errors: {
    yourName?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleSubmitBtnClick: () => void;
}

const ContactForm2: React.FC<ContactFormProps> = ({
  address,
  mobile,
  hotline,
  weekdayWorkingTime,
  weekendWorkingTime,
  addressIcon,
  phone,
  workingTime,
  values,
  errors,
  handleChange,
  handleSubmit,
  handleSubmitBtnClick,
}) => {
  return (
    <section>
      <div className="w-[85%] mx-auto mt-[98px] mb-[63px] lg:px-0 px-3">
        <div className="text-center">
          <h1 className="text-[#000000] font-semibold select-none lg:text-[36px] lg:leading-[54px] text-2xl">
            Get In Touch With Us
          </h1>
          <p className="lg:max-w-[644px] lg:tracking-wider select-none mx-auto text-[#9F9F9F] font-normal text-[16px] leading-[24px]">
            For more information about our products and services, please feel free to drop us an email. Our staff is always here to help you. Do not hesitate!
          </p>
        </div>

        <div className="flex lg:justify-between lg:mt-[82px] lg:flex-row flex-col lg:mb-0 mt-12">
          <div className="lg:p-10 flex flex-col lg:gap-[43px] lg:w-6/12 px-3 gap-6">
            <div className="flex gap-[30px]">
              <img
                src={addressIcon}
                alt="address-icon"
                style={{ width: '32px', height: '32px' }}
              />
              <div>
                <span className="text-[24px] font-medium">Address</span>
                <p className="font-normal text-[#000000] lg:max-w-[212px] tracking-wider leading-[24px]">
                  {address}
                </p>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <img
                src={phone}
                alt="phone-icon"
                style={{ width: '32px', height: '32px' }}
              />
              <div>
                <span className="text-[24px] font-medium">Phone</span>
                <p className="font-normal text-[#000000] lg:max-w-[212px] tracking-wider leading-[24px]">
                  Mobile: {mobile}
                </p>
                <p className="font-normal text-[#000000] lg:max-w-[212px] tracking-wider leading-[24px]">
                  Hotline: {hotline}
                </p>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <img
                src={workingTime}
                alt="time-icon"
                style={{ width: '32px', height: '32px' }}
              />
              <div>
                <span className="text-[24px] font-medium">Working Time</span>
                <p className="font-normal text-[#000000] lg:max-w-[212px] tracking-wider leading-[24px]">
                  {weekdayWorkingTime}
                </p>
                <p className="font-normal text-[#000000] lg:max-w-[212px] tracking-wider leading-[24px]">
                  {weekendWorkingTime}
                </p>
              </div>
            </div>

          </div>

          <div className="lg:w-6/12 lg:mt-0 mt-6 lg:border-r-0 lg:border-0 border-t lg:pt-0 pt-6 border-gray-400">
            <form onSubmit={handleSubmit}>
              <div className="mb-[36px] w-full">
                <label
                  htmlFor="yourName"
                  className="block mb-[22px] font-medium text-black"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="yourName"
                  value={values.yourName}
                  onChange={handleChange}
                  id="yourName"
                  className="border-2 w-full rounded-md outline-0 py-[25px] px-[31px] border-[#9F9F9F]"
                  placeholder="Abc"
                  required
                />
                {errors.yourName && (
                  <div className="text-red-600 font-semibold text-sm mt-1">
                    {errors.yourName}
                  </div>
                )}
              </div>

              <div className="mb-[36px] w-full">
                <label
                  htmlFor="email"
                  className="block mb-[22px] font-medium text-black"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  className="border-2 w-full rounded-md outline-0 py-[25px] px-[31px] border-[#9F9F9F]"
                  placeholder="Abc@def.com"
                  required
                />
                {errors.email && (
                  <div className="text-red-600 font-semibold text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="mb-[36px] w-full">
                <label
                  htmlFor="subject"
                  className="block mb-[22px] font-medium text-black"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  id="subject"
                  className="border-2 w-full rounded-md outline-0 py-[25px] px-[31px] border-[#9F9F9F]"
                  placeholder="This is optional"
                  required
                />
                {errors.subject && (
                  <div className="text-red-600 font-semibold text-sm mt-1">
                    {errors.subject}
                  </div>
                )}
              </div>

              <div className="mb-[36px] w-full">
                <label
                  htmlFor="message"
                  className="block mb-[22px] font-medium text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  className="border-2 w-full rounded-md outline-0 py-[25px] px-[31px] border-[#9F9F9F] resize-none"
                  placeholder="Hi! I'd like to ask about"
                  required
                ></textarea>
                {errors.message && (
                  <div className="text-red-600 font-semibold text-sm mt-1">
                    {errors.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="bg-[#B88E2F] w-[237px] py-[13.75px] rounded-md text-white font-normal leading-[24px] hover:bg-yellow-600 lg:mx-0 mx-auto block"
                onClick={handleSubmitBtnClick}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm2;
