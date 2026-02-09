// models/Applicant.js
const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    nationality: String,import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      lowercase: true
    },

    phone: {
      type: String,
      required: true
    },

    nationality: {
      type: String,
      default: "Bangladesh"
    },

    academicProfile: {
      degreeLevel: {
        type: String,
        enum: ["UG", "Masters", "PhD"],
        required: true
      },
      gpa: {
        type: Number,
        required: true
      },
      gradingScale: {
        type: Number,
        default: 4
      },
      subjectArea: {
        type: String,
        required: true
      }
    },

    englishProficiency: {
      testType: {
        type: String,
        enum: ["IELTS", "Duolingo", "TOEFL", "MOI", "None"],
        required: true
      },
      overallScore: Number,
      listening: Number,
      reading: Number,
      writing: Number,
      speaking: Number
    },

    programType: {
      type: String,
      enum: ["Taught", "Research"],
      required: true
    },

    fundingCapacity: {
      type: String,
      enum: ["Self-funded", "Partial funding needed"],
      required: true
    },

    secondaryFactors: {
      workExperienceYears: {
        type: Number,
        default: 0
      },
      publications: {
        type: Number,
        default: 0
      },
      extracurriculars: {
        type: Boolean,
        default: false
      }
    },

    submittedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model("Applicant", applicantSchema);

    highestEducation: String,
    gpa: Number,
    englishTest: String,
    englishScore: Number,
    intendedCourse: String,
    intendedIntake: String,
    countryPreference: String,
    universityPreference: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Applicant", applicantSchema);
