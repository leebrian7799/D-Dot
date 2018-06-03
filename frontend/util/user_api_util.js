export const fetchUsers = ()=> (
  $.ajax(
    method: 'GET',
    url: 'api/users'
  )
);

export const fetchUser = (username) => (
  $.ajax(
    method: 'GET',
    url: `api/users/${username}`
  )
);


export const updateUser = (user, username) => (
  $.ajax(
    method: 'PATCH',
    url: `api/users/${username}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data:user
  )
)
