// export const home = {
//     home: {
//       greeting: "Hello,", 
//       message: "Welome to my resume!",
//       },
//       resume: "http://localhost:5000/ahmedResume"
//   }

const PORT = process.env.PORT || 5000

const URL = (process.env.ENV === 'development')
  ? `localhost:${PORT}`
  : 'https://a4ayad-resume.herokuapp.com'

export const home = {
    overview: 'Welcome to my Resume API. Please click on the link below, or type "npx demo-2-node" from your terminal',
    resume: `${URL}`
    // summary : `${URL}/basics"`,
    // skills: `${URL}/skills`,
    // education: `${URL}/education`
}