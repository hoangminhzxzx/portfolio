import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  laravel,
  php,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  heli,
  physcode,
  storepify,
  maxsale,
  maxsalepopup,
  diana,
  liquid,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "Shopify Developer",
    icon: shopify,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "liquid",
    icon: liquid,
  }
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Helitech",
    icon: heli,
    iconBg: "#383E56",
    date: "10/2020 - 10/2021",
    points: [
      // "Developing and maintaining web applications using PHP, Laravel framework and other related technologies.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Tham gia phát triển sản phẩm ứng dụng web sử dụng Laravel, Codeigniter 4, Yii 2, và các công nghệ liên quan đến Frontend.",
      "Xử lý các yêu cầu công việc từ công ty giao phó."
    ],
  },
  {
    title: "Shopify Developer",
    company_name: "Physcode",
    icon: physcode,
    iconBg: "#E6DEDD",
    date: "11/2021 - 02/2023",
    points: [
      "Phát triển Shopify Theme và Shopify App.",
      "Triển khai Shopify Theme đảm bảo đáp ứng đúng thiết kế, responsive, các tính năng Theme có thể có.",
      "Triển khai Shopify App theo yêu cầu, mục đích của công ty. Phát triển dựa trên công nghệ React, Laravel.",
      "Xử lý các yêu cầu công việc từ công giao phó.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shopify Theme - Storepify",
    description:
      "Theme trên nền tảng Shopify, cung cấp cho những khách hàng muốn sử dụng Shopify Theme",
    tags: [
      {
        name: "liquid",
        color: "green-text-gradient",
      },
      {
        name: "html|Css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "orange-text-gradient",
      },
    ],
    image: storepify,
    link_project: 'https://storepify.thimpress.com/'
  },
  {
    name: "MaxSale",
    description:
      "MaxSale là một ứng dụng độc quyền được tạo cho khách hàng của Shopify. MaxSale giúp người bán trên Shopify có thêm doanh thu nhờ lưu lượng truy cập tăng thêm.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: maxsale,
    link_project: "https://apps.shopify.com/maxsale"
    // source_code_link: "https://github.com/",
  },
  {
    name: "MaxSale Popup",
    description:
      "MaxSale là giải pháp hiển thị popup của store. Tăng tỷ lệ chuyển đổi bằng cách giảm các giỏ hàng bị bỏ rơi và cung cấp chiết khấu hấp dẫn.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: maxsalepopup,
    link_project: "https://apps.shopify.com/maxsale-popup"
    // source_code_link: "https://github.com/",
  },
  {
    name: "Diana Authentic",
    description:
      "Dự án cá nhân, build database các phần Products, collection, customers, orders dựa theo Shopify",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: diana,
    link_project: "https://dianaauthentic.com/admin/login"
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
