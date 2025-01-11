"use client";

import React, { useState, forwardRef, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// CustomInput Component
const CustomInput = forwardRef(
  ({ value, onChange, onFocus, onBlur, ...otherProps }, ref) => {
    const inputRef = useRef(null);

    const handleFocus = () => {
      if (onFocus) onFocus();
      if (inputRef.current) {
        inputRef.current.classList.add("--focus");
      }
    };

    const handleBlur = () => {
      if (onBlur) onBlur();
      if (inputRef.current) {
        inputRef.current.classList.remove("--focus");
      }
    };

    return (
      <input
        {...otherProps}
        ref={(node) => {
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
          inputRef.current = node;
        }}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`w-full px-4 py-2 border rounded-lg bg-gray-900/90
          before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]
          before:border before:border-transparent 
          before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box]
          before:[mask-composite:exclude_!important] 
          before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]
          after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm
          placeholder-white/80`}
        placeholder="Phone Number"
        required
        type="tel"
        autoComplete="tel"
      />
    );
  }
);

CustomInput.displayName = "CustomInput";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    industry: "",
    otherIndustry: "",
    postalCode: "",
  });

  const [isOtherIndustry, setIsOtherIndustry] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };

  const handleIndustryChange = (e :any) => {
    const selectedIndustry = e.target.value;
    setFormData({
      ...formData,
      industry: selectedIndustry,
    });
    setIsOtherIndustry(selectedIndustry === "Others");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  const dropdownStyle = {
    backgroundColor: "#111827E6",
    color: "white",
    border: "1px solid #333",
    width: "100%",
  };

  const countrySelectProps = {
    style: {
      background: "#111827E6",
      color: "white",
      border: "1px solid #333",
      width: "100%",
    },
    className: "custom-phone-dropdown",
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex h-full justify-between items-start py-12">
        {/* Left - Text Section */}
        <div className="w-1/2 px-8 flex flex-col justify-start">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            We'd love to answer your questions
          </h2>
          <p className="text-lg text-indigo-200/65">
            Get a personalized online demo and see what else WooKraft can do for you.
          </p>
        </div>

        {/* Right - Form Section */}
        <div className="w-1/2 px-8">
          <form onSubmit={handleSubmit}>
            {/* First Name and Last Name */}
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg mt-2 bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm placeholder-white/80"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg mt-2 bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm placeholder-white/80"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mt-2 bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm placeholder-white/80"
                placeholder="Email"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">            
            <PhoneInput
              country="IN"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="Phone Number"
              defaultCountry="IN"
              autoComplete="on"
              countryCallingCodeEditable={false}
              inputComponent={CustomInput}
              international={true}
              dropdownstyle={dropdownStyle}
              countrySelectProps={countrySelectProps}
            />
            </div>


            {/* Business Name */}
            <div className="mb-4">
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mt-2 bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm placeholder-white/80"
                placeholder="Business Name"
                required
              />
            </div>

            {/* Industry Dropdown */}
            <div className="mb-4">
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleIndustryChange}
                className="w-full px-4 py-2 border rounded-lg mt-2 bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm placeholder-white/80"
                required
              >
                <option value="">Select Industry</option>
                <option value="Retail">Retail</option>
                <option value="Food Service/Catering/Bar">Food Service/Catering/Bar</option>
                <option value="Hotel">Hotel</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Beauty/Salon/Spa">Beauty/Salon/Spa</option>
                <option value="Fitness/Wellness">Fitness/Wellness</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Professional Services">Professional Services</option>
                <option value="Transportation">Transportation</option>
                <option value="Education">Education</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Conditional Input for "Others" Industry */}
            {isOtherIndustry && (
              <div className="mb-4">
                <input
                  type="text"
                  id="otherIndustry"
                  name="otherIndustry"
                  value={formData.otherIndustry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg mt-2 bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm placeholder-white/80"
                  placeholder="Please specify your industry"
                />
              </div>
            )}

            {/* Postal Code */}
            <div className="mb-4">
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mt-2 bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm placeholder-white/80"
                placeholder="Postal Code"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Submit
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
