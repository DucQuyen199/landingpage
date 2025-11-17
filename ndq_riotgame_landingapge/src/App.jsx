import CareersSection from './components/CareersSection'
import EntertainmentSection from './components/EntertainmentSection'
import Footer from './components/Footer'
import GamesSection from './components/GamesSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import NewsSection from './components/NewsSection'

const heroContent = {
  background:
    'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/48b067811f39c659aa6f5d230701846fde1ebcd4-1920x1080.jpg?auto=format&fit=crop&q=80&h=537&w=956&crop=center',
  badge: 'Thử Thách Của Ánh Chàng Vàng',
  title: 'Hoàng Hôn Lụi Tàn | Phim Ngắn Mùa 3 Năm 2025',
  description:
    'Nhiều thử thách mới, Zahems đi lạc biến mất. Xin Zhao phải đưa ra lựa chọn để bảo vệ Ionia trong phần mở đầu mùa giải 2025. Xem ngay hành trình đầy cảm xúc này trên YouTube.',
  primaryAction: 'Xem ngay',
  secondaryAction: 'Tìm hiểu thêm',
  details: {
    duration: '8 phút 36 giây',
    release: '13.11.2025',
    special: 'Đăng nhập để nhận biểu cảm độc quyền kỷ niệm phim ngắn mùa 3 cùng nhiều quà tặng trong trò chơi.',
  },
}

const featuredNews = {
  title: 'Thông Tin Về Game Changers Championship 2025',
  tag: 'Tin tức',
  image:
    'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/0e03e32ac9a845300031bde47d984fc6aaa9169a-1675x678.jpg?auto=format&fit=fill&q=80&w=1082',
  date: 'Nov 20 - 30, 2025',
  location: 'Seoul, South Korea',
}

const trendingNews = [
  {
    title: 'Phim Ngắn Mùa 3: Hoàng Hôn Lụi Tàn',
    tag: 'Tin tức',
    image:
      'https://i.ytimg.com/vi/MdIzHK7rico/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCihXmrAl-oGmoMKMvbVy7op4HIZQ',
  },
  {
    title: 'Chúc Mừng Sinh Nhật 15 Tuổi',
    tag: 'Tin tức',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIs99ql4dsCH-4_HqcbPF1nsWFmdbmWRDTPg&s',
  },
  {
    title: 'Phác Thảo Từ Nhà Phát Triển: ARAM',
    tag: 'Tin tức',
    image:
      'https://www.riotgames.com/darkroom/1000/969b79830fb10102f7e695200d2f1213:7a558b739e07c8f854c45eeb43e03b37/dd-aram-textless-banner.jpg',
  },
  {
    title: 'Video Âm Nhạc: Bài Hát Chủ Đề CKTG 2025',
    tag: 'Tin tức',
    image:
      'https://images.contentstack.io/v3/assets/blt5bbf10426bd0b51b/blt0f39c73f25a99768/65033d1e0375eed64ebb14f1/LOL_Worlds_Music.jpg?auto=webp&width=600',
  },
]

const games = [
  {
    name: 'VALORANT',
    image:
      'https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6',
  },
  {
    name: 'Teamfight Tactics',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZbun2yiiV23guZBudpkxja7tsY1194799fQ5zJwL1pzaeZQ_W8CMFBAFLAl-PR-OBEu7A8uOyM8qtpcyg5WoDywdowSMKUb3kFN_MVuk&s=10',
  },
  {
    name: 'Wild Rift',
    image:
      'https://img.redbull.com/images/c_crop,x_2375,y_0,h_5093,w_3819/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2020/12/18/dmia6rzooudlflj6jmb2/league-of-legends-wild-rift-is-here',
  },
  {
    name: 'Legends of Runeterra',
    image:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/legends_of_runeterra_live/8649509e05a1b002b7e04b7d6046c509c12b211a-1920x1080.jpg?fit=crop&crop=center&w=840&h=1080',
  },
  {
    name: '2XKO',
    image:
      'https://m.media-amazon.com/images/M/MV5BMDA2MWNiZjYtZmUzZS00M2NlLWI3MzktMzFiMDU3MGY2YjE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    name: 'Riftbound: League Legends',
    image:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/2d2bf39bb3b1c65497866b93f17c12e72c509efe-844x844.png',
  },
  {
    name: 'League of Legends: Wild Rift',
    image:
      'https://images.contentstack.io/v3/assets/blt5bbf10426bd0b51b/blt01b303a761654c34/65a7c96a1ecf3b544941ab02/LoL_WildRift_KeyArt.jpg?auto=webp&width=600',
  },
  {
    name: 'VALORANT Mobile',
    image:
      'https://images.contentstack.io/v3/assets/blt5bbf10426bd0b51b/blt9b3c55ce49963cf1/65a7c98b5cb985136b6f7b50/VCT_Arena.jpg?auto=webp&width=800',
  },
  {
    name: 'League of Legends',
    image:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/48b067811f39c659aa6f5d230701846fde1ebcd4-1920x1080.jpg?auto=format&fit=crop&q=80&h=537&w=956&crop=center',
  },
  {
    name: 'Convergence',
    image:
      'https://images.contentstack.io/v3/assets/blt5bbf10426bd0b51b/blt5db6f8f744e51b65/65a7c9dca4441477f287dfa6/Arcane_KeyArt.jpg?auto=webp&width=800',
  },
]

const entertainment = [
  {
    title: 'LoL Esports',
    image:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/f5e7c773d85e5ebad0710800f8c3e181ea02d074-1600x900.jpg?auto=format&fit=max&w=3840',
  },
  {
    title: 'VALORANT Champions Tour',
    image:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/aa4e2024b0703d12bdd07a32a759d77d4fa3b72d-1920x1080.jpg',
  },
  {
    title: 'Pro Circuit',
    image:
      'https://esportbet.com/wp-content/smush-webp/2025/07/TFT-Pro-Circuit-1024x585.jpg.webp',
  },
  {
    title: 'Arcane',
    image:
      'https://images.contentstack.io/v3/assets/blt5bbf10426bd0b51b/blt5db6f8f744e51b65/65a7c9dca4441477f287dfa6/Arcane_KeyArt.jpg?auto=webp&width=800',
  },
  {
    title: 'Valorant Game Changers',
    image:
      'https://images.contentstack.io/v3/assets/blt5bbf10426bd0b51b/bltc23af0f9abc0fd44/65a7ca024567a845bfe0d38f/VCT_Game_Changers.jpg?auto=webp&width=800',
  },
]

const platformIcons = {
  windows: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoft.svg',
  mac: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apple.svg',
  mobile: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googleplay.svg',
  console: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/xbox.svg',
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b10] via-[#11111a] to-[#0b0b10] pb-16">
      <Header />
      <main className="space-y-20 px-4 pt-28 sm:px-6 lg:px-10 xl:px-14">
        <HeroSection content={heroContent} />
        <NewsSection featured={featuredNews} trending={trendingNews} />
        <GamesSection games={games} />
        <EntertainmentSection items={entertainment} />
        <CareersSection />
      </main>
      <div className="px-4 sm:px-6 lg:px-10 xl:px-14">
        <Footer />
      </div>
    </div>
  )
}

export default App
