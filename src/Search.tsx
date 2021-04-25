import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import {ReactComponent as CloseIcon} from './assets/Close.svg';

export interface SearchProps {
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    hintText?: string;
    clearValue?: boolean;
    handleChange?: React.ChangeEventHandler<HTMLInputElement>;
    handleClear?: () => void;
    style?: React.CSSProperties;
}

const FieldContainer = styled('div')`
    display: inline-flex;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

const FieldInput = styled('input')`
    display: inline-block;
    padding: 16px 48px;
    border: 1.5px solid #d8d8d8;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 14px;
    background-color: white;
    outline: none;
    min-width: 280px;
    height: 48px;

    &::placeholder {
        color: rgba(20, 48, 69, 0.5);
    }

    &:active,
    &:focus {
        border-color: #3598db;
        color: #143045;
    }

    &:disabled {
        cursor: not-allowed;
        border-color: #d8d8d8;
        background-color: #fbfbfb;

        &::placeholder {
            color: #d8d8d8;
        }
    }
`;

const Search: React.FC<SearchProps> = ({
    disabled,
    placeholder,
    hintText,
    handleChange,
    handleClear,
    clearValue,
    value,
    ...rest
}) => {
    return (
        <FieldContainer {...rest}>
            <SearchIcon style={{color: '#D8D8D8', position: 'absolute', left: '16px'}} />
            {value && (
                <CloseIcon onClick={handleClear} style={{position: 'absolute', right: '16px', cursor: 'pointer'}} />
            )}
            <FieldInput
                placeholder={placeholder}
                value={value}
                type="text"
                onChange={handleChange}
                disabled={disabled}
            />
        </FieldContainer>
    );
};

Search.defaultProps = {
    disabled: false,
    placeholder: 'Placeholder Text',
    hintText: '',
    clearValue: false,
    value: '',
};

export default Search;
