import mongoose from "mongoose";

const eligibilityResultSchema = new mongoose.Schema(
  {
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Applicant",
      required: true
    },

    eligibilityScore: {
      type: Number,
      required: true
    },

    eligibilityBand: {
      type: String,
      enum: ["Strong Candidate", "Competitive", "Borderline"],
      required: true
    },

    matchedUniversities: [
      {
        universityName: String,
        scholarshipType: String,
        estimatedAmount: String
      }
    ],

    ukGuidance: [
      {
        type: String
      }
    ],

    counselorNotes: {
      type: String
    },

    sentToStudent: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("EligibilityResult", eligibilityResultSchema);
