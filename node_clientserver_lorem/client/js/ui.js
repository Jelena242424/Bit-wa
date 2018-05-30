export const displayPosts = (posts) => {
    const $postContainer = $(".content");
     let showPostsOnPage = "";
    for ( let i = 0; i < posts.length; i++) {
        showPostsOnPage += `<div class="row">
        <div class="col s12">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${posts[i].title}</span>
              <p>${posts[i].info}</p>
            </div>
          </div>
        </div>
      </div>`
    }
    $postContainer.html(showPostsOnPage);
}
