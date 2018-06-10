import React, { Component } from 'react';

class Author {
    constructor (id, name, userName, email, phone, street, city, zipCode, companyName, companySlogan) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.phone = phone;
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
        this.companyName = companyName;
        this.companySlogan = companySlogan;
    }
}; 

export {Author};