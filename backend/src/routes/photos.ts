import { Router } from "express";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (_, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

let photos: { filename: string }[] = [];

router.post("/", upload.single("photo"), (req, res) => {
  photos.push({ filename: req.file!.filename });

  res.json({
    url: `${req.protocol}://${req.get("host")}/uploads/${req.file!.filename}`,
  });
});

router.get("/", (req, res) => { // req is now used, so remove '_'
  res.json(
    photos.map(p => ({
      url: `${req.protocol}://${req.get("host")}/uploads/${p.filename}`,
    }))
  );
});

export default router;
