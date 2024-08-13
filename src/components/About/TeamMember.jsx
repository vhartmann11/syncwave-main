import styles from "../../styles/About/Team.module.scss"

const TeamMember = ({ name, role, imgSrc, altText, description }) => (
    <div className={styles.TeamMember}>
        <div>
            <img src={imgSrc} alt={altText} />
        </div>
        <div>
            <h3>{name}</h3>
            <h4>{role}</h4>
            <p>{description}</p>
        </div>
    </div>
);

export default TeamMember