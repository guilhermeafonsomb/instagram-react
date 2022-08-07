import { FormEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
import commentImgUrl from '../../assets/comment.svg';
import heartBlackImgUrl from '../../assets/heart-black.svg';
import heartRedImgUrl from '../../assets/heart-red.svg';

import profileImgUrl from '../../assets/profile-image.svg';
import sendImgUrl from '../../assets/send.svg';

import * as S from './styles';

import { generateIds } from '../../utils/GenerateIds';
import { MySwiper } from "../Swiper";

export function FeedPublications() {
    const [favorite, setFavorite] = useState(false);
    const myRef = useRef(null);

    const [inputComment, setInputComment] = useState<string>('');
    const [comments, setComments] = useState<string[]>([]);

    useEffect(() => {
        renderComments();
      }, []);

    useEffect(() => {
        scrollToRef(myRef);
      }, [myRef.current]);

    const scrollToRef = (ref: MutableRefObject<any>) => {
        if(ref.current !== null) ref.current.scrollIntoView();
        
    };

    const handleSubmitComment = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setComments(comments => {
            const newComments =  [...comments, inputComment];
            localStorage.setItem("comments", JSON.stringify(newComments));
           return newComments;
        });
        
        setInputComment('');
    };

    const renderComments = () => {
        if (localStorage.getItem("comments")) {
            const allComments: string[] = JSON.parse(localStorage.getItem("comments")  || "[]");
            setComments(allComments);
        };
    };

    return (
        <S.ContainerPage>
            <S.PostCard>
                <S.ContentTopCard>
                    <div>
                        <img src={profileImgUrl} alt="profile photo" />
                    </div>

                    <div className='name-location'>
                        <b>Erik Dunlop</b>
                        <small>San Francisco, California</small>
                    </div>
                </S.ContentTopCard>

                <MySwiper />
                
                <S.ContainerComments>
                    <S.ContainerInteractionButtons>
                        <button  onClick={() => setFavorite(!favorite)}>
                            { favorite ? 
                                    <img className='favorite-icon' src={heartRedImgUrl} alt="favorite icon" />
                                :  
                                    <img src={heartBlackImgUrl} alt="favorite icon" /> 
                            }
                           
                        </button>
    
                        <button>
                            <img src={commentImgUrl} alt="comment icon" />
                        </button>
    
                        <button>
                            <img src={sendImgUrl} alt="send icon" />
                        </button>
                    </S.ContainerInteractionButtons>

                    <div className='comment-description'>
                        <p>
                            <b>Lucas Credie</b> dolor sit amet, consectetur adipiscing elit. Mi enim ut eu cras ultrices eget et tristique proin. Mi enim ut eu cras ultrices eget et tristique proin.
                        </p>

                        <div>
                            {comments.map(comment => <p ref={myRef} key={generateIds()}><b>Comment </b>{comment}</p>)}
                        </div>
                    </div>

                    <S.ContainerPostComment onSubmit={handleSubmitComment}>
                        <input 
                            value={inputComment}
                            name="comment" 
                            type="text"
                            onChange={(e) => setInputComment(e.target.value)}
                        />
                        <button disabled={inputComment.length === 0} type="submit">Post</button>
                    </S.ContainerPostComment>
                </S.ContainerComments>
            </S.PostCard>
        </S.ContainerPage>
    )
};

