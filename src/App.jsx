import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AppLayout from "./ui/AppLayout";
import { PostsProvider } from "./context/PostsProvider";
import { Toaster } from "react-hot-toast";
import Products from "./pages/Products";
import { ItemsProvider } from "./context/ItemsProvider";
import SingleItem from "./pages/SingleItem";
import Services from "./pages/Services";

function App() {
  return (
    <div className="w-full">
      <ItemsProvider>
        <PostsProvider>
          <Toaster />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Blog />} />
              <Route path="/posts/:postId" element={<SinglePost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<SingleItem />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<SingleItem />} />
            </Route>
          </Routes>
        </PostsProvider>
      </ItemsProvider>
    </div>
  );
}

export default App;
