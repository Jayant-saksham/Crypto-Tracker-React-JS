import { AppBar, Button, Container, createTheme, IconButton, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const useStyles = makeStyles({
        title: {
            flex: 1,
            color: 'gold',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: 'Montserrat'
        },
    });

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            type: 'dark',
        },
    });
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position="static">
                <Container>
                    <Toolbar>
                        <Typography className={classes.title} onClick={() => navigate('/')}>
                            FlyDeck Krypto
                        </Typography>
                        <Select variant="outlined" style={{
                            height: 40,
                            width: 100
                        }}>
                            <MenuItem value="INR">INR</MenuItem>
                            <MenuItem value="USD">USD</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header