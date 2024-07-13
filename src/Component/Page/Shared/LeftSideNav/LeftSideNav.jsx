import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setCategories(data))
            .catch(error => console.error('Fetching categories failed: ', error));
    }, []);

    return (
        <div className="space-y-4">
            <h2 className="text-3xl">All Categories</h2>
            {categories.map(category => (
                <Link key={category.id} className="block ml-4 text-xl font-semibold">
                    {category.name}
                </Link>
            ))}
        </div>
    );
};

export default LeftSideNav;
