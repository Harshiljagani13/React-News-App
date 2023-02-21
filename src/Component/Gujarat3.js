import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Gujarat3() {
    useEffect(() => {
        getAllNews();
    });

    const [news1, setNews1] = useState([]);
    const getAllNews = async (data) => {
        await axios.get('https://timenews.co.in/wp-json/wp/v2/posts?categories=11&page=3', data).then((res) => {
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
                                <h5
                                    className="card-title fw-bold"
                                    dangerouslySetInnerHTML={{
                                        __html: value.title.rendered,
                                    }}
                                ></h5>
                                <p
                                    className="card-text"
                                    dangerouslySetInnerHTML={{
                                        __html: value.excerpt.rendered,
                                    }}
                                ></p>
                                <button className="btn btn-outline-danger">Read More...</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center" onSubmit={handleSubmit}>
                    <li className="page-item">
                        <NavLink className="page-link" to="/gujarat2">
                            Previous
                        </NavLink>
                    </li>
                    <li className="page-item">
                        <NavLink className="page-link" to="/gujarat">
                            1
                        </NavLink>
                    </li>
                    <li className="page-item">
                        <NavLink className="page-link" to="/gujarat2">
                            2
                        </NavLink>
                    </li>
                    <li className="page-item">
                        <NavLink className="page-link" to="/gujarat3">
                            3
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Gujarat3;
