import React, { useState } from 'react';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center max-w-5xl m-auto mt-10 ">
      <div className="w-full sm:w-[1280px] h-[558px] px-8 flex flex-col justify-start items-start gap-5">
        <div className="self-center mb-4 flex justify-center items-center">
          <div className="text-black text-3xl sm:text-4xl font-bold leading-[60px]">Hubungi Kami</div>
        </div>
        <form onSubmit={handleSubmit} className="self-center w-full h-[388px] p-8 bg-gray-100 rounded-lg flex flex-col justify-start items-start gap-6">
          <div className="w-full flex justify-between items-center gap-6">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Nama depan" className="w-full sm:w-[50%] bg-gray-200 rounded-xl shadow p-3" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Nama belakang" className="w-full sm:w-[50%] bg-gray-200 rounded-xl shadow p-3" />
          </div>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subjek" className="w-full bg-gray-200 rounded-xl shadow p-3" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Pesan" className="w-full h-[116px] bg-gray-200 rounded-xl shadow p-3" />
          <div className="w-full flex justify-start items-start">
            <button type="submit" className="w-[124px] h-11 px-[86px] py-[18px] bg-green-500 rounded-xl flex justify-center items-center gap-2.5">
              <div className="text-white font-semibold">Kirim</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
