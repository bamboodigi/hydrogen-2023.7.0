const json = {
    html: "<div class='test'>Hello, world!</div>",
    css: ".test { background-color: green; }"
  };
  
  const username = "8cbaa641-7825-4ba5-b109-8d649d4bfa10";
  const password = "ca03849c-eb30-415b-b54d-aa22bc33deae";
  
  const options = {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(username + ":" + password)
    }
  }
  
  fetch('https://hcti.io/v1/image', options)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .then(data => {
      // Image URL is available here
      console.log(data.url)
    })
    .catch(err => console.error(err));