import Image from "next/image";
import { BsTelephoneFill} from "react-icons/bs"
import { AiOutlineShoppingCart} from "react-icons/ai"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <BsTelephoneFill width="32" height="32"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}> ORDER NOW      </div>
                    <div className={styles.text}>   234 9032276546   </div>
                </div>
            </div>
            <div className={styles.item}>
<ul className={styles.list}>
<li className={styles.listItem}>Home</li>
<li className={styles.listItem}>Products</li>
<li className={styles.listItem}>Menu</li>

<li className={styles.listItem}>Events</li>
<li className={styles.listItem}>Blog</li>
<li className={styles.listItem}>Contact</li>

</ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>

<AiOutlineShoppingCart size={40}/>
<div className={styles.counter}>2</div>
                </div>

            </div>
          
        </div>
    )
}

export default Navbar
