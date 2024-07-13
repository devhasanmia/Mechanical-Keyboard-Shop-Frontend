
const TopFeaturedBrands = () => {
    // Sample data (replace with your actual data)
    const brands = [
        { id: 1, name: 'Bkash', logoUrl: 'https://www.swadeshpratidin.com/2024/01/24/VP_1706094096.jpg' },
        { id: 2, name: 'Nagad', logoUrl: 'https://www.bssnews.net/assets/news_photos/2022/02/04/image-42525-1643965434.jpg' },
        { id: 3, name: 'Bangladesh Bank', logoUrl: 'https://allresultbd.com/wp-content/uploads/2014/03/Bangladesh-Bank-logo.jpg' },
        { id: 3, name: 'Rocket', logoUrl: 'https://www.swadeshpratidin.com/2024/01/24/VP_1706094096.jpg' },
        // Add more brands as needed
    ];

    return (
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {brands.map(brand => (
                <div key={brand.id} className="flex flex-col items-center">
                    <img src={brand.logoUrl} alt={brand.name} className="h-16 w-auto mb-2" />
                    <span className="text-sm">{brand.name}</span>
                </div>
            ))}
        </div>
    );
};

export default TopFeaturedBrands;
