import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { NavLink, Outlet } from 'react-router-dom';

function Ahmedabad2() {
    useEffect(() => {
        getAllNews();
    });

    const [news1, setNews1] = useState([]);
    const getAllNews = async () => {
        await axios.get('https://timenews.co.in/wp-json/wp/v2/posts?categories=3&page=2').then((res) => {
            setNews1(res.data);
        });
    };
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div>
            {news1.map((value) => (
                <div>
                    <div className="container">
                        <div className="image-wrapper">
                            <img src={value.yoast_head_json.og_image[0].url} alt="Random" className="image1" />
                        </div>
                        <div className="text-wrapper">
                            <h5>{value.title.rendered}</h5>
                            <p>{value.excerpt.rendered}</p>
                        </div>
                    </div>
                </div>
            ))}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center" onSubmit={handleSubmit}>
                    <li className="page-item">
                        <NavLink className="page-link" href="/ahmedabad">
                            Previous
                        </NavLink>
                    </li>
                    <li className="page-item">
                        <NavLink className="page-link" href="/ahmedabad">
                            1
                        </NavLink>
                    </li>
                    <li className="page-item">
                        <NavLink className="page-link" href="/ahmedabad2">
                            2
                        </NavLink>
                    </li>
                    <li className="page-item">
                        <NavLink className="page-link" href="/ahmedabad3">
                            3
                        </NavLink>
                    </li>
                    <li className="page-item">
                        <NavLink className="page-link" href="/ahmedabad3">
                            Next
                        </NavLink>
                    </li>
                </ul>
                <Outlet />
            </nav>
        </div>
    );
}

export default Ahmedabad2;
