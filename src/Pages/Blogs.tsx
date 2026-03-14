import Header from '../Components/Header'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import AboutBg from "/assets/banner-bg.jpg";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Search, ChevronLeft, ChevronRight, User, 
  Tag, ArrowLeft, MessageSquare, Share2, Clock, 
  Facebook, Twitter, Link as LinkIcon, Bookmark 
} from 'lucide-react';

// --- Types ---
interface Post {
  id: number;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  excerpt: string;
  content: string[];
  image: string;
  authorImage: string;
  tags: string[];
}

// --- Mock Data ---
const BLOG_POSTS: Post[] = [
  {
    id: 1,
    title: "Glaucoma Best Eye Hospital in Raipur",
    category: "Health Tips",
    author: "SBH Admin",
    authorRole: "Senior Nutritionist",
    date: "02 Jan 2026",
    excerpt: "A glaucoma is a group of diseases that affect the optic nerve and involves a loss of retinal ganglion cells in a characteristic pattern. It is a type of optic neuropathy.",
    image: "./assets/blog/blogs-img-one.jpg",
    authorImage: "https://i.pravatar.cc/150?u=a1",
    content: [
      "A glaucoma is a group of diseases that affect the optic nerve and involves a loss of retinal ganglion cells in a characteristic pattern. It is a type of optic neuropathy.", 
      "Raised intraocular pressure is a significant risk factor for developing glaucoma (above 22 mmHg or 2.9 kPa). One person may develop nerve damage at relatively low pressure, while another person may have high eye pressure for years and yet never develop damage.",
      "Untreated glaucoma leads to permanent damage of the optic nerve and resultant visual field loss, which can progress to blindness."
    ],
    tags: ["Wellness", "Nutrition", "2024"]

  },
  {
    id: 2,
    title: "Corneal Topography - Painless Imaging!",
    category: "Awareness",
    author: "SBH Admin",
    authorRole: "Senior Nutritionist",
    date: "14 Jan 2026",
    excerpt: "Corneal topography is a computer-assisted diagnostic test for generating a three-dimensional map of the cornea's surface curvature.",
    image: "./assets/blog/blogs-img-two.jpg",
    authorImage: "https://i.pravatar.cc/150?u=a1",
    content: [
      "Maintaining a healthy lifestyle is often seen as a daunting task, but it truly comes down to the small, consistent choices we make every single day.",
      "The first pillar is hydration. Your body is composed of about 60% water, and every system depends on it.",
      "Secondly, don't underestimate the power of sleep. While diet and exercise get all the glory, sleep is when your body repairs."
    ],
    tags: ["Wellness", "Nutrition", "2024"]
  },
  {
    id: 3,
    title: "IVF - Giving Birth to Pregnant Possibilities!",
    category: "IVF",
    author: "SBH Admin",
    authorRole: "Senior Nutritionist",
    date: "18 Jan 2026",
    excerpt: "IVF is a complicated procedure that demands extensive expertise, years of hands-on experience, and dexterous skill to do correctly.",
    image: "./assets/blog/blogs-img-three.jpg",
    authorImage: "https://i.pravatar.cc/150?u=a1",
    content: [
      "Maintaining a healthy lifestyle is often seen as a daunting task, but it truly comes down to the small, consistent choices we make every single day.",
      "The first pillar is hydration. Your body is composed of about 60% water, and every system depends on it.",
      "Secondly, don't underestimate the power of sleep. While diet and exercise get all the glory, sleep is when your body repairs."
    ],
    tags: ["Checkup", "Prevention"]
  }
];

// --- Sub-Components ---

const BlogCard = ({ post, onClick }: { post: Post; onClick: () => void }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    onClick={onClick}
    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 cursor-pointer group flex flex-col h-full"
  >
    <div className="relative h-48 overflow-hidden">
      <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <span className="absolute top-4 left-4 bg-cyan-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">{post.category}</span>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">{post.title}</h3>
      <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
      <div className="mt-auto flex items-center gap-3">
        <img src={post.authorImage} className="w-6 h-6 rounded-full" alt="" />
        <span className="text-xs font-medium text-gray-700">{post.author}</span>
        <span className="text-xs text-gray-400 ml-auto">{post.date}</span>
      </div>
    </div>
  </motion.div>
);

const BlogDetail = ({ post, onBack }: { post: Post, onBack: () => void }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
    <button onClick={onBack} className="flex items-center text-cyan-600 font-bold mb-8 hover:gap-2 transition-all">
      <ArrowLeft className="w-5 h-5 mr-2" /> Back to Articles
    </button>
    <header className="mb-8">
      <h1 className="text-2xl md:text-4xl font-medium text-[#006EB7] mb-6">{post.title}</h1>
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <img src={post.authorImage} className="w-10 h-10 rounded-full" alt="" />
        <div>
          <p className="font-bold text-gray-900 leading-none">{post.author}</p>
          <p className="text-xs">{post.authorRole}</p>
        </div>
        <div className="ml-auto flex gap-4"><Calendar className="w-4 h-4" /> {post.date}</div>
      </div>
    </header>
    <img src={post.image} className="w-full h-[450px] object-cover rounded-3xl mb-10 shadow-lg" alt="" />
    <div className="prose prose-lg max-w-none">
      {post.content.map((p, i) => <p key={i} className="text-gray-700 mb-4">{p}</p>)}
    </div>
  </motion.div>
);

const Sidebar = () => (
  <aside className="space-y-6">
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
      <div className="relative">
        <input type="text" placeholder="Search..." className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none" />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-600 text-white p-2 rounded-md hover:bg-cyan-700"><Search className="w-4 h-4" /></button>
      </div>
    </div>
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
      <h5 className="font-bold text-gray-900 mb-4 pb-2 border-b">Categories</h5>
      <ul className="space-y-3 text-sm">
        <li className="flex justify-between hover:text-cyan-600 cursor-pointer"><span>Health Care</span><span className="text-gray-400">(2)</span></li>
        <li className="flex justify-between hover:text-cyan-600 cursor-pointer"><span>Nutrition</span><span className="text-gray-400">(4)</span></li>
      </ul>
    </div>
  </aside>
);

// --- Main Page ---

const BlogPage: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Smooth scroll to top when changing views
  const handleSelect = (post: Post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <> 
        <SocialSticky />
        <Header/>
      <Breadcrumbs 
      items={[
        { label: "Blogs", 
          bg: AboutBg
        }
      ]}
      />
    <div className="bg-[#fcfdfe] min-h-screen">

      <main className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main View Area */}
          <div className={`${selectedPost ? 'lg:col-span-12' : 'lg:col-span-8'}`}>
            {selectedPost ? (
              <BlogDetail post={selectedPost} onBack={handleBack} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {BLOG_POSTS.map(post => (
                  <div key={post.id} onClick={() => handleSelect(post)}>
                    <BlogCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />                  
                 </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar - Hide when viewing detail for focus, or keep if preferred */}
          {!selectedPost && (
            <aside className="lg:col-span-4">
              <Sidebar />
            </aside>
          )}
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default BlogPage;