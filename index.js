import fs1 from "fs/promises"
import fs2 from "fs"
import path from "path"

//initial directory where we want to clear the clutter
let init_path="C:\\Users\\Lenovo\\coding\\web_development\\EXERCISES\\EX15(Clear theClutter)";

//reading all the files inside the given init_path
let files = await fs1.readdir(init_path);

//traversing each file
for (const file of files) {

    //getting the extension of the files
    let ext = file.split(".")[file.split(".").length - 1]


    //doing the tasks if the file is not of js and json type and also if it is not a folder
    if(ext!="js" && ext!="json" && file.split(".").length>1)
    {
        if (fs2.existsSync(ext)) {
            fs1.rename(path.join(init_path, file), path.join(init_path, ext, file))
        }
        else {
            // making directory if it doesn't exist with the name of the extension
            fs1.mkdir(ext)
            fs1.rename(path.join(init_path, file), path.join(init_path, ext, file))

        }
    }
}
