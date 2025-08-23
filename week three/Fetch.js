document.addEventListener("DOMContentLoaded", () => {
  const getBtn = document.getElementById("getBtn");
  const postBtn = document.getElementById("postBtn");
  const output = document.getElementById("output");

  // GET Request
  getBtn.addEventListener("click", async () => {
    output.innerHTML = "<h3>Loading users...</h3>";
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error(GET failed: ${response.status});
      const data = await response.json();
      output.innerHTML = "<h3>Users:</h3>";
      data.forEach(user => {
        output.innerHTML += <p><strong>${user.name}</strong> (${user.email})</p>;
      });
    } catch (error) {
      console.error("GET Error:", error);
      output.innerHTML = <p style="color:red;">GET Error: ${error.message}</p>;
    }
  });

  // POST Request
  postBtn.addEventListener("click", async () => {
    output.innerHTML = "<h3>Sending POST request...</h3>";
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Hello from Keith",
          body: "This is a test POST request",
          userId: 1
        })
      });
      if (!response.ok) throw new Error(POST failed: ${response.status});
      const data = await response.json();
      output.innerHTML = `<h3>POST Response:</h3>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Body:</strong> ${data.body}</p>
        <p><strong>ID:</strong> ${data.id}</p>`;
    } catch (error) {
      console.error("POST Error:", error);
      output.innerHTML = <p style="color:red;">POST Error: ${error.message}</p>;
    }
  });
});