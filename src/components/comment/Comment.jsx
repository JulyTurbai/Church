import './Comment.scss';
import './CommentMedia.scss';

const Comment = () => {

    const parishioners = [
        {
            name: 'John Smith',
            photo: process.env.PUBLIC_URL +'/img/John.png',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vel nemo quis maiores hic! Iusto, reprehenderit assumenda ex accusamus debitis cum modi maxime non soluta esse expedita.',
            grade: 5
        },
        {
            name: 'Anne Doe',
            photo: process.env.PUBLIC_URL +'/img/Anne.png',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vel nemo quis maiores hic! Iusto, reprehenderit assumenda ex accusamus debitis cum modi maxime non soluta esse expedita.',
            grade: 5
        }
    ]
    
    return (
        <div className='comment'>
            <div className="container">
                <div className="block">
                    <div className="parishioners">
                    {
                        parishioners.map((item, index) => (
                            <div key={index} className="parishioner">
                                <img className='parishioner__photo'  src={`${ item.photo }`} alt="" />
                                <p className='parishioner__name'>{ item.name }</p>
                               <p className='parishioner__text'>
                                    <strong>{ item.comment.split(' ')[0]} { item.comment.split(' ')[1]} { item.comment.split(' ')[2]}</strong> { item.comment.substring(item.comment.indexOf(' ') + 1)}
                               </p>
                               <ul className='parishioner__grades'>
                                    {[...Array(item.grade)].map((_, i) => (
                                        <li key={i}>
                                            <img className='parishioner__img' src={process.env.PUBLIC_URL + '/img/icons/star-rating.png'}alt="" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;