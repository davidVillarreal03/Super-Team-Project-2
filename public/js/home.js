const home = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/favorite', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      res.send("error");
    }
  };
  
  document.querySelector('.home').addEventListener('click', home);