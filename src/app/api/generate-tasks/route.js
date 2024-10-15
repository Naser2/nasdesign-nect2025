// src/app/api/generate-tasks/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
  }

  const { projectName, description } = await req.json();

  if (!projectName || !description) {
    return NextResponse.json(
      { error: 'Project name and description are required.' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a project management assistant.',
          },
          {
            role: 'user',
            content: `Project title: ${projectName}, description: ${description}. Please generate phases and tasks for the project in a structured format, adhering to the JSON schema provided. Each phase should contain a title and a list of tasks with the "completed" flag set to false.`,
          },
        ],
        response_format: {
          type: 'json_object',  // Use 'json_object' instead of JSON schema with strict mode
        },
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json(
        { error: 'Error generating tasks', details: data },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}


// import { NextResponse } from 'next/server';

// export async function POST(req) {
//   const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

//   if (!OPENAI_API_KEY) {
//     return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
//   }

//   const { projectName, description } = await req.json();

//   if (!projectName || !description) {
//     return NextResponse.json(
//       { error: 'Project name and description are required.' },
//       { status: 400 }
//     );
//   }

//   try {
//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: 'gpt-4o-mini',
//         messages: [
//           {
//             role: 'system',
//             content: 'You are a project management assistant.',
//           },
//           {
//             role: 'user',
//             content: `Project title: ${projectName}, description: ${description}. Please generate phases and tasks for the project in a structured format, adhering to the JSON schema provided. Each phase should contain a title and a list of tasks with the "completed" flag set to false.`,
//           },
//         ],
//         response_format: {
//           type: 'json_schema',
//           json_schema: {
//             type: 'object',
//             properties: {
//               phases: {
//                 type: 'array',
//                 items: {
//                   type: 'object',
//                   properties: {
//                     title: { type: 'string' },
//                     tasks: {
//                       type: 'array',
//                       items: {
//                         type: 'object',
//                         properties: {
//                           task: { type: 'string' },
//                           completed: { type: 'boolean', default: false },
//                         },
//                         required: ['task', 'completed'],
//                       },
//                     },
//                   },
//                   required: ['title', 'tasks'],
//                 },
//               },
//             },
//             required: ['phases'],
//             additionalProperties: false,
//           },
//           strict: true,
//         },
//       }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       return NextResponse.json(data);
//     } else {
//       return NextResponse.json(
//         { error: 'Error generating tasks', details: data },
//         { status: response.status }
//       );
//     }
//   } catch (error) {
//     console.error('Error calling OpenAI API:', error);
//     return NextResponse.json(
//       { error: 'Internal Server Error', details: error.message },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from 'next/server';

// export async function POST(req) {
//   const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Access the API key from the environment

//   const { description, title } = await req.json(); // Parse incoming request data

//   try {
//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: 'gpt-4o-mini',
//         messages: [
//           { role: 'system', content: 'You are a helpful assistant.' },
//           {
//             role: 'user',
//             content: `Project title: ${title}, description: ${description}. Generate project phases and tasks.`,
//           },
//         ],
//       }),
//     });

//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ message: 'Error generating tasks', error }, { status: 500 });
//   }
// }
