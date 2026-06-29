function ProfileCard({ name, image, jobTitle, bio }) {
    return (
        <div>
            <h1>Profile Card</h1>
            <p>{name}</p>
            <img src={image} alt={name} />
            <p>{jobTitle}</p>
            <p>{bio}</p>
        </div>
    )
}

export default ProfileCard