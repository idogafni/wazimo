let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let PermissionSchema = new Schema({
    id: {type: String, required: true},
    email: { type: String, required: true, max: 100 },
    screens: {
        id: {type: string},
        name: {type: string}
    }
});

// Export the model
module.exports = mongoose.model("Permission", PermissionSchema);
