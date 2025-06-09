import React from "react";

const posts = [
  {
    id: 1,
    title: "میزان تاثیر تولید فرآورده های نفتی در اقتصاد",
    image: "/post1.jpg",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...",
    date: "1403/03/01",
  },
  {
    id: 2,
    title: "تاثیر نیروی انسانی در صنعت نفت",
    image: "/post2.jpeg",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...",
    date: "1403/03/02",
  },
  {
    id: 3,
    title: "تاثیر صنعت نفت بر آلودگی هوا",
    image: "/post3.jpeg",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...",
    date: "1403/03/03",
  },
  {
    id: 4,
    title: "راه حل کاهش آلودگی صنعت نفت ",
    image: "/post4.jpg",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...",
    date: "1403/03/04",
  },
  {
    id: 5,
    title: "صنایع وابسته به صنایع نفتی",
    image: "/post5.jpg",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...",
    date: "1403/03/05",
  },
  {
    id: 6,
    title: "میزان ذخایر نفتی کشف شده در دنیا",
    image: "/post6.jpeg",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...",
    date: "1403/03/06",
  },
  // ... سایر پست‌ها
];

function Blog() {
  return (
   <div className="container section ">
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-full  border border-gray-200 rounded-xl overflow-hidden bg-secondary-0 shadow-md flex flex-col"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-secondary-500 mb-3">{post.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-primary-900">{post.date}</span>
              <button className="btn btn--primary btn--outline">
                مشاهده
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
}

export default Blog;
