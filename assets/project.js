const ul = document.getElementById('authors'); //declare ul
const url = 'https://randomuser.me/api/?results=1'; //declare our url

  function createNode(element) {
      return document.createElement(element); //create html element
  }

  function append(parent, el) {
    return parent.appendChild(el); //create child element
  }


  fetch(url)                     //fetch
  .then((resp) => resp.json())    //return data as json
  .then(function(data) {
    let authors = data.results;   //assign data to variable
    return authors.map(function(author) {  //map through results and run code below
      let li = createNode('li'),
          span = createNode('span');
      span.innerHTML = `${author.name.first} ${author.name.last} ${author.email} ${author.login.username} ${author.phone}`; //display data from api
      append(li, span);
      append(ul, li);

        var settings = {  //post request info to Zendesk
          url: 'https://z3nhifiindustries.zendesk.com/api/v2/users.json',
          headers: {"Authorization": "Bearer 19e7a6d614a437c87609d314031e0a4a3a49e806244f60d6cfbb242c1631a3ab"},
          type: 'POST',
          contentYpe: 'application/json',
          Accept: 'application/json',
          data:{"user":{"name":`${author.name.first}`,"email":`${author.email}`}}
        };

          client.request(settings).then(  //send post request and also console.log the things
            function(data) {
              console.log(data);
          },
          function(response) {  //if you had declared a showError, do it here, but I didn't yet
            showError(response);
          }
          );
    })
  })
  .catch(function(error) {  //fetch console.log error which I also didn't create yet
     console.log(error);
  }); 






