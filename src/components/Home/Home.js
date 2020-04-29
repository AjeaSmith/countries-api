import React, { Fragment, useState, useEffect } from 'react'
import { searchByName, fetchCountries, dropdownFilter } from '../../api';
import Search from './Search';
import Countries from './Countries';
import DropdownMenu from './DropdownMenu';

const Home = () => {
    const [searchField, setSearchField] = useState("");
    const [data, setdata] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetchCountries();
            setdata(response);
        }
        fetchAPI();
    }, []);

    const onInputChange = (value) => {
        return setSearchField(value);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await searchByName(searchField);
        if (!response) {
            return setdata([]);
        } else {
            setSearchField("");
            return setdata(response);
        }
    }
    const onDropdown = async (href, event) => {
        event.preventDefault();
        const response = await dropdownFilter(event.target.innerText);
        return setdata(response);
    }
    return (
        <Fragment>
            <main>
                <div className="main_wrapper">
                    <div className="form_filter">
                        <Search search={{ onInputChange, onSubmit, searchField }} />
                        <DropdownMenu onDropdown={onDropdown} />
                    </div>
                    <Countries data={data} />
                </div>
            </main>
        </Fragment>
    )
}
export default Home;