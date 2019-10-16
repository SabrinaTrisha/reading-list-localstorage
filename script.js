let books = [] // array containing book objects {title: '', author: ''}

/* Check localStorage for books */
if(window.localStorage.getItem('books')){
    books=JSON.parse(window.localStorage.getItem('books'))
}

/* Check if books is empty and show/hide relevant message */ 
/* If books is not emply, populate view with book details in #list */
if(books.lenght !=0){
    $('#empty').hide()
    books.forEach(element =>{
        let item =$('<li>').text(element.title+'-'+element.audhor)
        $('#list').append(item)
    });
}

/* Add a book button click should reveal the form */
$('#show-add').click(function(){
    $('#addform').show()
    $(this).hide()

})

/* On ADD button click, 
    ensure the input fields contain values, 
    then add the book to HTML view 
    also save updated books array to localStorage 
*/
$('add').click(function(){
    var title = $('#title').val()
    var author = $('#author').val()
    if (title && author){
        $ ('#empty').hide()
        //add to list
        let item= $('<li>').text(title + '-' + author)
        $('#list').append(item)
        books.push({title:title, author:author})
        window.localStorage.setItem('books', JSON.stringfly(books))

    }
    else{
        console.log('field are empty')
    }
})

/* Refreshing the page, should show all the stored books */
