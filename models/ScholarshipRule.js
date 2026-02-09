import mongoose from "mongoose";

const scholarshipRuleSchema = new mongoose.Schema(
  {
    scholarshipName: {
      type: String,
      required: true
    },

    universityName: {
      type: String,
      required: true
    },

    ruleCategory: {
      type: String,
      enum: ["Merit-based", "Need-based", "Departmental", "Early-bird"],
      required: true
    },

    degreeLevel: {
      type: String,
      enum: ["UG", "Masters", "PhD"],
      required: true
    },

    minimumGPA: {
      type: Number,
      required: true
    },

    minimumIELTS: {
      type: Number,
      default: 0
    },

    subjectArea: {
      type: String,
      default: "Any"
    },

    scholarshipValue: {
      type: String, // e.g. £3000 / 50% tuition
      required: true
    },

    awardProbability: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium"
    },

    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("ScholarshipRule", scholarshipRuleSchema);
