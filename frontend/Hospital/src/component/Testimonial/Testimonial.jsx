import React, { useEffect, useState } from 'react';
import { getTestimonials } from '../dashboard/api';
import { FaPlay, FaQuoteLeft, FaTimes, FaRegCommentDots } from 'react-icons/fa';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Error loading testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const getEmbedUrl = (url) => {
    if (!url) return '';
    let videoId = '';
    if (url.includes('v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 pt-24 pb-16 block relative z-10">
      {/* Hero Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-blue-600 uppercase tracking-widest text-sm font-bold bg-blue-50 px-4 py-1.5 rounded-full">
          Patient Stories
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mt-4 mb-4">
          Voices of Recovery & Hope
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Real stories of healing and resilience from the families who trusted Mallika Hospital with their healthcare journeys.
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Main Grid View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-3">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-slate-500 font-medium">Loading inspirational stories...</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm max-w-xl mx-auto p-8">
            <FaRegCommentDots className="text-slate-300 size-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-700">No Testimonials Public Yet</h3>
            <p className="text-slate-500 mt-2">Check back soon to read updates from our amazing patient community.</p>
          </div>
        ) : (
          <div className="w-full columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 block clearfix">
            {testimonials.map((item) => {
              const videoLink = item.video_url || item.media_url;

              return (
                <div
                  key={item.id}
                  className="break-inside-avoid bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* VIDEO LAYOUT CARD */}
                  {item.testimonial_type === 'video' ? (
                    <div 
                      className="relative aspect-video w-full bg-slate-900 cursor-pointer overflow-hidden"
                      onClick={() => setActiveVideo(getEmbedUrl(videoLink))}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10"></div>
                      <img 
                        src={`https://img.youtube.com/vi/${videoLink?.split('v=')[1]?.split('&')[0] || 'dQw4w9WgXcQ'}/hqdefault.jpg`}
                        alt={item.patient_name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />
                      
                      {/* Pulse Floating Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="size-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-blue-700 transition-all duration-200 group-hover:scale-110 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
                          <FaPlay className="ml-1 text-lg" />
                        </div>
                      </div>
                      
                      <span className="absolute top-4 left-4 z-20 bg-red-600 text-white font-bold text-xs px-2.5 py-1 rounded-md uppercase tracking-wider">
                        Video Review
                      </span>
                    </div>
                  ) : (
                    /* IMAGE QUOTE CARD ACCENT LAYOUT */
                    item.image_file && (
                      <div className="w-full overflow-hidden max-h-64">
                        <img
                          src={item.image_file}
                          alt={item.patient_name}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                      </div>
                    )
                  )}

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <FaQuoteLeft className="text-blue-100 size-8 mb-2" />
                      <p className="text-slate-600 leading-relaxed italic mb-6 text-[15px]">
                        "{item.review_text}"
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-slate-800 text-base">{item.patient_name}</h4>
                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-0.5">
                          {item.department} Patient
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* LIGHTBOX YOUTUBE MODAL OVERLAY */}
      {activeVideo && (
        <div 
          className="fixed inset-0 bg-slate-950/90 z-[999] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in cursor-pointer"
          onClick={() => setActiveVideo(null)} // ✅ Fallback: Clicking the background overlay closes the video
        >
          {/* Global Close Button: Placed outside the card frame so it is safe from overflow-hidden clipping */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents double triggers from bubbling up
              setActiveVideo(null);
            }}
            className="absolute top-6 right-6 text-white hover:text-slate-300 bg-slate-800/80 hover:bg-slate-700/90 p-3 rounded-full transition-all duration-200 z-[1000] focus:outline-none shadow-xl border border-slate-700/50 cursor-pointer"
            aria-label="Close Video"
          >
            <FaTimes size={22} />
          </button>

          {/* Video Player Card Frame Container */}
          <div 
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video cursor-default"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the player container directly
          >
            <iframe
              src={activeVideo}
              title="Patient Testimonial Video Player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;