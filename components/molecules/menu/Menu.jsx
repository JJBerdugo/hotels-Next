"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./Menu.module.css";
import { useContext } from "react";
import { AppContext } from "@/app/store/CurrentProvider";
import Link from "next/link";

export const Bar = () => {
    const { currentPage } = useContext(AppContext);

    const title = (current) => {
        switch (current) {
            case "Detail":
                return "Detalle del Hotel";
            case "Home":
                return "Buscar Hotel";
            default:
                return "Bienvenidos";
        }
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={styles.containerMenu}>
                <Toolbar variant="dense" className={styles.contentOptionMenu}>
                    <h3>{title(currentPage)}</h3>
                    <Link href={"/"}>
                        <Typography
                            variant="h4"
                            component="div"
                            className={styles.labelMenu}
                        >
                            Home
                        </Typography>
                    </Link>
                    <Link href={"/reservas"}>
                        <Typography
                            variant="h4"
                            component="div"
                            className={styles.labelMenu}
                        >
                            Reserv
                        </Typography>
                    </Link>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
