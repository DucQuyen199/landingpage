import React, { useEffect, useRef } from 'react';

const Hero = ({ currentSlide, setCurrentSlide }) => {
  const wheelTimeoutRef = useRef(null);
  const isScrollingRef = useRef(false);
  const heroRef = useRef(null);
  
  const slides = [
    {
      title: "Spark More",
      video: "https://www.youtube.com/embed/2zoc_6nsGKQ?autoplay=1&mute=1&loop=1&playlist=2zoc_6nsGKQ&controls=0&showinfo=0&rel=0&modestbranding=1",
      subtitle: "Discover the Future of Gaming",
      type: "video"
    },
    {
      title: "Game Experience",
      image: "https://images.stockcake.com/public/2/6/1/26172ae3-7a56-4150-ab33-982cbf7a6a00_large/immersive-gaming-experience-stockcake.jpg",
      subtitle: "Connect with Millions of Players",
      type: "experience",
      description: "NDQ Games is committed to providing abundant and high-quality game experience for players, so that players can not only gain happiness in games, but also experience multiple identities, make friends and appreciate multicultures. NDQ Games constantly improves the game quality and expand game categories in order to create the ultimate game experience and accompany players to discover the infinite possibilities of gaming fun."
    },
    {
      title: "Game Technology",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQGONywovUMRWQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698987869996?e=2147483647&v=beta&t=jV7DPGI8TLbPbdi2HYqKhMKlCNLd61C6kblS23XwGRY",
      subtitle: "Immersive Gaming Worlds",
      type: "technology",
      description: "NDQ Games always focuses on the breakthrough and application of new technologies to enrich game experience. Through our continuous technological revolution and innovative way of thinking, games will better connect the virtual reality with the real world, so as to spark people's imagination for future digital life. Meanwhile, we carry out cross-disciplinary exchanges and cooperations with innovative technologies, thus connecting more diverse application scenarios and releasing new forms and new values in the game industry as well as other industries.",
      link: "Game Technology and Its Application"
    },
    {
      title: "Game Responsibility",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=1920&q=80",
      subtitle: "Join the Esports Revolution",
      type: "responsibility",
      description: "NDQ Games is not only committed to offering players a more diversified gaming experience, but also hopes to use games as a carrier and platform to guard positive values, spread humanistic care and inspire more positive social energy in society. NDQ Games keeps exploring the role of games in the society, and actively fulfills social missions.",
      links: [
        "Exploration of Social Value",
        "NDQ Institute of Games",
        "NDQ Coding"
      ]
    },
    {
      title: "Game Culture",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcjVOrO9MTCrHvjx8j4W-cOKu3-OyjChuFaGUHEtSbaib-wUBUrrq5TsFTwLmFXXS2yYlg3edPElmGlmWRgNv-m9JoHZBP-pRClYlz8SP07DXzXoyFxhgZZNkX8dmqlIvN7sd6NFA=w1200-h630-p-k-no-nu?key=8Brx0ZueeCx25g8d5JB07sh8",
      subtitle: "Build Your Gaming Legacy",
      type: "culture",
      description: "Game culture starts from games. NDQ Games bridges the gap between culture and life in a digital way, helping various traditional cultures to have modern expressions. NDQ Games enters the lives of players and more young people to create Chinese cultural symbols.",
      links: [
        "TGC",
        "Game Cultural Creation"
      ]
    },
    {
      title: "Game Value",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&q=80",
      subtitle: "Cross-Platform Gaming Experience",
      type: "value",
      cards: [
        {
          image: "https://d3r5yd0374231.cloudfront.net/images-tek/uploads/2025/02/parent-scaled-1.jpg",
          title: "Use game technology to help innovation an...",
          category: "Latest Exploration",
          date: "2022/6"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaHkQP6W83I6CFn1JDCsebaJuPRijA4rnQgaMxt6ydq1dfLOtRjd9o55nZq-rss39-J0&usqp=CAU",
          title: "Games are becoming a super digital scene",
          category: "Strategic Release",
          date: "2021/5"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1vapuXPQkHCWLlGd6BhZoCUEiO6BkGzsaQ&s",
          title: "Brand upgrade of NDQ games.",
          category: "Brand Upgrade",
          date: "2019/11"
        }
      ]
    }
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      if (!heroRef.current) return;

      // Check if hero section is in viewport
      const rect = heroRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!isInViewport) return;

      // Prevent default scroll behavior
      e.preventDefault();

      // Clear existing timeout
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }

      // Debounce to prevent rapid slide changes
      wheelTimeoutRef.current = setTimeout(() => {
        if (isScrollingRef.current) return;
        
        isScrollingRef.current = true;

        if (e.deltaY > 0) {
          // Scroll down - next slide
          setCurrentSlide((prev) => {
            const next = (prev + 1) % slides.length;
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 800);
            return next;
          });
        } else if (e.deltaY < 0) {
          // Scroll up - previous slide
          setCurrentSlide((prev) => {
            const next = prev === 0 ? slides.length - 1 : prev - 1;
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 800);
            return next;
          });
        }
      }, 150);
    };

    // Add wheel event listener to window
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup
    return () => {
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
      window.removeEventListener('wheel', handleWheel);
    };
  }, [setCurrentSlide, slides.length]);

  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden pt-32">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background - Different for Video, Experience, Technology, and Responsibility slides */}
          {slide.type === 'video' ? (
            <div className="absolute inset-0">
              <iframe
                src={slide.video}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Background Video"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'scale(1.5)',
                }}
              />
            </div>
          ) : slide.type === 'experience' ? (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-700">
              <div 
                className="absolute inset-0 opacity-30 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            </div>
          ) : slide.type === 'technology' ? (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700">
              <div 
                className="absolute inset-0 opacity-30 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            </div>
          ) : slide.type === 'responsibility' ? (
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-pink-400 to-red-500">
              <div 
                className="absolute inset-0 opacity-30 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            </div>
          ) : slide.type === 'culture' ? (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-purple-600">
              <div 
                className="absolute inset-0 opacity-30 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            </div>
          ) : slide.type === 'value' ? (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900">
              <div 
                className="absolute inset-0 opacity-20 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            </div>
          ) : (
            <div 
              className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-[5000ms] ease-out"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
              }}
            />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          
          {/* Content - Different layout for Experience and Technology slides */}
          {slide.type === 'experience' ? (
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white italic leading-tight mb-8 transform transition-all duration-700"
                style={{
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                Game<br />Experience
              </h1>
              <p 
                className="text-base md:text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-32 transition-all duration-700 delay-100"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {slide.description}
              </p>
              
              {/* Bottom Navigation Links */}
              <div 
                className="flex gap-12 text-white transition-all duration-700 delay-200"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <button className="text-lg md:text-xl font-light hover:opacity-80 transition-opacity flex items-center gap-2">
                  Games <span className="text-2xl">›</span>
                </button>
                <button className="text-lg md:text-xl font-light hover:opacity-80 transition-opacity flex items-center gap-2">
                  Annual Conference <span className="text-2xl">›</span>
                </button>
              </div>
            </div>
          ) : slide.type === 'technology' ? (
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white italic leading-tight mb-8 transform transition-all duration-700"
                style={{
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                Game<br />Technology
              </h1>
              <p 
                className="text-base md:text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-32 transition-all duration-700 delay-100"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {slide.description}
              </p>
              
              {/* Bottom Single Link */}
              <div 
                className="text-white transition-all duration-700 delay-200"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <button className="text-lg md:text-xl font-light hover:opacity-80 transition-opacity flex items-center gap-2">
                  {slide.link} <span className="text-2xl">›</span>
                </button>
              </div>
            </div>
          ) : slide.type === 'responsibility' ? (
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white italic leading-tight mb-8 transform transition-all duration-700"
                style={{
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                Game<br />Responsibility
              </h1>
              <p 
                className="text-base md:text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-24 transition-all duration-700 delay-100"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {slide.description}
              </p>
              
              {/* Bottom Three Links */}
              <div 
                className="flex flex-wrap gap-x-12 gap-y-4 text-white transition-all duration-700 delay-200"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {slide.links && slide.links.map((link, linkIndex) => (
                  <button 
                    key={linkIndex}
                    className="text-lg md:text-xl font-light hover:opacity-80 transition-opacity flex items-center gap-2"
                  >
                    {link} <span className="text-2xl">›</span>
                  </button>
                ))}
              </div>
            </div>
          ) : slide.type === 'culture' ? (
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white italic leading-tight mb-8 transform transition-all duration-700"
                style={{
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                Game<br />Culture
              </h1>
              <p 
                className="text-base md:text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-32 transition-all duration-700 delay-100"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {slide.description}
              </p>
              
              {/* Bottom Two Links */}
              <div 
                className="flex flex-wrap gap-x-12 gap-y-4 text-white transition-all duration-700 delay-200"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {slide.links && slide.links.map((link, linkIndex) => (
                  <button 
                    key={linkIndex}
                    className="text-lg md:text-xl font-light hover:opacity-80 transition-opacity flex items-center gap-2"
                  >
                    {link} <span className="text-2xl">›</span>
                  </button>
                ))}
              </div>
            </div>
          ) : slide.type === 'value' ? (
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white italic leading-tight mb-16 transform transition-all duration-700"
                style={{
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                Game<br />Value
              </h1>
              
              {/* Cards Grid */}
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-100"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {slide.cards && slide.cards.map((card, cardIndex) => (
                  <div 
                    key={cardIndex}
                    className="group bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    {/* Card Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-white text-lg font-medium mb-4 line-clamp-2">
                        {card.title}
                      </h3>
                      <div className="flex justify-between items-center text-sm text-white/70">
                        <span>{card.category}</span>
                        <span>{card.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto w-full">
              <h1 
                className="text-7xl md:text-8xl lg:text-9xl font-bold text-white italic tracking-tight mb-6 transform transition-all duration-700"
                style={{
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {slide.title}
              </h1>
              <p 
                className="text-xl md:text-2xl text-white/90 font-light tracking-wide transition-all duration-700 delay-100"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {slide.subtitle}
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === currentSlide
                  ? 'border-white bg-white scale-125'
                  : 'border-white/50 bg-transparent hover:border-white hover:scale-110'
              }`}
            />
            {index === currentSlide && (
              <div className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap">
                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {slides[index].title}
                </span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Bottom Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

