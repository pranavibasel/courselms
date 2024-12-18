 
import { Course } from "../models/course.model.js";
//import { Lecture } from "../models/lecture.model.js";
//import {deleteMediaFromCloudinary, deleteVideoFromCloudinary, uploadMedia} from "../utils/cloudinary.js";

export const createCourse = async (req,res) => {

     console.log(req.body);
try{
  const { courseTitle, Subcategory, Category, Price, Description, Curriculum, Imageurl } = req.body;

  const newCourse = new Course({
    courseTitle,
    Category: Category,
    Subcategory: Subcategory,
    Description: Description,
    Curriculum: Curriculum,
    Image: Imageurl,
    coursePrice: Price,
  });
  await newCourse.save();

  return res.status(201).json({
    message: "Course created successfully",
    course: newCourse,
  });
}
catch(error){
  console.error(error);
  return res.status(500).json({
    message: "Failed to create course",
  });
}
}

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json({
      message: "Courses retrieved successfully",
      courses,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to retrieve courses",
    });
  }
};  

export const getCourseById = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }
    return res.status(200).json({
      message: "Course retrieved successfully",
      course,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to retrieve course",
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      req.body,
      { new: true }
    );
    if (!updatedCourse) {
      return res.status(404).json({
        message: "Course not found",
      });
    }
    return res.status(200).json({
      message: "Course updated successfully",
      course: updatedCourse,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to update course",
    });
  }
};

export const removeCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    if (!deletedCourse) {
      return res.status(404).json({
        message: "Course not found",
      });
    }
    return res.status(200).json({
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to delete course",
    });
  }
};





