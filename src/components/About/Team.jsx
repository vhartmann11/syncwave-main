import React from 'react';
import styles from "../../styles/About/Team.module.scss";
import teamMembers from '../../data/teamMembers.json';
import TeamMember from './TeamMember';
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const Team = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")

        }
    })

    return (
        <section ref={ref} className={styles.Team}>
            <motion.div
            variants={{
                hidden: { opacity: 0, y: 175 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2.5, delay: .875 }}>
                <div className={styles.Header}>
                    <h2> conheça
                        <span> nossa equipe!</span>
                    </h2>
                </div>
                <div className={styles.TeamGrid}>
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            role={member.role}
                            imgSrc={member.imgSrc}
                            altText={member.altText}
                            description={member.description}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Team;
