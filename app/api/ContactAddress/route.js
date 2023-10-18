import { NextResponse } from "next/server";

export async function POST() {
  const address = {
    title: [
      {
        title: "Address",
      },
    ],
    address: [
      {
        id: 1,
        icon: "https://cdn0.iconfinder.com/data/icons/interface-line-4/48/Location_pin_marker-64.png",
        content: "Ghanshyam Nagar,Talaaav Road ,Bharasar,Bhuj, 370030",
      },
      {
        id: 2,
        icon: "https://cdn0.iconfinder.com/data/icons/media-and-communication-3/64/communication-telephone-phone-call-64.png",
        content: "+91-91043 20987",
      },
      {
        id: 3,
        icon: "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/mail_email_inbox_message-2-64.png",
        content: "varsaniranjani@gmail.com",
      },
    ],
  };
  return NextResponse.json(address);
}
