import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

function Food() {
    useEffect(() => {
        getAllNews();
    });

    const [news1, setNews1] = useState([]);
    const getAllNews = async (data) => {
        await axios.get('https://timenews.co.in/wp-json/wp/v2/posts?categories=15', data).then((res) => {
            setNews1(res.data);
        });
    };
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
                                <Link to={`/data/${value.id}`}>
                                    <button className="btn btn-outline-danger">Read more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Food;
