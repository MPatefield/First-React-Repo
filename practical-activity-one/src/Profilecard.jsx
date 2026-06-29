function ProfileCard({ name, image, jobTitle, bio }) {
    return (
        <div className="profile-card-container">
            <div className="profile-card">
                <h1 className="profile-card-title">Profile Card</h1>
                <p className="profile-card-name">{name}</p>
                <img src={image} alt={name} />
                <p className="profile-card-job-title">{jobTitle}</p>
                <p className="profile-card-bio">{bio}</p>
            </div>
        </div>
    )
}

export default ProfileCard