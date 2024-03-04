import mongoose from 'mongoose';

const { Schema } = mongoose;

const caseSchema = new Schema({
  caseNo: {
    type: Number,
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
  defendant: {
    type: String,
    required: true
  },
  file: {
    type: String, 
    required: true
  }
});

export default mongoose.model("Case", caseSchema);
