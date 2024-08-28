import React from 'react';

export default function News({ params }) {
    const filters = params.filters || [];

    console.log(filters);

    return (
        <div>
            <h1>News</h1>
            <ul>
                {filters.length > 0 ? (
                    filters.map((filter, index) => (
                        <li key={index}>{filter}</li>
                    ))
                ) : (
                    <li>No filters provided</li>
                )}
            </ul>
        </div>
    );
}
