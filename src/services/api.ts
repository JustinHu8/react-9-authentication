export const fetchCourses = async () => {
    const response = await fetch("https://my-json-server.typicode.com/JustinHu8/courseCardMock/courseCards");
    if (!response.ok) throw new Error("Failed to fetch courses");
    return response.json();
};