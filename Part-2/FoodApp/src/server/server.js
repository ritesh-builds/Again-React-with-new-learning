import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/menu/:resId", async (req, res) => {
  try {
    const { resId } = req.params;
    const { lat, lng } = req.query;

    // Karnal ke coordinates set kiye hain
    const swiggyUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat || 29.6903}&lng=${lng || 76.9754}&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

    const response = await fetch(swiggyUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Origin": "https://www.swiggy.com",
        "Referer": `https://www.swiggy.com/`,
        "Accept-Language": "en-US,en;q=0.9"
      },
    });

    // Agar Swiggy phir bhi block kare, toh check karne ke liye
    if (!response.ok) {
        throw new Error(`Swiggy blocked the request with status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Backend API Error:", error.message);
    res.status(500).json({ error: "Failed to fetch menu", details: error.message });
  }
});

app.listen(5000, () => console.log("Proxy server running on port 5000"));