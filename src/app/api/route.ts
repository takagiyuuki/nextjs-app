import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: Request) {
  const headersList = headers();
  const cookieStore = cookies();

  console.log('headersList', headersList);
  console.log('cookieStore', cookieStore);
  
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  console.log(name);
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return NextResponse.json(data);
}
