import { NextResponse } from "next/server";

export function POST(request) {
  const about_us = [
    {
      src: "https://cdn-iemok.nitrocdn.com/shKFQIhqmtPcYKyAdNbDrBqdXdAOsudW/assets/images/optimized/rev-6b308ac/wp-content/uploads/2014/11/banner_1.jpg",
    },
    {
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      skills: "Creative, Whimsical, Philosophical & Practical",
    },
    
      {
        desc1: "Sanchi’s relentless enthusiasm to push boundaries drives her to question, learn and grow. She is involved in projects from conceptualization to completion. Her innate sense of style, ability to blend in functionality with materials &aesthetics and whimsical imagination is her USP.",
        desc2: "Having trained under reputed architectural firm in (Ahmedabad) India. Sanchi, then ventured out to work independently and has more than 8 years of designing experienceand now has established her own firm with team of experts to fulfill all kinds of design requirements at one place, for its clients, making their lives more easy and beautiful.",
        desc3: "There is a lot to say about the firm and its work, but we would suggest checking our work portfolio, as we believe what they have said, “work speaks more than words”.",
      }

  ];
  return NextResponse.json(about_us);
}
