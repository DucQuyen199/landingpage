import React, { useState } from 'react';

const Games = () => {
  const [selectedCategory, setSelectedCategory] = useState('self-development');
  const [selectedSubCategory, setSelectedSubCategory] = useState('client-game');

  const categories = [
    {
      id: 'self-development',
      title: 'Self-development Products',
      subCategories: [
        { id: 'client-game', label: 'Client Game' },
        { id: 'mobile-game', label: 'Mobile Game' }
      ]
    },
    {
      id: 'release',
      title: 'Release Products',
      subCategories: [
        { id: 'client-game-release', label: 'Client Game' },
        { id: 'mobile-game-release', label: 'Mobile Game' }
      ]
    },
    {
      id: 'platform',
      title: 'Platform Products',
      subCategories: []
    }
  ];

  const gamesData = {
    'client-game': [
      {
        id: 1,
        title: "Undawn",
        subtitle: "Client Game",
        image: "https://www.undawn.game/images/card.png",
        description: "Explore, adapt, and survive in Undawn, an all-new open-world survival RPG developed by LightSpeed Studios for mobile and PC from Level Infinite.",
        fullDescription: "Embark on an adventure with other survivors four years after a worldwide disaster where hordes of infected roam a shattered world. Be one of the first to experience Undawn when the Closed Beta begins on April 3rd, 2023. Sign up via the official website now.",
        website: "#"
      },
      {
        id: 2,
        title: "QQ Flying Car",
        subtitle: "Client Game",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaitGst4FVaREOr2I09w01pQgFzJ3s6jxFXhUQryhF2dyfKCgtonaY4YYP3RcGpqqOSag&usqp=CAU",
        description: "QQ Flying Car is the first racing casual online game independently developed by Tencent, whose underlying architecture is based on PhysX, a world-leading physical engine.",
        fullDescription: "Thanks to Tencent's full effort to create a realistic driving environment for users, the game experience outshines similar products in the market. With 3D fashion character modeling, track themes of simplicity, fashion and fantasy, as well as a third-person trailing perspective, Tencent strives to create an immersive feeling for users. In May, 2011, the maximum number of simultaneous online accounts exceeded 2 million, making the QQ Flying Car the ninth popular product in the history of online games in China with over one million players online simultaneously.",
        website: "#"
      },
      {
        id: 3,
        title: "League of Legends",
        subtitle: "Client Game",
        image: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-47eb328eac5ddd63ebd096ded7d0d5ab",
        description: "League of Legends is a multiplayer online battle arena (MOBA) game where two teams of five players battle in player versus player combat.",
        fullDescription: "Each team occupies and defends their half of the map. Each of the ten players controls a character, known as a 'champion', with unique abilities and differing styles of play. During a match, champions become more powerful by collecting experience points, earning gold, and purchasing items to defeat the opposing team.",
        website: "#"
      },
      {
        id: 4,
        title: "Valorant",
        subtitle: "Client Game",
        image: "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-892482f9cbec5827c7c4989d7feb2bf1",
        description: "Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games.",
        fullDescription: "The game operates on an economy-round, objective-based, first-to-13 competitive format where you select a unique agent to play for the entirety of the match. Valorant combines precise gunplay with unique agent abilities to create a competitive environment where your skills truly matter.",
        website: "#"
      }
    ],
    'mobile-game': [
      {
        id: 5,
        title: "PUBG Mobile",
        subtitle: "Mobile Game",
        image: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/175452/Originals/pubg-la-gi-cach-choi-the-nao-choi-pubg-tren-pc-co-thu-vi-hon-tren-mobile-hay-khong%201.jpg",
        description: "The official PLAYERUNKNOWN'S BATTLEGROUNDS designed exclusively for mobile. Play free anywhere, anytime.",
        fullDescription: "PUBG MOBILE is an officially authorized mobile version of PLAYERUNKNOWN'S BATTLEGROUNDS. It is a survival shooter game where 100 players engage in intense battles on a massive map. Parachute onto a remote island, loot weapons and supplies, and fight to be the last one standing.",
        website: "#"
      },
      {
        id: 6,
        title: "Honor of Kings",
        subtitle: "Mobile Game",
        image: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/honor_of_kings_global_0_0e28b82dff.jpg",
        description: "Honor of Kings is a multiplayer online battle arena developed and published by TiMi Studio Group.",
        fullDescription: "Honor of Kings is one of the most popular mobile games in the world, featuring fast-paced 5v5 battles with stunning graphics and smooth gameplay. Choose from over 100 heroes, each with unique abilities and playstyles, and compete in thrilling matches.",
        website: "#"
      },
      {
        id: 7,
        title: "Call of Duty Mobile",
        subtitle: "Mobile Game",
        image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/call-of-duty-mobile-promo-art.jpg",
        description: "Call of Duty®: Mobile brings the action of the Call of Duty franchise to mobile devices.",
        fullDescription: "Experience iconic multiplayer maps and modes anytime, anywhere. Play fan-favorite modes like Team Deathmatch, Frontline, Free For All, Search and Destroy, Domination, Hardpoint and many more. Level up and earn epic rewards in Battle Royale mode.",
        website: "#"
      }
    ],
    'client-game-release': [
      {
        id: 8,
        title: "Apex Legends",
        subtitle: "Client Game",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgdVylACflzVaXIutTfiE66zStiHM28_Kfw&s",
        description: "Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment.",
        fullDescription: "Master an ever-growing roster of diverse Legends, deep tactical squad play and bold new innovations that level up the Battle Royale experience—all within a rugged world where anything goes. Welcome to the next evolution of Battle Royale.",
        website: "#"
      }
    ],
    'mobile-game-release': [
      {
        id: 9,
        title: "Mobile Legends",
        subtitle: "Mobile Game",
        image: "https://cellphones.com.vn/sforum/wp-content/uploads/2022/12/008102000_1624278462-Mobile_Legends_11.jpg",
        description: "Mobile Legends: Bang Bang is a multiplayer online battle arena mobile game.",
        fullDescription: "Join your friends in a brand new 5v5 MOBA showdown against real human opponents, Mobile Legends: Bang Bang! Choose your favorite heroes and build the perfect team with your comrades-in-arms! 10-second matchmaking, 10-minute battles. Laning, jungling, tower rushing, team battles, all the fun of PC MOBA and action games in the palm of your hand!",
        website: "#"
      }
    ]
  };

  const currentGames = gamesData[selectedSubCategory] || [];

  return (
    <section id="games" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-blue-950/50 backdrop-blur-sm border-r border-white/10 p-6 pt-44 space-y-8 fixed left-0 top-0 h-screen overflow-y-auto">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 
                className={`text-white font-semibold mb-3 text-sm cursor-pointer hover:text-cyan-300 transition-colors ${
                  selectedCategory === category.id ? 'text-cyan-300' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.title}
              </h3>
              <div className="space-y-2 ml-4">
                {category.subCategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSelectedSubCategory(sub.id);
                    }}
                    className={`block text-sm transition-colors ${
                      selectedSubCategory === sub.id
                        ? 'text-white font-medium'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 pt-40 pb-12">
            <h2 className="text-4xl font-bold text-white mb-8">
              {selectedCategory === 'self-development' && 'Self-development Products'}
              {selectedCategory === 'release' && 'Release Products'}
              {selectedCategory === 'platform' && 'Platform Products'}
            </h2>

            <div className="space-y-12">
              {currentGames.map((game) => (
                <div key={game.id} className="bg-blue-950/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row">
                    {/* Game Image */}
                    <div className="lg:w-96 h-64 lg:h-auto overflow-hidden">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Game Info */}
                    <div className="flex-1 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">{game.title}</h3>
                          <p className="text-cyan-300 text-sm font-medium">{game.subtitle}</p>
                        </div>
                        <a
                          href={game.website}
                          className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors group"
                        >
                          <span className="text-sm font-medium">Official Website</span>
                          <svg 
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                        {game.description}
                      </p>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {game.fullDescription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {currentGames.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-blue-900/50 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No Games Available</h3>
                <p className="text-gray-400">Check back later for more content in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
