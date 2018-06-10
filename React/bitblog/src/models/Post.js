import React, { Component } from 'react';

class Post {
    constructor (title, body, userId, id) {
        this.title = title;
        this.body = body;
        this.userId = userId;
        this.id = id;
    }

    hideBody() {
        const bodyArr = `${this.body.slice(0, 100)}...`
        return bodyArr
    };
}; 

export {Post};