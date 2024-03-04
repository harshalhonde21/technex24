import mongoose from 'mongoose';

const { Schema } = mongoose;

const caseSchema = new Schema({
  caseNo: {
    type: String,
    required: true,
    unique: true
  },
  caseDescription: {
    type: String,
    required: true
  },
  caseCategory: {
    type: String,
    required: true
  },
  court: {
    type: String,
    required: true
  },
  courtLocation: {
    type: String,
    required: true
  },
  filingDate: {
    type: Date,
    required: true
  },
  publicAffairs: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  },
  childrenInvolved: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  },
  soleEarningMembers: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  },
  holdCasesByDates: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  },
  parties: {
    type: [String],
    required: true
  },
  status:{
    type: String,
    required:true
  },
  file: {
    type: String, 
    required: true
  }
});

export default mongoose.model("Case", caseSchema);
