function App() {
  return (
    <div className=" w-full">
      <div className="relative w-full">
        <img
          className=" w-full h-full  "
          src="./vecteezy_view-of-a-man-working-engineer-from-the-back-against-the_27265453.jpg"
          alt="petro-sunrise"
        />
        <div className=" container">
          <nav className="absolute top-10 flex gap-x-4 text-secondary-0">
            <li>صفحه اصلی</li>
            <li>وبلاگ</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </nav>
          <div className="absolute flex gap-x-4  bottom-1/4  ">
          <a href="#">
            <button className="btn btn--primary">تماس با ما &nbsp; &#8811;</button>
          </a>
          <a href="#">
            <button className="btn btn--secondary">مشاهده بیشتر &nbsp; &#8811;</button>
          </a>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
