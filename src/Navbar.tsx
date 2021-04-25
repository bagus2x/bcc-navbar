import React from 'react';
import styled from 'styled-components';
import {SearchProps} from './Search';

interface NavbarProps {
    position?: 'static' | 'sticky' | 'relative' | 'fixed';
}

interface GrowProps {
    flexGrow?: number;
}

type BreakPoints = 'xsDown' | 'smDown' | 'mdDown' | 'lgDown' | 'xlDown' | 'xsUp' | 'smUp' | 'mdUp' | 'lgUp' | 'xlUp';

interface NavMenuProps {
    gap?: 8 | 16 | number;
    hide?: BreakPoints;
}

interface NavItemProps {
    hide?: BreakPoints;
    active?: boolean;
}

interface NavIconProps {
    hide?: BreakPoints;
}

interface NavLogoProps {
    hide?: BreakPoints;
}

interface NavSearchProps extends SearchProps {
    open: boolean;
}

const breakPoints = (point?: BreakPoints) => {
    switch (point) {
        case 'xsDown':
            return 'max-width: 600px';
        case 'smDown':
            return 'max-width: 960px';
        case 'mdDown':
            return 'max-width: 1280px';
        case 'lgDown':
            return 'min-width: 1920px';
        case 'xlDown':
        case 'xsUp':
            return 'min-width: 0px';
        case 'smUp':
            return 'min-width: 600px';
        case 'mdUp':
            return 'min-width: 960px';
        case 'lgUp':
            return 'min-width: 1280px';
        case 'xlUp':
            return 'min-width: 1920px';
    }
};

export const Navbar = styled.nav<NavbarProps>`
    width: 100%;
    height: 64px;
    padding: 0 48px;
    position: ${props => props.position ?? 'fixed'};
    background: #3598db;
    box-sizing: border-box;
`;

export const Toolbar = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const ToolbarMixin = styled.div`
    height: 64px;
`;

export const NavMenu = styled.div<NavMenuProps>`
    display: flex;
    flex-direction: row;
    @media screen and (${props => breakPoints(props.hide)}) {
        display: none;
        visibility: hidden;
    }
    & > *:not(:last-child, :only-child),
    & > *:not([style*='display:none']) {
        margin-right: ${props => (props.gap ? `${props.gap}px` : '8px')};
    }
`;

export const NavLogo = styled.span<NavLogoProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-right: 24px;
    cursor: pointer;
    @media screen and (${props => breakPoints(props.hide)}) {
        display: none;
        visibility: hidden;
    }
`;

export const NavItem = styled.span<NavItemProps>`
    display: flex;
    height: 100%;
    align-items: center;
    padding: 22px 8px;
    box-sizing: border-box;
    color: #fff;
    user-select: none;
    transition: all 0.25s ease-in;
    overflow: hidden;
    font-weight: ${props => (props.active ? 'bold' : 'normal')};
    :hover {
        background: #5db7e6;
        cursor: pointer;
    }
    @media screen and (${props => breakPoints(props.hide)}) {
        display: none;
        visibility: hidden;
    }
`;

export const NavIcon = styled.span<NavIconProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (${props => breakPoints(props.hide)}) {
        display: none;
        visibility: hidden;
    }
`;

export const Grow = styled.div<GrowProps>`
    flex-grow: ${props => props.flexGrow ?? 1};
`;

export const NavSearch: React.FC<NavSearchProps> = ({children, open, ...rest}) => {
    return React.isValidElement(children) ? (
        React.cloneElement(children, {
            ...children.props,
            style: {
                transformOrigin: 'right center',
                transition: 'all 0.125s ease-in',
                transform: `scale(${open ? 1 : 0})`,
                opacity: open ? 1 : 0,
                marginRight: 24,
            },
            ...rest,
        })
    ) : (
        <>{children}</>
    );
};
