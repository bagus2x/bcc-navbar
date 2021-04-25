import React, {useState} from 'react';
import {Navbar, Toolbar, NavItem, NavMenu, Grow, NavLogo, NavIcon, NavSearch} from './Navbar';
import {ReactComponent as BCCLogo} from './assets/BCC_logo.svg';
import {ReactComponent as Search} from './assets/Search.svg';
import {ReactComponent as IG} from './assets/ig.svg';
import {ReactComponent as Twitter} from './assets/twitter.svg';
import {ReactComponent as Linkedin} from './assets/linkedin.svg';
import {ReactComponent as Bar} from './assets/Bar.svg';
import SearchInput from './Search';
import './reset.css';

function App() {
    const [visibleSearch, setVisibleSearch] = useState(false);
    const [text, setText] = useState('');
    const [item, setItem] = useState(-1);

    return (
        <div>
            <div>
                <Navbar position="static">
                    <Toolbar>
                        <NavLogo hide="xsDown">
                            <BCCLogo />
                        </NavLogo>
                        <NavLogo hide="smUp">
                            <Bar />
                        </NavLogo>
                        <NavMenu hide="smDown">
                            <NavItem onClick={() => setItem(1)} active={item === 1}>
                                Nav Item 1
                            </NavItem>
                            <NavItem onClick={() => setItem(2)} active={item === 2}>
                                Nav Item 2
                            </NavItem>
                            <NavItem onClick={() => setItem(3)} active={item === 3}>
                                Nav Item 3
                            </NavItem>
                        </NavMenu>
                        <Grow />
                        <NavSearch open={visibleSearch}>
                            <SearchInput
                                value={text}
                                handleChange={e => setText(e.target.value)}
                                handleClear={() => setText('')}
                            />
                        </NavSearch>
                        <NavMenu gap={16}>
                            <NavIcon onClick={() => setVisibleSearch(!visibleSearch)}>
                                <Search />
                            </NavIcon>
                            <NavIcon hide="smDown">
                                <IG />
                            </NavIcon>
                            <NavIcon hide="smDown">
                                <Twitter />
                            </NavIcon>
                            <NavIcon hide="smDown">
                                <Linkedin />
                            </NavIcon>
                        </NavMenu>
                    </Toolbar>
                </Navbar>
            </div>
            <div style={{height: 50}}></div>
            <div>
                <Navbar position="static">
                    <Toolbar>
                        <NavLogo hide="xsDown">
                            <BCCLogo />
                        </NavLogo>
                        <NavLogo hide="smUp">
                            <Bar />
                        </NavLogo>
                        <NavMenu hide="smDown">
                            <NavItem onClick={() => setItem(1)} active={item === 1}>
                                Nav Item 1
                            </NavItem>
                            <NavItem onClick={() => setItem(2)} active={item === 2}>
                                Nav Item 2
                            </NavItem>
                            <NavItem onClick={() => setItem(3)} active={item === 3}>
                                Nav Item 3
                            </NavItem>
                        </NavMenu>
                        <Grow />
                        <NavSearch open={visibleSearch}>
                            <SearchInput
                                value={text}
                                handleChange={e => setText(e.target.value)}
                                handleClear={() => setText('')}
                            />
                        </NavSearch>
                        <NavMenu gap={16}>
                            <NavIcon onClick={() => setVisibleSearch(!visibleSearch)}>
                                <Search />
                            </NavIcon>
                        </NavMenu>
                    </Toolbar>
                </Navbar>
            </div>
            <div style={{height: 50}}></div>
            <div>
                <Navbar>
                    <Toolbar>
                        <NavLogo hide="smUp">
                            <Bar />
                        </NavLogo>
                        <NavMenu hide="smDown">
                            <NavItem onClick={() => setItem(1)} active={item === 1}>
                                Nav Item 1
                            </NavItem>
                            <NavItem onClick={() => setItem(2)} active={item === 2}>
                                Nav Item 2
                            </NavItem>
                            <NavItem onClick={() => setItem(3)} active={item === 3}>
                                Nav Item 3
                            </NavItem>
                        </NavMenu>
                        <Grow />
                        <NavSearch open={visibleSearch}>
                            <SearchInput
                                value={text}
                                handleChange={e => setText(e.target.value)}
                                handleClear={() => setText('')}
                            />
                        </NavSearch>
                        <NavMenu gap={16}>
                            <NavIcon onClick={() => setVisibleSearch(!visibleSearch)}>
                                <Search />
                            </NavIcon>
                            <NavIcon hide="smDown">
                                <IG />
                            </NavIcon>
                            <NavIcon hide="smDown">
                                <Twitter />
                            </NavIcon>
                            <NavIcon hide="smDown">
                                <Linkedin />
                            </NavIcon>
                        </NavMenu>
                    </Toolbar>
                </Navbar>
            </div>
        </div>
    );
}

export default App;
