import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';

const Services = () => {
    const data = useLoaderData();
    const [filteredData, setFilteredData] = useState(data);
    const [filters, setFilters] = useState({
        priceRange: 'all',
        rating: 'all',
        category: 'all',
        sortBy: 'default'
    });
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    useEffect(() => {
        applyFilters();
    }, [filters, data]);

    const applyFilters = () => {
        let filtered = [...data];

        // Filter by price range
        if (filters.priceRange !== 'all') {
            filtered = filtered.filter(service => {
                const price = parseFloat(service.price);
                switch (filters.priceRange) {
                    case 'under25':
                        return price < 25;
                    case '25-50':
                        return price >= 25 && price <= 50;
                    case '50-100':
                        return price > 50 && price <= 100;
                    case 'over100':
                        return price > 100;
                    default:
                        return true;
                }
            });
        }

        // Filter by rating
        if (filters.rating !== 'all') {
            const minRating = parseFloat(filters.rating);
            filtered = filtered.filter(service => parseFloat(service.rating) >= minRating);
        }

        // Filter by category
        if (filters.category !== 'all') {
            filtered = filtered.filter(service =>
                service.category.toLowerCase().includes(filters.category.toLowerCase())
            );
        }

        // Sort
        switch (filters.sortBy) {
            case 'price-low':
                filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                break;
            case 'price-high':
                filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                break;
            case 'rating':
                filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
                break;
            default:
                break;
        }

        setFilteredData(filtered);
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const resetFilters = () => {
        setFilters({
            priceRange: 'all',
            rating: 'all',
            category: 'all',
            sortBy: 'default'
        });
    };

    const FilterSection = () => (
        <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
                <button
                    onClick={resetFilters}
                    className="text-sm text-green-700 hover:text-green-800 font-semibold"
                >
                    Reset All
                </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Category</h3>
                <div className="space-y-2">
                    {['all', 'grooming', 'walking', 'sitting', 'veterinary', 'training', 'nutrition'].map(cat => (
                        <label key={cat} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                            <input
                                type="radio"
                                name="category"
                                checked={filters.category === cat}
                                onChange={() => handleFilterChange('category', cat)}
                                className="w-4 h-4 text-green-600 focus:ring-green-500"
                            />
                            <span className="ml-2 text-gray-700 capitalize">{cat === 'all' ? 'All Services' : cat}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-3">Price Range</h3>
                <div className="space-y-2">
                    <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                            type="radio"
                            name="price"
                            checked={filters.priceRange === 'all'}
                            onChange={() => handleFilterChange('priceRange', 'all')}
                            className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-gray-700">All Prices</span>
                    </label>
                    <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                            type="radio"
                            name="price"
                            checked={filters.priceRange === 'under25'}
                            onChange={() => handleFilterChange('priceRange', 'under25')}
                            className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-gray-700">Under $25</span>
                    </label>
                    <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                            type="radio"
                            name="price"
                            checked={filters.priceRange === '25-50'}
                            onChange={() => handleFilterChange('priceRange', '25-50')}
                            className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-gray-700">$25 - $50</span>
                    </label>
                    <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                            type="radio"
                            name="price"
                            checked={filters.priceRange === '50-100'}
                            onChange={() => handleFilterChange('priceRange', '50-100')}
                            className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-gray-700">$50 - $100</span>
                    </label>
                    <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                            type="radio"
                            name="price"
                            checked={filters.priceRange === 'over100'}
                            onChange={() => handleFilterChange('priceRange', 'over100')}
                            className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-gray-700">Over $100</span>
                    </label>
                </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-3">Minimum Rating</h3>
                <div className="space-y-2">
                    {['all', '4.5', '4.0', '3.5', '3.0'].map(rating => (
                        <label key={rating} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                            <input
                                type="radio"
                                name="rating"
                                checked={filters.rating === rating}
                                onChange={() => handleFilterChange('rating', rating)}
                                className="w-4 h-4 text-green-600 focus:ring-green-500"
                            />
                            <span className="ml-2 text-gray-700">
                                {rating === 'all' ? 'All Ratings' : `${rating}+ ⭐`}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Sort By */}
            <div>
                <h3 className="font-semibold text-gray-700 mb-3">Sort By</h3>
                <select
                    value={filters.sortBy}
                    onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                </select>
            </div>
        </div>
    );

    return (
        <div className="bg-gray-50 w-11/12 mx-auto my-20 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Services</h1>
                    <p className="text-gray-600">
                        Showing {filteredData.length} of {data.length} services
                    </p>
                </div>

                {/* Mobile Filter Toggle */}
                <button
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                    className="lg:hidden mb-4 w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                    {showMobileFilters ? 'Hide Filters' : 'Show Filters'} 🔍
                </button>

                <div className="flex gap-8">
                    {/* Sidebar Filters */}
                    <aside className={`${showMobileFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 shrink-0`}>
                        <FilterSection />
                    </aside>

                    {/* Services Grid */}
                    <main className="flex-1">
                        {filteredData.length === 0 ? (
                            <div className="text-center py-16">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No services found</h3>
                                <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                                <button
                                    onClick={resetFilters}
                                    className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                                {filteredData.map(service => (
                                    <div
                                        key={service?.serviceId}
                                        className="mx-auto w-[350px] md:w-80 lg:w-[300px] bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden flex flex-col h-full"
                                    >
                                        {/* IMAGE */}
                                        <div className="h-48 w-full overflow-hidden">
                                            <img
                                                src={service?.image}
                                                alt={service?.serviceName}
                                                className="w-full h-full object-cover hover:scale-110 duration-300"
                                            />
                                        </div>

                                        {/* CONTENT */}
                                        <div className="p-5 flex flex-col grow">

                                            {/* TITLE */}
                                            <Link
                                                to={`/services/${service?.serviceId}`}
                                                className="text-lg font-semibold text-gray-900 hover:text-green-700 transition-colors line-clamp-2 min-h-12"
                                            >
                                                {service?.serviceName}
                                            </Link>

                                            {/* RATING + PRICE */}
                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center gap-1">
                                                    <span className="text-yellow-500 text-lg">⭐</span>
                                                    <span className="text-gray-700 font-medium">{service?.rating}</span>
                                                </div>

                                                <span className="text-2xl font-bold text-green-700">
                                                    ${service?.price}
                                                </span>
                                            </div>

                                            {/* BUTTON (sticks at bottom) */}
                                            <Link
                                                to={`/services/${service?.serviceId}`}
                                                className="mt-auto block w-full text-center py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Services;