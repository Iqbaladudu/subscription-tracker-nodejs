import mongoose from 'mongoose';
const subscriptionSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, minLength: 5, maxLength: 100 },
    price: { type: Number, required: true, min: 0 },
    currency: { type: String,enum: ["IDR", "BTC"] },
    frequency: { type: String, enum: ["daily", "weekly", "monthly", "yearly"] },
    category: { type: String, enum: ["sports", "news", "events", "lifestyle", "technology", "finance"] },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value < new Date(),
            message:"Start date must be in the past."
        }
    },
    renewalDate: {
        type: Date,
        required: false,
        validate: {
            validator: (value) => value > this.startDate,
            message:"Renewal date must be after the start date."
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    }
}, { timestamps: true });

subscriptionSchema.pre('save', function (next) {
    if (!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        }

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }

    if (this.renewalDate < new Date()) {
        this.status = "expired";
    }

    next()
})

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
