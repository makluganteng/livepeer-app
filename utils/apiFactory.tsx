import axios from "axios";

export const createStream = (apiKey: string) => {
  axios.post('https://livepeer.studio/api/stream',{
    name: "test_stream",
    profiles: [
      {
        name: "720p",
        bitrate: 2000000,
        fps: 30,
        width: 1280,
        height: 720,
      },
      {
        name: "480p",
        bitrate: 1000000,
        fps: 30,
        width: 854,
        height: 480,
      },
      {
        name: "360p",
        bitrate: 500000,
        fps: 30,
        width: 640,
        height: 360,
      },
    ],
  },
  {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
  }).then((res)=>{
    console.log(res)
  })
}

// export const createStream = async(req: Request, res: Response) => {
//   if (req.method === "POST") {
//     const authorizationHeader = req.headers && req.headers["authorization"];
//     const streamName = req.body && req.body.name;
//     const streamProfiles = req.body && req.body.profiles;

//     try {
//       const createStreamResponse = await axios.post(
//         "https://livepeer.com/api/stream",
//         {
//           name: streamName,
//           profiles: streamProfiles,
//         },
//         {
//           headers: {
//             "content-type": "application/json",
//             authorization: authorizationHeader, // API Key needs to be passed as a header
//           },
//         }
//       );

//       if (createStreamResponse && createStreamResponse.data) {
//         res.statusCode = 200;
//         res.json({ ...createStreamResponse.data });
//       } else {
//         res.statusCode = 500;
//         res.json({ error: "Something went wrong" });
//       }
//     } catch (error) {
//       res.statusCode = 500;

//       // Handles Invalid API key error
//       if (error.response.status === 403) {
//         res.statusCode = 403;
//       }
//       res.json({ error });
//     }
//   }
// };


