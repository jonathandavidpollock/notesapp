# ReactJS Application for Note Taking

This application has many components, even login. Once logged in, the user can take notes. It was designed to be a church bulletin replacement. Upon login, the screen show two split panels. It accepts plain text on the left and transforms that text into a beautiful webpage on the right. 

It also has a special feature, bible integration. This allows the user to quickly reference Bible verses in his or her notes.
For example, if he or she types in "Genesis 1:1" on the left, the application will output the scripture on the right. How does it do it? REGEX. It looks for a special character and then performs a GET request to a Bible API.

My hope is to expand the application to support church branding and/or utilize server size CRUD with Node. Right now it just syncs to local storage for the time being. 
