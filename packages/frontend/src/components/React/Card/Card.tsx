import React from 'react';
export interface Props {
	title: string;
	body: string;
	href?: string;
    image: string;
    children: React.ReactNode
}
import styles from './Card.module.css';

function Card(props: Props) {
	const { href, title, body, children } = props;
    return (
        <li className={styles.linkCard}>
            <div>
                <h2>
                    {title}
                </h2>
                <p>
                    {body}
                </p>
                {children}
                {href && <div className={styles.container}> <a className={styles.button} href={title}>Sing den Banger &rarr;</a></div>}
            </div>
        </li>
    );
}
export default Card

