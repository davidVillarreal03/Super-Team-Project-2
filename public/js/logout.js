const logout = async (event) => {
  event.preventDefault();
  console.log('logout here ++++++++++++++++++++++++++++++++++++++++++');
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log({ response });
  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);
