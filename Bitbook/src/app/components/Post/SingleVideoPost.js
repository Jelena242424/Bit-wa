import React from 'react';
import { validationService } from '../../../services/validationService';

export const SingleVideoPost = (props) => {
    const videoValidation = validationService.validateVideoForm(props.post.videoUrl);

    debugger

    return (
        <div className="singleVideoPost responsive-video">
            <div className='row container'>
            <div className=' video-container'>
            { videoValidation.valid ?
                <iframe width='853px' height='480px' src={props.post.videoUrl} frameBorder="0" allowFullScreen></iframe>
                :
                <div>Video URL is not valid.</div>    
            }
            </div>
            </div>
        </div>
    );
}