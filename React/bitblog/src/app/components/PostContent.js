import React, { Fragment } from "react"
import { AuthorName } from "./AuthorName"

const PostContent = () => {

    return (
        <Fragment>
            <h2 className="center">Single Post title</h2>
            <AuthorName />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat pharetra ex eu cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec varius blandit metus, ut imperdiet lorem commodo vitae. Quisque luctus quam sit amet rhoncus aliquam. Nunc ac vestibulum leo. Etiam ac sagittis tellus. Quisque auctor, erat non varius vehicula, turpis felis euismod nisi, nec porta justo velit vitae nibh. Maecenas tempor diam in lorem iaculis, ut scelerisque neque luctus. Sed rutrum imperdiet elementum. Aenean id ultricies nibh, sed venenatis nisi. Proin elementum sagittis tortor, non lacinia velit posuere sed. Mauris ultrices pretium pellentesque. Phasellus laoreet aliquam lobortis. Donec iaculis eros eu dictum rhoncus.</p>
        </Fragment>
    );
};

export { PostContent }

