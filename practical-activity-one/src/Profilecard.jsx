import './Profilecard.css'

function ProfileCard({ name, image, jobTitle, bio }) {
    return (

        <div className="profile-card">
            <h2 className="profile-card-name">{name}</h2>
            <img src={image} alt={name} />
            <p>{jobTitle}</p>
            <p>{bio}</p>
        </div>

    )
}

export default ProfileCard