import { FaLinkedin } from "react-icons/fa";
import HeadSection from "../ui/HeadSection";

const teamMembers = [
  {
    name: "مهندس ملکی",
    title: "کارشناس ارشد نفت",
    image: "/woman1-500.jpg", // Replace with your image paths
  },
  {
    name: "مهندس کمالی",
    title: "کارشناس ارشد بازرگانی",
    image: "/woman2-500.jpg",
  },
  {
    name: "مهندس بزرگی",
    title: "مدیر امور مالی",
    image: "/man1-500.jpg",
  },
  {
    name: "مهندس کاظمی",
    title: "سرپرست واحد صنعت",
    image: "/man2-1000.jpg",
  },
];

function Team() {
  return (
    <div className="container section">
      <HeadSection titleHead="تیم ما" descHead=" از متخصصین برجسته صنعت پتروشیمی"/>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-x-4 gap-y-16 ">
        {teamMembers.map((member) => (
          <div key={member.name} className="relative">
            <div className=" w-full aspect-[3/3] rounded-md overflow-hidden ">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top  hover:scale-110 transition-all duration-300"
              />
            </div>
            <div
              className="absolute
                  left-1/2 
                  bottom-0 
                  -translate-x-1/2 
                  translate-y-1/2
                  w-4/5 bg-secondary-0 h-24 rounded-md p-4 flex items-center justify-between
                  shadow-lg
                  z-100"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-bold md:text-lg lg:text-xl ">{member.name}</h3>
                <span className="text-sm lg:text-base text-secondary-500">{member.title}</span>
              </div>
              <a href="#" className="block">
                <FaLinkedin className="w-6 h-6 lg:w-7 lg:h-7 text-primary-900" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
