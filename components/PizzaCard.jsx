import Image from 'next/image';
import React from 'react';
import styles from '../styles/Pizzacard.module.css'

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="500" height="500"/>
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>Price: $19.99</span>
            <p className={styles.desc}>Made with pride. Natural ingridents sourced from Africa</p>
        </div>
    )
}

export default PizzaCard
