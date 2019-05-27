import mongoose from "mongoose";

const Schema = mongoose.Schema;

const moneySchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  businesses: {
    type: [{
      businessId: { type: Schema.Types.ObjectId, required: true, ref: "MoneyBusinessEntity" }
    }]
  }
});

export = mongoose.model("Money", moneySchema);
