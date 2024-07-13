
import ReviewItem from './ReviewItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomerReviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'John Doe',
            text: 'This keyboard is amazing! It feels great to type on and looks fantastic.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ymu7uVmjL4SXLpbox_aXSml1EOxgeyZ7lEoG89gPT3m0SipIkI5f3IM264XDR2GhAIo&usqp=CAU'
        },
        {
            id: 2,
            name: 'Jane Smith',
            text: 'I\'m impressed with the quality and design of this keyboard. Highly recommended!',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ymu7uVmjL4SXLpbox_aXSml1EOxgeyZ7lEoG89gPT3m0SipIkI5f3IM264XDR2GhAIo&usqp=CAU'
        },
        {
            id: 3,
            name: 'Alex Johnson',
            text: 'Excellent customer service and a top-notch product. Will buy again!',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ymu7uVmjL4SXLpbox_aXSml1EOxgeyZ7lEoG89gPT3m0SipIkI5f3IM264XDR2GhAIo&usqp=CAU'
        }
    ];


    return (
        <div className="mt-8">

            {reviews.map(review => (
                <div key={review.id}>
                    <ReviewItem name={review.name} text={review.text} imageUrl={review.imageUrl} />
                </div>
            ))}

        </div>
    );
};

export default CustomerReviews;
