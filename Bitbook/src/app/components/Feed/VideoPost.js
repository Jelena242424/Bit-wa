import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/feedPage.css'
import { validationService } from '../../../services/validationService';


export const VideoPost = (props) => {
    const { videoUrl, type, id, commentsNum } = props.post

    const videoValidation = validationService.validateVideoForm(videoUrl);

    return (

        <div className='video-post'>
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-video video-container">
                        { videoValidation.valid ?
                            <iframe width='100%' height='300' src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            :
                            <div>Video URL is not valid.</div>    
                        }
                        </div>
                        <div className="card-action">
                            <span className=' col s6 offset s2'>Video Post </span>
                            <Link to={`/post/${type}/${id}`}> {commentsNum === 0 ? "0" : commentsNum} comments</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};