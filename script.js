window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "1031209010702-c9asmhjf92k0j3hvn7e5bcqqmad7r0a4.apps.googleusercontent.com",
    callback: handleCredentialResponse,
    auto_select: true, // Enables automatic login for returning users
    cancel_on_tap_outside: false, // Prevents One Tap from closing if clicked outside
  });

  google.accounts.id.prompt(); // Show One Tap prompt
};

function handleCredentialResponse(response) {
  // Decode JWT token to extract user info
  const data = parseJwt(response.credential);
  console.log("User Info:", data);

  // Display user info
  document.getElementById("user-info").innerHTML = `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <img src="${data.picture}" alt="User Image" style="width:100px; border-radius:50%;">
    `;
}

// Helper function to decode JWT token
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
