import { NextResponse } from "next/server";

export function POST(request) {
  const Home_data = {
    swiper: [
      {
        id: 1,
        name: "img1",
        src: "https://avatars.mds.yandex.net/i?id=eafd1737b111403bfc09e3ca8acaee3c-5629755-images-thumbs&n=13",
      },
      {
        id: 2,
        name: "img2",
        src: "https://avatars.mds.yandex.net/i?id=642e783dd229c6db85ad617ce7eb6e93-5220205-images-thumbs&n=13",
      },
      {
        id: 3,
        name: "img2",
        src: "https://avatars.mds.yandex.net/i?id=7f3058a36e71d442046dfeb736808fc1-4575357-images-thumbs&n=13",
      },
      {
        id: 4,
        name: "img2",
        src: "https://avatars.mds.yandex.net/i?id=4e8ef7756a61362cb3e9c5a87f03be21a8706410-10117685-images-thumbs&n=13",
      },
      {
        id: 5,
        name: "img2",
        src: "https://avatars.mds.yandex.net/i?id=7f167be84e75cf2b2e7607def3f77a3afe4060c3-8240946-images-thumbs&n=13",
      },
    ],
    title: [
      {
        title: "INTERIOR DESIGN SERVICES IN BHUJ",
      },
    ],
    card: [
      {
        id: 1,
        img: "https://cdn-icons-png.flaticon.com/128/2163/2163350.png",
        name: "home",
        title: "Home Interior Design",
        description:
          "We help you to create the perfect space with our <a>home interior design service. We are experts in concept development,client communication,planning,and work execution. these four pillars work together to form a combined proficiency.</a>",
        link: "",
        slug: "home-interior-design-services",
      },

      {
        id: 2,
        img: "https://cdn-icons-png.flaticon.com/128/7661/7661634.png",
        title: "Office Interior Design",
        description:
          "We help you to create the perfect space with our <a>home interior design service. We are experts in concept development,client communication,planning,and work execution. these four pillars work together to form a combined proficiency.</a>",
        slug: "office-interior-design-services1",
      },
      {
        id: 3,
        img: "https://cdn-icons-png.flaticon.com/128/594/594106.png",
        title: "Hotel Interior Design",
        description:
          "We help you to create the perfect space with our <a>home interior design service. We are experts in concept development,client communication,planning,and work execution. these four pillars work together to form a combined proficiency.</a>",
        slug: "hotel-interior-design-services",
      },
      {
        id: 4,
        img: "https://cdn-icons-png.flaticon.com/128/3170/3170733.png",
        title: "Restaurant Interior Design",
        description:
          "We help you to create the perfect space with our <a>home interior design service. We are experts in concept development,client communication,planning,and work execution. these four pillars work together to form a combined proficiency.</a>",
        slug: "restaurant-interior-design-services",
      },
      {
        id: 5,
        img: "https://cdn-icons-png.flaticon.com/128/3022/3022350.png",
        title: "Hospital Interior Design",
        description:
          "This category includes hotels, resorts, and other businesses that provide accommodations and services to travelers. Hospitality interior designers work to create spaces that are comfortable, inviting, and reflect the unique character of the business.",
        slug: "hospital-interior-design-services",
      },
      {
        id: 6,
        img: "https://cdn-icons-png.flaticon.com/128/10214/10214953.png",
        title: "institutional Interior Design",
        description:
          "This category includes schools, universities, libraries, museums, and other public buildings. Institutional interior designers work to create spaces that are both functional and inspiring, supporting the activities and goals of the institution.",
        slug: "institutional-interior-design-services",
      },
      {
        id: 7,
        img: "https://cdn-icons-png.flaticon.com/128/10836/10836240.png",
        title: "Exhibition Interior Design",
        description:
          " This category includes the design of exhibitions for museums, galleries, and other public spaces. Exhibition designers work with curators and other stakeholders to create informative and engaging exhibitions that tell a story and communicate ideas.",
        slug: "exhibition-interior-design-services",
      },
      {
        id: 8,
        img: "https://cdn-icons-png.flaticon.com/128/3724/3724667.png",
        title: "Set Design",
        description:
          " This category includes the design of sets for film, television, and theater productions. Set designers work with directors and producers to create visually appealing and realistic sets that support the narrative and atmosphere of the production.",
        slug: "set-design",
      },
      {
        id: 9,
        img: "https://cdn-icons-png.flaticon.com/128/2273/2273225.png",
        title: "Event Design",
        description:
          " This category includes the design of temporary spaces for events such as weddings, conferences, and trade shows. Event designers work with clients to create unique and memorable spaces that reflect the theme and tone of the event.",
        slug: "event-design",
      },
    ],
  };

  return NextResponse.json(Home_data);
}
