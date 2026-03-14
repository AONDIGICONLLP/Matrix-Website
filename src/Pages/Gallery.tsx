import React, { useState } from 'react';
import Header from '../Components/Header'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import AboutBg from "/assets/banner-bg.jpg";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

const IMAGES: GalleryImage[] = [
   /* Innogration */
  { id: 1, url: './assets/gallery/g1.png', title: 'Image 1', category: 'Innogration' },
  { id: 2, url: './assets/gallery/g2.png', title: 'Image 2', category: 'Innogration' },
  { id: 3, url: './assets/gallery/g3.png', title: 'Image 3', category: 'Innogration' },
  { id: 4, url: './assets/gallery/g4.png', title: 'Image 4', category: 'Innogration' },
  { id: 5, url: './assets/gallery/g5.png', title: 'Image 5', category: 'Innogration' },
  { id: 6, url: './assets/gallery/g6.png', title: 'Image 6', category: 'Innogration' },
  { id: 7, url: './assets/gallery/g7.png', title: 'Image 7', category: 'Innogration' },
  { id: 8, url: './assets/gallery/g8.png', title: 'Image 8', category: 'Innogration' },

/* Hospital */
  { id: 9, url: './assets/gallery/g9.JPG', title: 'Image 9', category: 'Hospital' },
  { id: 10, url: './assets/gallery/g10.JPG', title: 'Image 10', category: 'Hospital' },
  { id: 11, url: './assets/gallery/g11.JPG', title: 'Image 11', category: 'Hospital' },
  { id: 12, url: './assets/gallery/g12.JPG', title: 'Image 12', category: 'Hospital' },
  { id: 13, url: './assets/gallery/g13.JPG', title: 'Image 13', category: 'Hospital' },
  { id: 14, url: './assets/gallery/g14.JPG', title: 'Image 14', category: 'Hospital' },
  { id: 15, url: './assets/gallery/g15.JPG', title: 'Image 15', category: 'Hospital' },
  { id: 16, url: './assets/gallery/g16.JPG', title: 'Image 16', category: 'Hospital' },
  { id: 17, url: './assets/gallery/g17.JPG', title: 'Image 17', category: 'Hospital' },
  { id: 20, url: './assets/gallery/g20.JPG', title: 'Image 20', category: 'Hospital' },

];

const GalleryPage: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
    <SocialSticky />
    <Header/>
      <Breadcrumbs 
      items={[
        { label: "Gallery", 
          bg: AboutBg
        }
      ]}
      />
    <div className="container mx-auto p-8">
      <header className="mb-12 text-center">
        {/* <h1 className="text-4xl font-bold text-gray-800">Visual Portfolio</h1> */}
        {/* <p className="text-gray-600 mt-2">A collection of captured moments.</p> */}
      </header>

      {/* Responsive Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
        {IMAGES.map((image) => (
          <div 
            key={image.id} 
            className="relative group overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setSelectedImg(image.url)}
          >
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full rounded-lg shadow-2xl" 
            alt="Full size"
          />
          <button className="absolute top-5 right-5 text-white text-4xl">&times;</button>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default GalleryPage;