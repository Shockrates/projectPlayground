import {IDevice} from "./../types/device"
import {model, Schema} from "mongoose"

const deviceSchema: Schema = new Schema(
    {
        serialnumber: {
            type: String,
            required: true,
            maxlength: 255,
            minlength:1,

        },
        description: {
            type: String,
            required: true,
            maxlength: 255,
            minlength:1,
        },
        type: {
            type: Number,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "Employeer"
          }
    },
    {
        timestamps: true
    }
    
)

export default model<IDevice>("Device",deviceSchema)