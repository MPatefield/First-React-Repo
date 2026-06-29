import heroImg from './assets/hero.png'
import './App.css'
import ProfileCard from './Profilecard'

function App() {

  const profiles = [
    { name: "Matthew Patefield", image: heroImg, jobTitle: "Software Engineer", bio: "Passionate about creating innovative web applications." 
    },
    { name: "John Doe", image: heroImg, jobTitle: "Product Manager", bio: "Dedicated to driving product innovation and growth." 
    },
    { name: "Jane Smith", image: heroImg, jobTitle: "UX Designer", bio: "Focused on creating user-friendly and visually appealing designs."}
  ]
  return (
   <div>
    {profiles.map((profile) => (
      <ProfileCard key={profile.name} name={profile.name} image={profile.image} jobTitle={profile.jobTitle} bio={profile.bio} />
    ))}
   </div>
  )
}

export default App
