import { postsEndpoint, authorsEndpoint } from "../shared/constants";
import { apiService } from "../shared/ApiService";
import { localStorageService } from "../shared/LocalStorage";
import { Author } from "../models/Author";

class AuthorsService {

    fetchAuthors() {
        const { adaptAuthors } = this
        return apiService
            .get(authorsEndpoint)
            .then((myData) => {
                const authorsList = adaptAuthors(myData)
                localStorageService.saveData("myAuthors", authorsList)
                return authorsList;
            });
    }

    adaptAuthors(authorsList) {
        return authorsList
            .map(author => {
                const id = author.is;
                const name = author.name;
                const userName = author.username;
                const email = author.email;
                const phone = author.phone;
                const street = author.address.street;
                const city = author.address.street;
                const zipCode = author.address.zipcode;
                const companyName = author.company.name;
                const companySlogan = author.company.catchPhrase;
        
                return new Author( id, name, userName, email, phone, street, city, zipCode, companyName, companySlogan)
            });
    };

    loadAuthors() {
        const myAuthors = localStorageService.read("myAuthors")
        return new Promise((resolve, reject) => {
            resolve(this.adaptAuthors(myAuthors))
        });
    };
}

export const authorsService = new AuthorsService();


