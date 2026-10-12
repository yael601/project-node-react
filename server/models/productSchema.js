const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    // tags: {
    //     type:[String]
    // },
    // complete: {
    //     type: Boolean,
    //     default: false
    // },
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    city: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    address: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    body:{
        type: String,
        required: true
    },
    cost:{
        type: mongoose.Schema.Types.Int32,
        required: true
    },
    phone:{
        type: mongoose.Schema.Types.String,
        required: true
    },
    email:{
        type: mongoose.Schema.Types.String,
        required: true
    },
    imageUrl: {
        type: [String],
    },
    kind:{
        enum:['ריהוט',"מוצרי חשמל",'מוצרי תינוקות',"מוצרי אלקטרוניקה","ביגוד","כלי נגינה","כלי עבודה,תשמישי קדושה ותחזוקה לבית"
            ,"אופנים וקורקינט",'רכבים',"מוצרים נוספים",]
    },
    smallkind:{
        enum:["ריהוט לסלון","ריהוט למטבח","ריהוט לחדרי שינה","ריהוט משרדי","ריהוט גן ומרפסת","ריהוט לחדר אמבטיה","ריהוט נוסף"
            ,"מוצרי חשמל למטבח","מוצרי חשמל לחדר כביסה","מיזוג וחימום","מוצרי חשמל נוספים"
            ,"עגלות ואביזרים לעגלות","לולים ועריסות","אמבטיות וכסאות אוכל","מוצרי תינוק נוספים"
            ,"מחשבים","מצלמות","נגנים ורמקולים","טלפונים","מכונות תספורת","מוצרי אלקטרוניקה נוספים"
            ,"ביגוד לגברים","ביגוד לנשים","ביגוד לילדות","ביגוד לילדים","ביגוד לתינוקות","ביגוד נוסף"
            ,"אורגנים","גיטרות","חלילים","כינורות","פסנטרים","מערכת תופים","מוצרי הגברה וסאונד","כלי נגינה נוספים"
            ,"מוצרי תאורה","תשמישי קדושה","כלי עבודה","פתרונות אכסון","מוצרי בנין","מוצרים נוספים"
            ,"אופנים רגילות","קורקינטים רגילים","אופנים חשמליות","קורקינטים חשמליות","אביזרים לאופנים וקורקינט"
            ,"רכבים","אביזרים לרכב",""
        ]
    }
}, {
    timestamps: true
})
module.exports =productSchema