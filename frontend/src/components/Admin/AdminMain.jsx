import React, { useState, useEffect } from "react";
import styles from "./AdminMain.module.css";

const AdminMain = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/admin/Login";
    };

    return (
        <div className={styles.admin_main_container}>
            <nav className={styles.admin_nav}>
                <h1>Xebia Admin!</h1>
                <div className={styles.nav_right}>
                    <div className={styles.clock}>
                        {time.toLocaleTimeString()}
                    </div>
                    <button className={styles.grey_btn} onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </nav>
            <footer className={styles.footer}>
                <p>
                    Contact us: <a href="mailto:dev@xebia.com" className={styles.contact_link}>dev@xebia.com</a> | Phone: (123) 456-7890
                </p>
            </footer>
        </div>
    );
};

export default AdminMain;
