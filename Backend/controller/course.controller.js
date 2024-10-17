import Course from "../model/course.model.js";

export const getCourse = async (req, res) => {
    try {
        const course = await Course.find();  // Fetch all courses
        return res.status(200).json(course); // Send success response with course data
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({ message: "Internal Server Error", error }); // Send 500 status and error details
    }
};
