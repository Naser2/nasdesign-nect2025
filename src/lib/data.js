// // import sandraVideo from '../../public/sandra-video-1.png'
// // import exercisePageMobile from '../images/exercise_page_desktop.jpeg'
// // import exercisePageDesktop from '../images/exercise_page_desktop.jpeg'

// // import exercise1 from '../../public/excercise.1.webp'
// // import exercise2 from '../../public/excercise.2.webp'
// // import exercise3 from '../../public/excercise.3.webp'
// // import exercise4 from '../../public/excercise.4.webp'
// // import exercise5 from '../../public/excercise.5.webp'
// // import exercise6 from '../../public/excercise.6.webp'
// // import exercise7 from '../../public/excercise.7.webp'
// // import exerciseBackground from '../images/workoutEquipment.jpg'

// export const exercises = {
//   category: 'exercises',
//   // pageBackground: {
//   //   mobile: exercisePageMobile,
//   //   desktop: exercisePageDesktop,
//   // },
//   description:
//     'Great routiones carefully crafted for you to suit your body goals. ',
//     pageBackground: {
//       mobile: exerciseBackground.src,
//       desktop: exerciseBackground.src,
//     },
//   resources: [
//     {
//       id: 'Men',
//       title: 'Fitness Exercises',
//       // featured: true,
//       description:
//         'Fitness exercises are techniques used to develop strength, endurance, flexibility, and overall physical health. They involve practices to improve cardiovascular health, build muscle, and enhance mental well-being. Fitness exercises are shown to offer a number of physical and psychological execution like stress reduction, improved immunity, and enhanced mood. These exercises are essential for maintaining a healthy lifestyle and are practiced by people all over the world to achieve physical fitness and inner harmony.',

//       articles: [
//         {
//           category: 'Upper Body',
//           id: 1,
//           title: 'Wide Grip Pull Up',
//           featured: true,
//           imageUrl: '/reiki/track-2.jpeg',
//           description:
//             'The assisted wide grip pull up targets the upper back and biceps, helping to develop strength and improve posture.',
//           execution: [
//             'Builds upper body strength',
//             'Improves grip strength',
//             'Enhances back muscle definition',
//             'Boosts overall endurance',
//           ],
//           date: '2023-05-05',
//           stars: 4.5,
//           liked: false,
//           likes: 147,
//           equipment: ['Pull-up machine', 'Resistance bands'],
//         },

//         {
//           category: 'Upper Body',
//           id: 2,
//           title: 'Seated Cable Row',
//           featured: false,
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.1_turcgh.webp',
//           description:
//             'The seated cable row targets the middle back, aiding in developing thickness and improving posture.',
//           execution: [
//             'Strengthens the back',
//             'Enhances muscle symmetry',
//             'Improves posture',
//             'Increases pulling power',
//           ],
//           date: '2023-04-07',
//           stars: 4.7,
//           liked: false,
//           likes: 230,
//           equipment: ['Cable machine', 'Seated row attachment'],
//         },
//         {
//           category: 'Upper Body',
//           id: 3,
//           title: 'Dumbbell Chest Supported Row',
//           featured: false,
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.1_turcgh.webp',
//           description:
//             'The dumbbell chest supported row targets the upper back and rear deltoids, providing a great exercise for overall back development.',
//           execution: [
//             'Enhances upper back strength',
//             'Reduces strain on lower back',
//             'Improves shoulder stability',
//             'Increases muscle definition',
//           ],
//           date: '2023-05-01',
//           stars: 4.8,
//           liked: false,
//           likes: 742,
//           equipment: ['Dumbbells', 'Incline bench'],
//         },

//         {
//           id: 4,
//           title: 'Lat Pull Down',
//           featured: false,
//           category: 'Upper Body',
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.1_turcgh.webp',
//           description:
//             'The lat pull down targets the latissimus dorsi muscles, aiding in building a wider and stronger back.',
//           execution: [
//             'Develops lat muscles',
//             'Improves upper body strength',
//             'Enhances posture',
//             'Increases back width',
//           ],
//           date: '2023-04-09',
//           stars: 4.6,
//           liked: false,
//           likes: 5852,
//           equipment: ['Lat pull down machine', 'Lat bar'],
//         },
//         {
//           id: 18,
//           title: 'Barbell Rows',
//           featured: false,
//           category: 'Upper Body',
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.1_turcgh.webp',
//           description:
//             'Barbell rows target the middle and upper back, helping to build overall back strength and thickness.',
//           execution: [
//             'Strengthens back muscles',
//             'Improves posture',
//             'Increases pulling power',
//             'Builds muscle thickness',
//           ],
//           date: '2023-04-09',
//           stars: 4.5,
//           liked: false,
//           likes: 15852,
//           equipment: ['Barbell', 'Weight plates'],
//         },
//         {
//           id: 19,
//           title: 'Tricep Rope Pull Down',
//           featured: false,
//           category: 'Upper Body',
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.1_turcgh.webp',
//           description:
//             'The tricep rope pull down targets the triceps, aiding in building arm strength and muscle definition.',
//           execution: [
//             'Builds tricep muscles',
//             'Improves arm strength',
//             'Enhances muscle definition',
//             'Increases overall arm size',
//           ],
//           date: '2023-05-10',
//           stars: 4.3,
//           liked: false,
//           likes: 3852,
//           equipment: ['Cable machine', 'Rope attachment'],
//         },
//         {
//           id: 20,
//           title: 'Cable Rope Bicep Curls',
//           featured: false,
//           category: 'Upper Body',
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.1_turcgh.webp',
//           description:
//             'Cable rope bicep curls target the biceps, providing a great exercise for arm strength and muscle growth.',
//           execution: [
//             'Strengthens bicep muscles',
//             'Improves arm definition',
//             'Increases arm size',
//             'Enhances muscle endurance',
//           ],
//           date: '2023-05-15',
//           stars: 4.4,
//           liked: false,
//           likes: 4250,
//           equipment: ['Cable machine', 'Rope attachment'],
//         },
//       ],
//     },
//     {
//       id: 'Women',
//       title: 'Fitness Exercises',
//       // featured: true,
//       description:
//         'Fitness exercises are techniques used to develop strength, endurance, flexibility, and overall physical health. They involve practices to improve cardiovascular health, build muscle, and enhance mental well-being. Fitness exercises are shown to offer a number of physical and psychological execution like stress reduction, improved immunity, and enhanced mood. These exercises are essential for maintaining a healthy lifestyle and are practiced by people all over the world to achieve physical fitness and inner harmony.',
//       articles: [
//         {
//           category: 'Lower Body',
//           id: 5,
//           title: 'Hip Thrust',
//           featured: true,
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.2-large_xn3eim.webp',
//           description:
//             'Hip thrusts target the glutes and hamstrings, helping to build lower body strength and enhance glute definition.',
//           execution: [
//             'Builds glute strength',
//             'Improves hip stability',
//             'Enhances lower body power',
//             'Increases muscle definition',
//           ],
//           date: '2023-04-10',
//           stars: 4.9,
//           liked: false,
//           likes: 852,
//           equipment: ['Barbell', 'Weight plates', 'Bench'],
//         },
//         {
//           category: 'Legs',
//           id: 6,
//           title: 'RDL (Romanian Deadlift)',
//           featured: false,
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.2-large_xn3eim.webp',
//           description:
//             'The Romanian deadlift targets the hamstrings and glutes, aiding in building strength and flexibility in the posterior chain.',
//           execution: [
//             'Strengthens hamstrings',
//             'Improves flexibility',
//             'Enhances lower back strength',
//             'Increases glute development',
//           ],
//           date: '2023-04-11',
//           stars: 4.8,
//           liked: false,
//           likes: 1623,
//           equipment: ['Barbell', 'Weight plates'],
//         },
//         {
//           id: 7,
//           title: 'Heel Elevated Squats',
//           featured: false,
//           category: 'Torso',
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.2-large_xn3eim.webp',
//           description:
//             'Heel elevated squats target the quadriceps and glutes, providing a great exercise for building leg strength and muscle definition.',
//           execution: [
//             'Strengthens quadriceps',
//             'Enhances glute development',
//             'Improves squat depth',
//             'Increases muscle definition',
//           ],
//           date: '2023-04-11',
//           stars: 4.7,
//           liked: false,
//           likes: 183,
//           equipment: ['Barbell', 'Weight plates', 'Heel elevation block'],
//         },
//         {
//           id: 8,
//           title: 'Back Extension (Glute Focus)',
//           featured: false,
//           category: 'Upper Body',
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.2-large_xn3eim.webp',
//           description:
//             'Back extensions with a glute focus target the lower back and glutes, aiding in building strength and stability.',
//           execution: [
//             'Strengthens lower back',
//             'Enhances glute muscles',
//             'Improves posture',
//             'Increases lower body endurance',
//           ],
//           date: '2023-04-11',
//           featured: true,
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.2-large_xn3eim.webp',
//           stars: 4.9,
//           liked: false,
//           likes: 417,
//           equipment: ['Back extension machine', 'Weight plate'],
//         },
//         {
//           id: 9,
//           title: 'Rope Kick Backs',
//           featured: false,
//           category: 'Lower',
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.2-large_xn3eim.webp',
//           description:
//             'Rope kick backs target the glutes, helping to build strength and improve muscle definition.',
//           execution: [
//             'Builds glute strength',
//             'Enhances muscle definition',
//             'Improves hip stability',
//             'Increases lower body power',
//           ],
//           date: '2023-04-11',
//           stars: 4.6,
//           liked: false,
//           likes: 119,
//           equipment: ['Cable machine', 'Ankle strap attachment'],
//         },
//         {
//           id: 10,
//           title: 'Dumbbell Step Up',
//           featured: false,
//           category: 'Lower Body',
//           imageUrl: 'https://res.cloudinary.com/dlrgyoeqq/image/upload/v1718929125/omari-hill/excercise.2-large_xn3eim.webp',
//           description:
//             'Dumbbell step ups target the quadriceps and glutes, providing a functional exercise for building lower body strength.',
//           execution: [
//             'Strengthens quadriceps',
//             'Enhances glute muscles',
//             'Improves balance',
//             'Increases lower body power',
//           ],
//           date: '2023-05-12',
//           stars: 4.7,
//           liked: false,
//           likes: 57,
//           equipment: ['Dumbbells', 'Step platform'],
//         },
//       ],
//     },
//   ],
// }

// const meditations = [
//   {
//     category: 'Meditation',
//     description:
//       'Meditation has been around for ages nad has countless of execution.',
//     description:
//       'Meditation is a technique used for thousands of years to develop awareness of the present moment.It can involve practices to sharpen focus and attention, connect to the body and breath, develop acceptance of difficult emotions, and even alter consciousness. It’s been shown to offer a number of physical and psychological execution like stress reductionTrusted Source and improved immunity.While many spiritual traditions include meditation as a part of their teachings and practices, the technique itself doesn’t belong to any particular religion or faith. Though ancient in origin, it’s still practiced today in cultures all over the world to create a sense of peace, calm, and inner harmony. Meditation may offer a solution to the growing need to reduce stress in the midst of busy schedules and demanding lives.',
//     execution: [
//       'improved emotional regulation',
//       'lower blood pressure',
//       'reduced stress',
//       'better sleep',
//       'increased focus',
//       'enhanced mood',
//       'reduced aggression',
//       'greater adaptability',
//       'healthier aging process',
//       'a greater sense of empathy and connection with others',
//     ],
//     resources: [
//       {
//         title: 'Spiritual meditation',

//         imageUrl:
//           'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//         description:
//           'The Mediterranean diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//         execution: [
//           'reduce blood pressure',
//           'reduce breast and colorectal cancer',
//           'Weight loss',
//           'Reduce Fatigue',
//         ],
//         date: '2023-04-14',
//       },
//     ],
//   },

//   {
//     title: 'Progressive relaxation',

//     imageUrl:
//       'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     description:
//       'The Mediterranean diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//     execution: [
//       'reduce blood pressure',
//       'reduce breast and colorectal cancer',
//       'Weight loss',
//       'Reduce Fatigue',
//     ],
//     date: '2023-04-15',
//   },
//   {
//     title: 'Focused meditation',

//     imageUrl:
//       'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     description:
//       'The Mediterranean diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//     execution: [
//       'reduce blood pressure',
//       'reduce breast and colorectal cancer',
//       'Weight loss',
//       'Reduce Fatigue',
//     ],
//     date: '2023-04-16',
//   },
//   {
//     visualizationMeditation: [
//       {
//         title: 'Visualization meditation ',

//         imageUrl:
//           'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//         description:
//           'Stress or Anxiety diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//         execution: [
//           'reduce blood pressure',
//           'reduce breast and colorectal cancer',
//           'Weight loss',
//           'Reduce Fatigue',
//         ],
//         date: '2023-04-17',
//       },
//     ],
//   },
// ]
// export const fitness = {
//   category: 'fitness',
//   description: 'Fintness in unarguably one of the best remedies.',
//   backgroundImage: '/sandra-video-2.jpeg',
//   execution: [
//     'improved emotional regulation',
//     'lower blood pressure',
//     'reduced stress',
//     'better sleep',
//     'increased focus',
//     'enhanced mood',
//     'reduced aggression',
//     'greater adaptability',
//     'healthier aging process',
//     'a greater sense of empathy and connection with others',
//   ],
//   resources: [
//     {
//       title: 'The 10-Minute Daily Workout To Shrink Abdominal.',
//       imageUrl: '/fitness/fit-1.png',
//       description:
//         'The 10-Minute Daily Workout To Shrink Abdominal Fat Fast, Trainer Says —  Eat This Not That',
//       execution: [
//         'reduce blood pressure',
//         'reduce breast and colorectal cancer',
//         'Weight loss',
//         'Reduce Fatigue',
//       ],
//       date: '2023-04-18',
//     },
//     {
//       title: 'Resistance press',
//       imageUrl: '/fitness/fit-3.png',
//       description:
//         'The Mediterranean diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//       execution: [
//         'reduce blood pressure',
//         'reduce breast and colorectal cancer',
//         'Weight loss',
//         'Reduce Fatigue',
//       ],
//       date: '2023-04-18',
//     },
//     {
//       title: '5 Core Workouts',
//       imageUrl: '/fitness/fit-2.png',
//       description:
//         'The Mediterranean diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//       execution: [
//         'reduce blood pressure',
//         'reduce breast and colorectal cancer',
//         'Weight loss',
//         'Reduce Fatigue',
//       ],
//       date: '2023-04-18',
//     },

//     {
//       title: 'Weight Lifting',
//       imageUrl: '/fitness/fit-4.png',
//       description:
//         'The Mediterranean diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//       execution: [
//         'reduce blood pressure',
//         'reduce breast and colorectal cancer',
//         'Weight loss',
//         'Reduce Fatigue',
//       ],
//       date: '2023-04-20',
//     },

//     {
//       title: 'Sit up',

//       imageUrl: '/fitness/fit-5.png',
//       description:
//         'The Mediterranean diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//       execution: [
//         'reduce blood pressure',
//         'reduce breast and colorectal cancer',
//         'Weight loss',
//         'Reduce Fatigue',
//       ],
//       date: '2023-04-21',
//     },

//     {
//       title: 'Omari interviews Gabby on High intensity Training execution',

//       imageUrl:
//         'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//       description:
//         'Stress or Anxiety diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//       execution: [
//         'reduce blood pressure',
//         'reduce breast and colorectal cancer',
//         'Weight loss',
//         'Reduce Fatigue',
//       ],
//       date: '2023-04-22',
//     },
//     {
//       title: 'Starring Jenny on Low impact training execution',

//       imageUrl: '/fitness/fit-6.png',
//       description:
//         'Stress or Anxiety diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//       execution: [
//         'reduce blood pressure',
//         'reduce breast and colorectal cancer',
//         'Weight loss',
//         'Reduce Fatigue',
//       ],
//       date: '2023-04-22',
//     },
//     {
//       title: 'Omari interviews Gabby on High intensity Training execution',

//       imageUrl: '/fitness/fit-7.png',
//       description:
//         'Stress or Anxiety diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//       execution: [
//         'reduce blood pressure',
//         'reduce breast and colorectal cancer',
//         'Weight loss',
//         'Reduce Fatigue',
//       ],
//       date: '2023-04-22',
//     },
//     {
//       title: 'Omari interviews Gabby on High intensity Training execution',

//       imageUrl: '/fitness/fit-8.png',
//       description:
//         'Stress or Anxiety diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//       execution: [
//         'reduce blood pressure',
//         'reduce breast and colorectal cancer',
//         'Weight loss',
//         'Reduce Fatigue',
//       ],
//       date: '2023-04-22',
//     },
//     {
//       title: 'Alteration execution',

//       imageUrl: '/fitness/fit-9.png',
//       description:
//         'Stress or Anxiety diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: vegetables',
//       execution: [
//         'reduce blood pressure',
//         'reduce breast and colorectal cancer',
//         'Weight loss',
//         'Reduce Fatigue',
//       ],
//       date: '2023-04-22',
//     },
//   ],
// }

// const therapyEpisodes = {
//   category: 'therapies',
//   description: 'This is ususally  led by group discussion by',

//   resources: [
//     {
//       title: 'Meditation Process by Omari',
//       source: '/Affirmations-by-jason.mp4',
//       // thumbnail: '/sandra-video-1.png',
//       //   // source: sandraVideo,
//       thumbnail: '/sandra-guided.png',
//       description:
//         "Ie'll show you how to meditate properly, the execution of regular meditation practice, and the styles of meditation. Free resources available.",
//       views: 8651,
//       likes: 2361,
//     },

//     {
//       title: 'What is gropup Therapy?',
//       source: '/WhatisGroupTherapy_v144P.mp4',
//       thumbnail: '/groupd-therapy-image.png',
//       description: 'Group Therapy Session: What it’s Really Like',
//       date: '2023-04-02',
//       views: 651,
//       likes: 367,
//     },
//     {
//       title: 'Group Therapy Session (34)',
//       source: '/GroupTherapy1.mp4',
//       thumbnail: '/sandra-video-2.jpeg',
//       description: 'Group Therapy Session: What it’s Really Like',
//       date: '2023-04-22',
//       views: 1421,
//       likes: 364,
//     },
//     {
//       title: 'Healing Sounds',
//       source: '/video-meditation.mp4',
//       thumbnail: '/beautiful-images/peace-montains.png',
//       description: 'GroupTherapySessionWhatits Really Like_144p.3gp',
//       views: 651,
//       likes: 262,
//     },
//     {
//       title: 'Reki Session by Omari ',
//       source: '/video-meditation.mp4',
//       thumbnail: '/reiki/WHATISREIKI.webp',
//       description: 'GroupTherapySessionWhatits Really Like_144p.3gp',
//       views: 151,
//       likes: 39,
//     },
//     {
//       title: 'Lets talk about Midlife Crisis &  and more.',
//       source: '/video-meditation.mp4',
//       thumbnail: '/sandra-coach.png',
//       description:
//         'In this episode, I tought i would be just about right to discuss the implications of midelife crisis and more on how our families strive to keep the fabric tha holds our ...',
//       views: 151,
//       likes: 39,
//     },
//   ],
// }
// const tracks = {
//   category: 'tracks',
//   description: 'Different fitness tracks to help you achieve your fitness goals.',
//   backgroundImage: '/tracks/tracks-bg.png',
//   programs: [
//     {
//       id: 234,
//       title: 'Slim Bodybuilding',
//       price: '$735',
//       href: '#',
//       bannerImage: {imageSrc: '/reiki/track-5.jpeg',  id: 234},
//       thumbnail: '/reiki/track-5.jpeg',
//       description: 'A program focused on building a lean and toned body through strategic workouts and diet plans.',
//       details: [
//         'Customized workout routines for all fitness levels',
//         'Combines strength, cardio, and flexibility exercises',
//         'Includes video tutorials and detailed instructions',
//         'Track your progress with our fitness app',
//       ],
//       date: '2023-04-6',
//       exercises: [], // Add exercises related to Slim Bodybuilding here
//       participants: [],
//       stars: 4.5,
//       liked: false,
//       likes: 147,
//       images: [
//         {
//           id: 1,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
//           imageAlt: "Back of women's Basic Tee in black.",
//           primary: true,
//         },
//         {
//           id: 2,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
//           imageAlt: "Side profile of women's Basic Tee in black.",
//           primary: false,
//         },
//         {
//           id: 3,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
//           imageAlt: "Front of women's Basic Tee in black.",
//           primary: false,
//         },
//       ],
//     },
//     { id:2345,
//       price: '$4235',
//       href: '#',
//       title: 'Brute Strength Powerlifting',
//       bannerImage: {imageSrc: '/reiki/track-4.jpeg',  id: 23234},
//       thumbnail: '/reiki/track-4.jpeg',
//       description: 'Designed for those looking to maximize their strength through powerlifting techniques and training regimens.',
//       details: [
//         'Customized workout routines for all fitness levels',
//         'Combines strength, cardio, and flexibility exercises',
//         'Includes video tutorials and detailed instructions',
//         'Track your progress with our fitness app',
//       ],
//       date: '2023-04-02',
//       exercises: [], // Add exercises related to Slim Bodybuilding here
//       participants: [],
//       stars: 4.5,
//       liked: false,
//       likes: 147,
//       images: [
//         {
//           id: 1,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
//           imageAlt: "Back of women's Basic Tee in black.",
//           primary: true,
//         },
//         {
//           id: 2,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
//           imageAlt: "Side profile of women's Basic Tee in black.",
//           primary: false,
//         },
//         {
//           id: 3,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
//           imageAlt: "Front of women's Basic Tee in black.",
//           primary: false,
//         },
//       ],
//     },
//     { id: 2434,
//       price: '$435',
//       href: '#',
//       title: 'Lose Fat & Shreds',
//       bannerImage: { imageSrc: '/reiki/track-3.jpeg',  id: 233234},
//       thumbnail: '/reiki/track-3.jpeg',
//       description: 'Focused on fat loss and achieving a shredded physique through high-intensity workouts and precise nutrition.',
//       details: [
//         'Customized workout routines for all fitness levels',
//         'Combines strength, cardio, and flexibility exercises',
//         'Includes video tutorials and detailed instructions',
//         'Track your progress with our fitness app',
//       ],
//       date: '2023-04-22',
//       exercises: [], // Add exercises related to Slim Bodybuilding here
//       participants: [],
//       stars: 4.5,
//       liked: false,
//       likes: 147,
//       images: [
//         {
//           id: 1,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
//           imageAlt: "Back of women's Basic Tee in black.",
//           primary: true,
//         },
//         {
//           id: 2,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
//           imageAlt: "Side profile of women's Basic Tee in black.",
//           primary: false,
//         },
//         {
//           id: 3,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
//           imageAlt: "Front of women's Basic Tee in black.",
//           primary: false,
//         },
//       ],
//     },
//     { id: 25535,
//       price: '$375',
//       href: '#',
//       title: 'High-Volume Training',
//       bannerImage: {imageSrc: '/reiki/track-2.jpeg',  id: 2333234},
//       thumbnail: '/reiki/track-2.jpeg',
//       description: 'A training regimen that involves high volume and intensity to build endurance and muscle mass.',
//       details: [
//         'Customized workout routines for all fitness levels',
//         'Combines strength, cardio, and flexibility exercises',
//         'Includes video tutorials and detailed instructions',
//         'Track your progress with our fitness app',
//       ],
//       date: '2023-04-22',
//       exercises: [], // Add exercises related to Slim Bodybuilding here
//       participants: [],
//       stars: 4.5,
//       liked: false,
//       likes: 147,
//       images: [
//         {
//           id: 1,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
//           imageAlt: "Back of women's Basic Tee in black.",
//           primary: true,
//         },
//         {
//           id: 2,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
//           imageAlt: "Side profile of women's Basic Tee in black.",
//           primary: false,
//         },
//         {
//           id: 3,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
//           imageAlt: "Front of women's Basic Tee in black.",
//           primary: false,
//         },
//       ],
//     },
//     { id: 237434,
//       title: 'Bulking',
//       price: '$535',
//       href: '#',
//       bannerImage: {imageSrc: '/reiki/track-1.webp', id: 23323234},
//       thumbnail: '/reiki/track-1.webp',
//       description: 'Aimed at gaining muscle mass through a combination of heavy lifting and increased caloric intake.',
//       details: [
//         'Customized workout routines for all fitness levels',
//         'Combines strength, cardio, and flexibility exercises',
//         'Includes video tutorials and detailed instructions',
//         'Track your progress with our fitness app',
//       ],
//       date: '2023-04-22',
//       exercises: [], // Add exercises related to Slim Bodybuilding here
//       participants: [],
//       stars: 4.5,
//       liked: false,
//       likes: 147,
//       images: [
//         {
//           id: 1,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
//           imageAlt: "Back of women's Basic Tee in black.",
//           primary: true,
//         },
//         {
//           id: 2,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
//           imageAlt: "Side profile of women's Basic Tee in black.",
//           primary: false,
//         },
//         {
//           id: 3,
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
//           imageAlt: "Front of women's Basic Tee in black.",
//           primary: false,
//         },
//       ],
//     },
//   ],
// };

// const data = [exercises, fitness, therapyEpisodes, tracks]
// export default data


