import React from 'react'
import { Dropdown } from 'react-bootstrap';

const DropdownMenu = ({ onDropdown }) => {
    return (
        <Dropdown onSelect={(href, event) => onDropdown(href, event)}>
            <Dropdown.Toggle variant="success" id="Dropdown-basic" className="dropdown_btn" style={{ marginBottom: "0px" }}>
                <p>Filter by Region</p>
                <i className="fas fa-chevron-down"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown_content" >
                <Dropdown.Item href="/africa">Africa</Dropdown.Item>
                <Dropdown.Item href="/america">Americas</Dropdown.Item>
                <Dropdown.Item href="/asia">Asia</Dropdown.Item>
                <Dropdown.Item href="/europe">Europe</Dropdown.Item>
                <Dropdown.Item href="/oceania">Oceania</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownMenu;
