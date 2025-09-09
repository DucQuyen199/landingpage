import {
  MicrophoneIcon,
  PlaneIcon,
  SatelitteIcon,
  SelectionIcon,
  SettingsIcon,
  TaxiIcon,
  WaterSportIcon,
} from "./components/icons";

export const MENU = [
  {
    id: 1,
    name: "目的地",
    link: "#destinations",
  },
  {
    id: 2,
    name: "酒店",
    link: "#",
  },
  {
    id: 3,
    name: "航班",
    link: "#",
  },
  {
    id: 4,
    name: "预订",
    link: "#",
  },
];

export const SERVICES = [
  {
    id: 1,
    title: "精准天气预报",
    description: "以更长的角度欣赏巴顿的虚荣本身。",
    icon: <SatelitteIcon />,
  },
  {
    id: 2,
    title: "最佳航班",
    description: "专注聆听。公园门口在西边卖得很辛苦。",
    icon: <PlaneIcon />,
  },
  {
    id: 3,
    title: "本地活动",
    description:
      "巴顿的虚荣本身就在其中。更喜欢让人专心聆听。",
    icon: <MicrophoneIcon />,
  },
  {
    id: 4,
    title: "个性化定制",
    description:
      "我们为军事客户提供外包航空服务",
    icon: <SettingsIcon />,
  },
];

export const DESTINATIONS = [
  {
    id: 1,
    name: "罗马，意大利",
    price: "¥38,000",
    description: "10天旅行",
    image: "images/italy.png",
  },
  {
    id: 2,
    name: "伦敦，英国",
    price: "¥29,400",
    description: "12天旅行",
    image: "images/london.png",
  },
  {
    id: 3,
    name: "全欧洲",
    price: "¥105,000",
    description: "28天旅行",
    image: "images/europe.png",
  },
];

export const BOOK_TRIP = [
  {
    id: 1,
    title: "选择目的地",
    description:
      "选择您梦想中的旅行目的地，我们将为您提供最佳的旅行建议和行程安排。",
    icon: <SelectionIcon />,
    color: "#F0BB1F",
  },
  {
    id: 2,
    title: "支付费用",
    description:
      "通过我们安全便捷的支付系统，完成您的旅行预订，享受无忧的付款体验。",
    icon: <WaterSportIcon />,
    color: "#F15A2B",
  },
  {
    id: 3,
    title: "在指定日期到达机场",
    description:
      "按照预定计划，准时到达机场，开始您的精彩旅程，探索世界的美妙。",
    icon: <TaxiIcon />,
    color: "#006380",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "李明",
    text: "旅行体验非常棒，服务人员非常专业，行程安排合理，让我们的家庭旅行充满了美好的回忆。一定会再次选择这家公司。",
    location: "上海，中国",
    image: "images/person1.jpg",
  },
  {
    id: 2,
    name: "王华",
    text: "作为经常出差的商务人士，我非常欣赏他们的高效和专业。从预订到旅行结束，每一个细节都处理得很好。",
    location: "红石科技 CEO",
    image: "images/person2.jpg",
  },
  {
    id: 3,
    name: "张丽",
    text: "价格合理，服务一流。我们的欧洲之旅非常顺利，所有的住宿和交通都安排得非常妥当。强烈推荐给所有人！",
    location: "北京，中国",
    image: "images/person3.jpg",
  },
];

export const LOGOS = [
  {
    id: 1,
    name: "Axon Airlanes",
    logo: "images/logos/axon.png",
  },
  {
    id: 2,
    name: "Jetstar",
    logo: "images/logos/jetstar.png",
  },
  {
    id: 3,
    name: "Expedia",
    logo: "images/logos/expedia.png",
  },
  {
    id: 4,
    name: "Qantas",
    logo: "images/logos/qantas.png",
  },
  {
    id: 5,
    name: "Alitalia",
    logo: "images/logos/alitalia.png",
  },
];

export const FOOTER = [
  {
    id: 1,
    name: "公司",
    children: [
      {
        id: 11,
        name: "关于我们",
        link: "#",
      },
      {
        id: 12,
        name: "职业机会",
        link: "#",
      },
      {
        id: 13,
        name: "移动应用",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    name: "联系我们",
    children: [
      {
        id: 21,
        name: "帮助/常见问题",
        link: "#",
      },
      {
        id: 22,
        name: "新闻中心",
        link: "#",
      },
      {
        id: 23,
        name: "合作伙伴",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    name: "更多",
    children: [
      {
        id: 31,
        name: "航空费用",
        link: "#",
      },
      {
        id: 32,
        name: "航空公司",
        link: "#",
      },
      {
        id: 33,
        name: "低价技巧",
        link: "#",
      },
    ],
  },
];