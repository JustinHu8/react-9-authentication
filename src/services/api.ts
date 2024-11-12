export const fetchCourses = async () => {
    const response = await fetch("https://my-json-server.typicode.com/JustinHu8/courseCardMock/courseCards");
    if (!response.ok) throw new Error("Failed to fetch courses");
    return response.json();
};

export const userLogin = async (username: string, password: string) => {
    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });
    if (!response.ok) throw new Error("Failed to login");
    return response.json();
}