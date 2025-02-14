// import { NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs/server";
// import axios from "axios";

// export async function POST(req: Request) {
//   try {
//     const { userId } = await auth();
//     const body = await req.json();
//     const { prompt } = body;
//     if (!userId) return NextResponse.json("Unauthorized", { status: 401 });

//     if (!prompt) {
//       return NextResponse.json("Messages are required and must be an array.", {
//         status: 400,
//       });
//     }
//     headers: {
//       Authorization: `Bearer ${process.env.HUGGING_FACE_AUDIO_API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     const response = await axios(
// 			"https://api-inference.huggingface.co/models/facebook/musicgen-small",
//       prompt,
//       {headers:{
//         Authorization: `Bearer ${process.env.HUGGING_FACE_AUDIO_API_KEY}`,
//         "Content-Type": "application/json",
//       }}
// 		);
// 			const result = await response.blob();
// 			return result;
// 		}

//     return NextResponse.json({
//       role: "system",
//     });
//   } catch (error) {
//     console.log("Code error", error);
//     return NextResponse.json("Interal Server error", { status: 500 });
//   }
// }
