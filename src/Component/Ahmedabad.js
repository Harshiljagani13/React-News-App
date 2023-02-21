import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link, Outlet } from 'react-router-dom';

function Ahmedabad() {
    useEffect(() => {
        getAllNews();
    });

    const [news1, setNews1] = useState([]);
    const getAllNews = async () => {
        await axios.get('https://timenews.co.in/wp-json/wp/v2/posts?categories=3').then((res) => {
            setNews1(res.data);
        });
    };
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div>
            {news1.map((value) => (
                <div className="mb-3 container">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={value.yoast_head_json.og_image[0].url} className="img-fluid rounded-start image1" alt="random" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{value.title.rendered}</h5>
                                <p className="card-text">{value.excerpt.rendered}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center" onSubmit={handleSubmit}>
                    <li className="page-item">
                        <Link className="page-link" to="/ahmedabad">
                            Previous
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="/ahmedabad">
                            1
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="/ahmedabad2">
                            2
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="/ahmedabad3">
                            3
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="/ahmedabad2++">
                            Next
                        </Link>
                    </li>
                </ul>
                <Outlet />
            </nav>
        </div>
    );
}

export default Ahmedabad;
