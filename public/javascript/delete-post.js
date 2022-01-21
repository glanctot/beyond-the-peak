async function deletePostHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    const response = await fetch(`/api/comments/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        document.location.replace("/commentboard");
    } else {
        alert(response.statusText);
    }
};

document.querySelector("delete-post").addEventListener("click", deletePostHandler);