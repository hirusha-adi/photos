import sharp from "sharp";
import fs from "fs-extra";
import path from "path";

const inputDir = "./public/images";
const outputDir = "./public/thumbnails";

// thumbnail dimensions
const thumbnailWidth = 400;
const thumbnailHeight = 400;

fs.ensureDirSync(outputDir);

const createThumbnails = async () => {
  try {
    const files = await fs.readdir(inputDir);
    const jpgFiles = files.filter((file) => file.toLowerCase().endsWith(".jpg"));

    if (jpgFiles.length === 0) {
      console.log("No .jpg files found in the input directory.");
      return;
    }

    for (const file of jpgFiles) {
      const inputFilePath = path.join(inputDir, file);
      const outputFilePath = path.join(outputDir, file);

      await sharp(inputFilePath)
        .resize(thumbnailWidth, thumbnailHeight, { fit: "cover" }) // resize with cropping
        .jpeg({ quality: 80 }) // compress
        .toFile(outputFilePath);

      console.log(`Thumbnail created: ${outputFilePath}`);
    }

    console.log("All thumbnails created successfully!");
  } catch (err) {
    console.error("Error creating thumbnails:", err.message);
  }
};

createThumbnails();
