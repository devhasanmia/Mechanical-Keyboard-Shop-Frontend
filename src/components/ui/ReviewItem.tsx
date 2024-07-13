// ReviewItem.jsx


const ReviewItem = ({ name, text, imageUrl }) => {
    return (
        <div className="p-4">
            <div className="bg-white grid rounded-lg shadow-lg p-6">
                {imageUrl && (
                    <div className="mb-4">
                        <img src={imageUrl} alt={name} className="w-16 h-16 rounded-full mx-auto" />
                    </div>
                )}
                <p className="text-gray-800 text-lg text-center mb-4">{text}</p>
                <p className="text-gray-600 text-sm text-center">{name}</p>
            </div>
        </div>
    );
};

export default ReviewItem;
