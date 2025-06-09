import { useState } from "react";
import toast from "react-hot-toast";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    const ContactMessage = {
      name,
      email,
      phoneNumber,
      message,
    };
    console.log(ContactMessage);
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <form className="bg-secondary-0 rounded-xl shadow p-6 col-span-1 md:col-span-1 flex flex-col h-full">
      <h2 className="font-bold text-xl mb-4 text-right">
        برای دریافت مشاوره با ما در تماس باشید
      </h2>
      <div className="mb-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="نام و نام خانوادگی :"
          className="w-full textField__input"
        />
      </div>
      <div className="mb-3 flex gap-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="ایمیل :"
          className="w-1/2 textField__input"
        />
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
          placeholder="شماره تماس :"
          className="w-1/2 textField__input"
        />
      </div>
      <div className="mb-3">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="متن پیام"
          className="w-full textField__input h-24 resize-none"
        />
      </div>
      <div>
        <button
          onClick={formHandler}
          type="submit"
          className="btn btn--primary btn--outline "
        >
          ارسال پیام
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
