command git status check all files if you add new files to the repository


db is connected already in video 6 

we start form custom api

step-1 : export {app} in app.js

step-2: jaise he database connect ho jaye toh .then.catch add karange (always remember database ko connect krne kai baad humesa use hoga promise jo ki .then aur .catch ka use hoge resolve or rejection kai sath)            (src/index.js)

step-3: app.listen use krange tabhi toh server start hoga, means application ne us database ko use krte hue listen krna use nhi keya.     (src/index.js)


step-4: install two package in terminal (npm install cookie-parser, npm install cors);   

step-5: jub bhi hum middlewares use krte h app.use most of the time use hoge for more learning website npm cors full details mai h read kro(cors whitelisting k liye use hota h).

step-6: app.use express.json "limit"  data kahi sai bhi aa sakhta h eg--url, json 
toh hum json mai unlimited json toh ne aane dange na toh fir use krange limit in app.use

step-7: app.use mai use hoga urlencoded ka jaise url sai data aya toh express ko samajhane padhta h ke vha sai bhi data aaya h.

step-8: app.use static ("public") jub hum public folder folder mai images, pdf or favicon etc add krna ho toh hum es configuration ka use krange

step-9: app.use    cookies ko user kai browser mai he rakh sakte ho or use bs server he read kr sakta h or vo he delete kr sakta h 
or vo bhut secure rehta h (secure cookies ko user kai browser mai rakh sakhte ho)

note: middleware this is a type of checker   use (error, req, res, next)

step:10 utils / asyncHandleer.js create

step:11 utils / Apierror.js

step:12 utils / ApiResponse.js