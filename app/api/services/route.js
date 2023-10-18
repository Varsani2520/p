import { NextResponse } from "next/server";
import home from "./json/home.json";
import office from "./json/office.json";
import hotel from "./json/hotel.json";
import hospital from "./json/hospital.json";
import exhibition from "./json/exhibition.json";
import event from "./json/event.json";
import institution from "./json/institution.json";
import restaurant from "./json/restaurant.json";
import set from "./json/set.json";

// take one parameter here to get particular provider service
export async function POST(request) {
  const { id } = await request.json();
  if (id === 1) {
    return NextResponse.json(home);
  }
  if (id === 2) {
    return NextResponse.json(office);
  }
  if (id === 3) {
    return NextResponse.json(hotel);
  }
  if (id === 4) {
    return NextResponse.json(restaurant);
  }
  if (id === 5) {
    return NextResponse.json(hospital);
  }
  if (id === 6) {
    return NextResponse.json(institution);
  }
  if (id === 7) {
    return NextResponse.json(exhibition);
  }
  if (id === 8) {
    return NextResponse.json(set);
  }
  if (id === 9) {
    return NextResponse.json(event);
  }
  return NextResponse.json({ msg: `success of provider ${id}` });
}
