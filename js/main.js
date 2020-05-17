//Listen for form submit
document.getElementById('my-form').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    //Get from values
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;

    var bookmark = {
        name:siteName,
        url:siteURL
    }

    if(localStorage.getItem('bookmarks')===null) {
        var bookmarks =[];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));//json to string
    } else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));//string to json
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    
    
    //Prevent form from submitting
    e.preventDefault();
}

//Delete Bookmark
function deleteBookmark(url) {
    //Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //Loop through the bookmarks
    // for(var i =0; i< )

}


//Fetch bookmarks
function fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //Get output id
    var bookmarksResults = document.getElementById('bookmarksResults');
    
    //Build Output
    bookmarksResults.innerHTML = '';

    for(var i = 0; i<bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += "<div class='well'>"+
                                        "<h3>"+name
                                        + " <a class= 'btn btn-default' target='_blank' href="+url+">Visit</a>"
                                        + " <a onclick = \"deleteBookmark('"+url+"')\" class= 'btn btn-danger' href='#'>Delete</a>"
                                        +"</h3>"+
                                        "</div>";

    }
}