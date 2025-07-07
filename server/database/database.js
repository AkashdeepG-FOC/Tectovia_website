const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tectovia:kIU9CkAiDwtkj96A@cluster0.zsfrar3.mongodb.net/TechWeb?retryWrites=true&w=majority')
    
    .then(() => {
        console.log('Database Connected ! ');
    })
    .catch(err => console.log('database Error '));
