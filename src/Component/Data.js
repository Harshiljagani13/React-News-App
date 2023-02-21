import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Data = () => {
    const params = useParams();
    const { id } = params;
    const [data, setData] = useState({});
    useEffect(() => {
        getDatabyId();
    });
    const getDatabyId = async (data) => {
        await axios
            .get('https://timenews.co.in/wp-json/wp/v2/posts/' + id, data)
            .then((res) => {
                // console.log(res.data)
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <h2 dangerouslySetInnerHTML={{ __html: data?.title?.rendered }} className="mt-2 fw-bold"></h2>
            <p dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} className=""></p>
        </>
    );
};
//content.rendered
export default Data;
