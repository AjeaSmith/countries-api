import React, { Fragment, useState } from 'react';
import "regenerator-runtime/runtime.js";
import './css/style.scss';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import NavBar from './components/Home/NavBar';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global/global';
import { lightTheme, darkTheme } from './theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
    const [theme, setTheme] = useState('light');

    const toggleDarkTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }
    return (
        <Router>
            <Fragment>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                    <GlobalStyles />
                    <NavBar toggleTheme={toggleDarkTheme} />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/detail/:id" component={Detail} />
                    </Switch>
                </ThemeProvider>
            </Fragment>
        </Router>
    )
}
export default App;