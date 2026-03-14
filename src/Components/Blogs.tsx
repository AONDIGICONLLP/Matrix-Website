import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBookmark, FaCalendar } from 'react-icons/fa';
import { ArrowRight,ArrowLeft } from 'lucide-react'; // Using Lucide for the icons

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
  delay: number;
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
    tags: ["Wellness", "Nutrition", "2024"],
    delay: 0.2
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
    tags: ["Wellness", "Nutrition", "2024"],
    delay: 0.4
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
    tags: ["Checkup", "Prevention"],
    delay: 0.6
  }
];

const BlogDetail = ({ post, onBack }: { post: Post, onBack: () => void }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
    <button onClick={onBack} className="flex items-center text-cyan-600 font-bold mb-8 hover:gap-2 transition-all">
      <ArrowLeft className="w-5 h-5 mr-2" /> Back to Articles
    </button>
    <header className="mb-8">
      <h1 className="text-2xl md:text-4xl font-medium text-[#006EB7] mb-2">{post.title}</h1>
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <img src={post.authorImage} className="w-10 h-10 rounded-full" alt="" />
        <div>
          <p className="font-bold text-gray-900 leading-none">{post.author}</p>
          <p className="text-xs">{post.authorRole}</p>
        </div>
        <div className="ml-auto flex gap-4"><FaCalendar className="w-4 h-4" /> {post.date}</div>
      </div>
    </header>
    <img src={post.image} className="w-full h-[450px] object-cover rounded-3xl mb-10 shadow-lg" alt="" />
    <div className="prose prose-lg max-w-none">
      {post.content.map((p, i) => <p key={i} className="text-gray-700 mb-4">{p}</p>)}
    </div>
  </motion.div>
);

const BlogSection: React.FC = () => {
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
    <div className={`${selectedPost ? 'lg:col-span-12' : 'lg:col-span-8'}`}>
            {selectedPost ? (
              <BlogDetail post={selectedPost} onBack={handleBack} />
            ) : (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-5 gap-6 border-b border-gray-200">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight"
                >
                  Our Updated 
                  <span className="inline-flex items-center gap-6">
                    <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                      &nbsp;Articles and Tips
                    </span>
                  </span>
                </motion.h2>
                
                <motion.a
                  href="./blogs"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors group"
                >
                  View All
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
              {/* Blog Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map(post => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: post.delay }}
                    viewport={{ once: true }}
                    className="group cursor-pointer border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl rounded-2xl"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 font-medium mb-5">
                        <FaBookmark className='mr-2' /> <span>{post.category}</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <FaCalendar className='mr-2' /><span>{post.date}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-[22px] font-medium text-[#006EB7] mb-2 hover:text-green-600 transition-colors">
                        <a href="./blogs">{post.title}</a>
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
     )}
      </div>
  );
};

export default BlogSection;