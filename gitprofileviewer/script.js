async function getProfile(params) {
  const username = document.getElementById("usernameInput").value.trim();

  const profileDiv = document.getElementById("profile");

  if (!username) {
    profileDiv.innerHTML = "<p> Plz enter a github username</p>";
    return;
  }

  try {
    const response = await fetch(`http://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();
    console.log(data);

    profileDiv.innerHTML = `
    <div class="profile-card">
<img src ="${data.avatar_url}"  alt ="avatar"/>
<h2>Name: ${data.name || "Name is not available"}</h2>
<p>Bio: ${data.bio || "Bio is not provided"}</p>
<p>Location: ${data.location || "No loaction available"}</p>
<p>Followers: ${data.followers || "Name is not available"}</p>
<p>Following: ${data.following || "No active Following"}</p>
<p>Repositories: ${data.public_repos}"Public Repositiories</p>
<p>Company: ${data.company ||"No company Provider"}</p>

    </div>
    `;
  } catch (err) {
    console.log("Error occured" + err);
  }
}