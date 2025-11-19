"use client";
import Image from 'next/image';
import React from 'react';

const BlogCard = ({ blog }) => {
    return (
        <div>
            <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-96 shadow-sm">
                <figure>
                   <Image width={384} height={200} src={blog.image} alt={blog.title}></Image>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {blog.category}
                    </h2>
                    <p>{blog.title}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;