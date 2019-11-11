export const checkUsers = () => {
  return fetch(`/users/`, {
    headers: new Headers({
      'content-type': 'application/json'
    }),
  })
  .catch( err => Promise.reject({ code: 'Connection error', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ code: 'Wrong users', err: response.statusText });
  })
};

export const login = ({username}) => {
  return fetch(`/login/`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
		}),
		body: JSON.stringify({ username })
  })
  .catch( err => Promise.reject({ code: 'Connection error', err }) )
  .then( response => {
    if(response.ok) {
      return;
    }
    return Promise.reject({ code: 'Not a valid username, please make sure you have registered and you have logout.', err: response.statusText });
  })
};

export const logout = ({username}) => {
  return fetch(`/logout/`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
		}),
		body: JSON.stringify({ username })
  })
  .catch( err => Promise.reject({ code: 'Connection error', err }) )
  .then( response => {
    if(response.ok) {
      return;
    }
    return Promise.reject({ code: 'Error, please try again.', err: response.statusText });
  })
};

export const checkBlogs = () => {
  return fetch(`/blogs/`, {
    headers: new Headers({
      'content-type': 'application/json'
		}),
  })
  .catch( err => Promise.reject({ code: 'Connection error.', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ code: 'Wrong blogs', err: response.statusText });
  })
};


export const addBlogs = ({sender, title, text}) => {
  return fetch(`/blogs/`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
		}),
		body: JSON.stringify({ sender, title, text })
  })
  .catch( err => Promise.reject({ code: 'Connection error.', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ code: 'Wrong blogs.', err: response.statusText });
  })
};

export const checkDefaultUsers = () => {
  return fetch(`/default-users/`, {
    headers: new Headers({
      'content-type': 'application/json'
    }),
  })
  .catch( err => Promise.reject({ code: 'Connection error.', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ code: 'Wrong default users.', err: response.statusText });
  })
};

export const addNewUsers = ({newUsers}) => {
  return fetch(`/default-users/`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
		}),
		body: JSON.stringify({newUsers})
  })
  .catch( err => Promise.reject({ code: 'Connection error.', err }) )
  .then( response => {
    if(response.ok) {
      return;
    }
    return Promise.reject({ code: 'This name already registered.', err: response.statusText });
  })
};

//

export const deleteBlogs = ({ id, username}) => {
  return fetch(`/delete-blogs/`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
		}),
		body: JSON.stringify({ id, username })
  })
  .catch( err => Promise.reject({ code: 'Connection error.', err }) )
  .then( response => {
    if(response.ok) {
      return;
    }
    return Promise.reject({ code: 'You cannot delete this blog, because this blog does not exit or this blog was not post by you.', err: response.statusText });
  })
};


