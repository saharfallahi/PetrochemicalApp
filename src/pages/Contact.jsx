import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import ContactForm from "../ui/ContactForm";

const offices = [
  {
    title: "دفتر مرکزی",
    address: "استان تهران، تهران، جردن، میدان سوم، کوچه چهارم",
    email: "Email@info.com",
    phone: "۰۲۱۵۵۵۵۶۶۶۶  - ۰۲۱۵۵۵۵۷۷۷۷",
  },
  {
    title: "دفتر اصفهان",
    address: "استان اصفهان، توحید، کوچه هشتم، میدان سوم، کوچه چهارم",
    email: "Email@info.com",
    phone: "۰۳۱۵۵۵۵۶۶۶۶ - ۰۳۱۵۵۵۵۷۷۷۷",
  },
  {
    title: "دفتر اهواز",
    address: "اهواز، میدان شهدا،میدان سوم، کوچه چهارم",
    email: "Email@info.com",
    phone: "۰۴۱۵۵۵۵۶۶۶۶ - ۰۴۱۵۵۵۵۷۷۷۷",
  },
];

export default function Contact() {
  return (
    <div className="container px-4 py-16">
      {/* دفاتر */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {offices.map((office, idx) => (
          <div
            key={idx}
            className="bg-secondary-100 rounded-xl shadow p-6 flex flex-col"
          >
            <h3 className="font-bold text-lg mb-2 text-right">
              {office.title} :
            </h3>
            <div className="text-sm flex flex-col">
              <div className="flex items-center gap-x-2 py-2">
                <div className="icon--container ">
                  <FaLocationDot className="icon" />
                </div>
                <span>{office.address}</span>
              </div>
              <div className="flex items-center gap-x-2 py-2">
                <div className="icon--container">
                  <IoIosMail className="icon" />
                </div>
                <span>{office.email}</span>
              </div>
              <div className="flex items-center gap-x-2 py-2">
                <div className="icon--container ">
                  <BiSolidPhoneCall className="icon" />
                </div>
                <span>{office.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* فرم و نقشه */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start ">
        {/* فرم تماس */}
        <ContactForm/>

        {/* نقشه */}
        <div className="col-span-1 md:col-span-1 w-full rounded-xl overflow-hidden shadow h-full">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=تهران،%20جردن&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "320px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
