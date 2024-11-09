// api.test.ts
import { fetchCourses } from "./api";

describe("fetchCourses", () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mocks before each test
    });

    it("returns courses data successfully", async () => {
        // Mock fetch to return a successful response with example data
        globalThis.fetch = jest.fn().mockResolvedValueOnce({
            ok: true,
            json: async () => [
                { id: 1, title: "Course 1" },
                { id: 2, title: "Course 2" },
            ],
        });

        const result = await fetchCourses();
        expect(result).toEqual([
            { id: 1, title: "Course 1" },
            { id: 2, title: "Course 2" },
        ]);
        expect(globalThis.fetch).toHaveBeenCalledWith("https://my-json-server.typicode.com/JustinHu8/courseCardMock/courseCards");
    });

    it("throws an error when the fetch fails", async () => {
        // Mock fetch to return a failed response
        globalThis.fetch = jest.fn().mockResolvedValueOnce({
            ok: false,
        });

        await expect(fetchCourses()).rejects.toThrow("Failed to fetch courses");
        expect(globalThis.fetch).toHaveBeenCalledWith("https://my-json-server.typicode.com/JustinHu8/courseCardMock/courseCards");
    });
});
