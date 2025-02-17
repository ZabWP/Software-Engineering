function handleCredentialResponse(response) {
  const data = parseJwt(response.credential);
  console.log("User Info:", data);

  document.getElementById("user-info").innerHTML = `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <img src="${data.picture}" alt="User Image" style="width:100px; border-radius:50%;">
    `;
}

function parseJwt(token) {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
  return JSON.parse(jsonPayload);
}
