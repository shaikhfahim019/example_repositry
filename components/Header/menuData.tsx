import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Corporate Training",
    newTab: false,
    path: "/corporate",
  },
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },  
  {
    id: 3,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Testinomial",
        newTab: false,
        path: "/testinomial",
      },
      {
        id: 35,
        title: "PrivecyPolicy",
        newTab: false,
        path: "/privecypolicy",
      },
      {
        id: 35,
        title: "TermsCondition",
        newTab: false,
        path: "/termscondition",
      },
      
    ],
  },
  
];

export default menuData;
