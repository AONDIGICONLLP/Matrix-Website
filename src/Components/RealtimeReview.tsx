import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

const PLACE_ID = "ChIJ_3_M3_0K-ToR_5u0X-7777I"; // SBH Hospital Place ID
const API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual key

const RealTimeReviews: React.FC = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Note: In production, call this via a backend to hide your API Key
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
        );
        const data = await response.json();
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div className="text-center py-10 text-gray-500 italic">Loading live patient feedback...</div>;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Live Patient Reviews</h2>
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
            Live Feed
          </span>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 6000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.profile_photo_url} 
                    alt={review.author_name} 
                    className="w-12 h-12 rounded-full mr-4 border"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{review.author_name}</h4>
                    <p className="text-xs text-gray-500">{review.relative_time_description}</p>
                  </div>
                </div>
                
                <div className="flex mb-3 text-yellow-500">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm flex-grow italic">
                  "{review.text.substring(0, 200)}{review.text.length > 200 ? '...' : ''}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RealTimeReviews;