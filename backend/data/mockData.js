// ─── Mock Product Database ─────────────────────────────────────────────────────
// 60+ products across 8 categories: smartphones, laptops, audio, televisions,
// appliances, wearables, sports, groceries, furniture, personal_care
// ──────────────────────────────────────────────────────────────────────────────

function mkListing(price, originalPrice, rating, reviews, inStock, deliveryDays, seller, emi = true) {
  return { price, originalPrice, rating, reviews, inStock, deliveryDays, seller, emi };
}

// ══════════════════════════════════════════════════════════════════════════════
//  PRODUCTS
// ══════════════════════════════════════════════════════════════════════════════
export const PRODUCTS = [

  // ── SMARTPHONES ─────────────────────────────────────────────────────────────
  {
    id: "p001", name: "Apple iPhone 15 Pro Max 256GB", brand: "Apple", category: "smartphones",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
    description: "Titanium design, A17 Pro chip, 48MP camera system, Action button and USB-C with USB 3 speeds.",
    specs: { display: "6.7-inch Super Retina XDR", ram: "8GB", storage: "256GB", battery: "4422mAh", os: "iOS 17", camera: "48MP + 12MP + 12MP" }
  },
  {
    id: "p002", name: "Samsung Galaxy S24 Ultra 512GB", brand: "Samsung", category: "smartphones",
    image: "https://images.unsplash.com/photo-1707195747535-2bc33a8d6f97?w=400&q=80",
    description: "Galaxy AI built-in. 200MP camera, built-in S Pen, Snapdragon 8 Gen 3, titanium frame.",
    specs: { display: "6.8-inch Dynamic AMOLED 2X", ram: "12GB", storage: "512GB", battery: "5000mAh", os: "Android 14", camera: "200MP + 50MP + 10MP + 12MP" }
  },
  {
    id: "p007", name: "OnePlus 12 256GB", brand: "OnePlus", category: "smartphones",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80",
    description: "Snapdragon 8 Gen 3 with Hasselblad triple camera. 100W SUPERVOOC charging, 5400mAh battery.",
    specs: { display: "6.82-inch AMOLED 120Hz", ram: "12GB", storage: "256GB", battery: "5400mAh", os: "OxygenOS 14", charging: "100W SUPERVOOC" }
  },
  {
    id: "p012", name: "Google Pixel 8 Pro 256GB", brand: "Google", category: "smartphones",
    image: "https://images.unsplash.com/photo-1689252550497-a49be0ccedaa?w=400&q=80",
    description: "Tensor G3 chip, 50MP triple rear camera, seven years of OS and security updates guaranteed.",
    specs: { display: "6.7-inch LTPO OLED", ram: "12GB", storage: "256GB", battery: "5050mAh", os: "Android 14", camera: "50MP + 48MP + 48MP" }
  },
  {
    id: "p013", name: "Motorola Edge 50 Pro 256GB", brand: "Motorola", category: "smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    description: "6.7-inch OLED display with 144Hz, 50MP OIS camera, 125W TurboPower fast charging.",
    specs: { display: "6.7-inch pOLED 144Hz", ram: "12GB", storage: "256GB", battery: "4500mAh", os: "Android 14", charging: "125W TurboPower" }
  },
  {
    id: "p014", name: "Xiaomi 14 Ultra 512GB", brand: "Xiaomi", category: "smartphones",
    image: "https://images.unsplash.com/photo-1586041828039-b8d193d6d1c4?w=400&q=80",
    description: "Leica co-engineered optics, Snapdragon 8 Gen 3, 1-inch Sony LYT-900 primary sensor.",
    specs: { display: "6.73-inch AMOLED 120Hz", ram: "16GB", storage: "512GB", battery: "5000mAh", os: "Android 14", camera: "50MP Leica 1-inch sensor" }
  },
  {
    id: "p015", name: "Realme GT 6 256GB", brand: "Realme", category: "smartphones",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80",
    description: "Snapdragon 8s Gen 3, 50MP Sony LYT-808 sensor, massive 5500mAh battery.",
    specs: { display: "6.78-inch AMOLED 120Hz", ram: "12GB", storage: "256GB", battery: "5500mAh", os: "Android 14", charging: "120W SUPERVOOC" }
  },
  {
    id: "p016", name: "iQOO 12 256GB", brand: "iQOO", category: "smartphones",
    image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&q=80",
    description: "Snapdragon 8 Gen 3, 144Hz AMOLED display, 50MP Zeiss cameras, 120W FlashCharge.",
    specs: { display: "6.78-inch AMOLED 144Hz", ram: "12GB", storage: "256GB", battery: "5000mAh", os: "Android 14", charging: "120W FlashCharge" }
  },

  // ── LAPTOPS ──────────────────────────────────────────────────────────────────
  {
    id: "p004", name: "Apple MacBook Pro 14-inch M3 Pro", brand: "Apple", category: "laptops",
    image: "https://images.unsplash.com/photo-1611186871525-b36c9945e5d4?w=400&q=80",
    description: "M3 Pro chip, Liquid Retina XDR display, 18-hour battery, MagSafe, HDMI and SD card slot.",
    specs: { processor: "Apple M3 Pro", ram: "18GB", storage: "512GB SSD", display: "14.2-inch Liquid Retina XDR", battery: "18h", ports: "MagSafe, HDMI, SD, 3× TB4" }
  },
  {
    id: "p009", name: "Dell XPS 15 9530 Core i7", brand: "Dell", category: "laptops",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80",
    description: "15.6-inch OLED display, 13th Gen Core i7-13700H, NVIDIA GeForce RTX 4060, 16GB DDR5.",
    specs: { processor: "Intel Core i7-13700H", ram: "16GB DDR5", storage: "512GB NVMe SSD", display: "15.6-inch OLED", gpu: "NVIDIA RTX 4060" }
  },
  {
    id: "p017", name: "HP Spectre x360 14 OLED Core i7", brand: "HP", category: "laptops",
    image: "https://images.unsplash.com/photo-1526570207772-784d36084510?w=400&q=80",
    description: "2-in-1 convertible with 13th Gen Intel Core i7, 2.8K OLED touch display, 17h battery.",
    specs: { processor: "Intel Core i7-1355U", ram: "16GB LPDDR5", storage: "1TB NVMe SSD", display: "13.5-inch OLED 2.8K Touch", battery: "17h" }
  },
  {
    id: "p018", name: "ASUS ROG Zephyrus G14 Ryzen 9", brand: "ASUS", category: "laptops",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80",
    description: "AMD Ryzen 9 7940HS, RTX 4060, 14-inch OLED 120Hz display, 16GB LPDDR5 RAM.",
    specs: { processor: "AMD Ryzen 9 7940HS", ram: "16GB LPDDR5", storage: "512GB NVMe SSD", display: "14-inch OLED 120Hz", gpu: "NVIDIA RTX 4060" }
  },
  {
    id: "p019", name: "Lenovo ThinkPad X1 Carbon Gen 11", brand: "Lenovo", category: "laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
    description: "14-inch IPS 2.8K, 13th Gen Core i7, 32GB RAM, 1TB SSD, MIL-SPEC durability, only 1.12kg.",
    specs: { processor: "Intel Core i7-1365U", ram: "32GB LPDDR5", storage: "1TB NVMe SSD", display: "14-inch IPS 2.8K", weight: "1.12kg" }
  },
  {
    id: "p020", name: "Microsoft Surface Laptop 5 Core i5", brand: "Microsoft", category: "laptops",
    image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=400&q=80",
    description: "13.5-inch PixelSense touch display, 12th Gen Core i5, Alcantara keyboard deck, 18h battery.",
    specs: { processor: "Intel Core i5-1245U", ram: "8GB LPDDR5x", storage: "512GB SSD", display: "13.5-inch PixelSense 2256×1504", battery: "18h" }
  },

  // ── AUDIO ─────────────────────────────────────────────────────────────────────
  {
    id: "p003", name: "Sony WH-1000XM5 Wireless Headphones", brand: "Sony", category: "audio",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80",
    description: "Industry-leading noise cancellation with 8 microphones, 30-hour battery, Speak-to-Chat.",
    specs: { type: "Over-ear", driver: "30mm", noiseCancellation: "Yes", battery: "30h", connectivity: "Bluetooth 5.2" }
  },
  {
    id: "p008", name: "Bose QuietComfort 45 Headphones", brand: "Bose", category: "audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    description: "TriPort acoustic architecture, 24-hour battery, Aware Mode, multipoint connection.",
    specs: { type: "Over-ear", noiseCancellation: "Yes", battery: "24h", connectivity: "Bluetooth 5.1", weight: "240g" }
  },
  {
    id: "p021", name: "Apple AirPods Pro 2nd Gen", brand: "Apple", category: "audio",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&q=80",
    description: "H2 chip, Adaptive Transparency, Personalised Spatial Audio, USB-C charging case.",
    specs: { type: "In-ear TWS", noiseCancellation: "Adaptive ANC", battery: "6h (30h with case)", connectivity: "Bluetooth 5.3", waterResistance: "IPX4" }
  },
  {
    id: "p022", name: "Samsung Galaxy Buds2 Pro", brand: "Samsung", category: "audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80",
    description: "Hi-Fi 24-bit audio, Intelligent ANC, 360° Audio, 8-hour playtime (29h with case).",
    specs: { type: "In-ear TWS", driver: "10mm woofer + 5.5mm tweeter", battery: "8h (29h case)", connectivity: "Bluetooth 5.3", noiseCancellation: "Yes" }
  },
  {
    id: "p023", name: "JBL Flip 6 Portable Bluetooth Speaker", brand: "JBL", category: "audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    description: "Bold JBL Original Pro Sound, IP67 waterproof and dustproof, 12-hour playtime, PartyBoost.",
    specs: { type: "Portable Speaker", waterResistance: "IP67", battery: "12h", connectivity: "Bluetooth 5.1", power: "20W" }
  },
  {
    id: "p024", name: "Sony WF-1000XM5 TWS Earbuds", brand: "Sony", category: "audio",
    image: "https://images.unsplash.com/photo-1631176093616-ae0174dfc96a?w=400&q=80",
    description: "Best-in-class ANC in a compact earbud, 8h battery (24h with case), LDAC Hi-Res support.",
    specs: { type: "In-ear TWS", driver: "8.4mm", noiseCancellation: "Yes", battery: "8h (24h case)", connectivity: "Bluetooth 5.3" }
  },
  {
    id: "p025", name: "Sennheiser Momentum 4 Wireless Headphones", brand: "Sennheiser", category: "audio",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80",
    description: "Exceptional 60-hour battery life, adaptive ANC, AAC and aptX support.",
    specs: { type: "Over-ear", noiseCancellation: "Adaptive ANC", battery: "60h", connectivity: "Bluetooth 5.2", driver: "42mm" }
  },

  // ── TELEVISIONS ──────────────────────────────────────────────────────────────
  {
    id: "p005", name: "LG C3 65-inch OLED TV 4K", brand: "LG", category: "televisions",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=400&q=80",
    description: "Evo OLED panel, α9 AI Processor Gen6, Dolby Vision IQ, 120Hz, G-Sync compatible.",
    specs: { size: "65-inch", resolution: "4K UHD", panel: "OLED Evo", hdr: "Dolby Vision IQ", smartTV: "webOS 23", refreshRate: "120Hz" }
  },
  {
    id: "p010", name: "Samsung 65-inch Neo QLED 8K QN800C", brand: "Samsung", category: "televisions",
    image: "https://images.unsplash.com/photo-1571415060716-baff5ea4c82e?w=400&q=80",
    description: "8K Neo QLED, Neural Quantum Processor 8K, Infinity One Design, 60W 4.2.2ch sound.",
    specs: { size: "65-inch", resolution: "8K", panel: "Neo QLED", hdr: "HDR10+", smartTV: "Tizen OS", refreshRate: "144Hz" }
  },
  {
    id: "p026", name: "Sony Bravia XR A80L 55-inch OLED 4K", brand: "Sony", category: "televisions",
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400&q=80",
    description: "Cognitive Processor XR, XR Acoustic Multi-Audio, Google TV, the perfect PS5 companion.",
    specs: { size: "55-inch", resolution: "4K UHD", panel: "OLED", hdr: "Dolby Vision, HDR10", smartTV: "Google TV", refreshRate: "120Hz" }
  },
  {
    id: "p027", name: "Xiaomi Mi QLED TV 75-inch 4K", brand: "Xiaomi", category: "televisions",
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400&q=80",
    description: "75-inch Quantum Dot display, 120Hz, Dolby Vision, 30W speakers, PatchWall + Android TV.",
    specs: { size: "75-inch", resolution: "4K UHD", panel: "QLED", hdr: "Dolby Vision", smartTV: "PatchWall + Android TV", refreshRate: "120Hz" }
  },

  // ── APPLIANCES ───────────────────────────────────────────────────────────────
  {
    id: "p006", name: "Dyson V15 Detect Absolute Vacuum Cleaner", brand: "Dyson", category: "appliances",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    description: "Laser reveals invisible dust, HEPA filtration, 60-min battery, LCD particle counter.",
    specs: { suction: "240 AW", battery: "60 min", weight: "3.1kg", filtration: "HEPA", dustbin: "0.77L" }
  },
  {
    id: "p011", name: "Philips Air Fryer XXL HD9860 7.3L", brand: "Philips", category: "appliances",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80",
    description: "7.3L XXL capacity, Fat Removal Technology, Smart Sensing technology, 7 presets.",
    specs: { capacity: "7.3L", power: "2225W", temperature: "40-200°C", presets: "7", weight: "8.5kg" }
  },
  {
    id: "p028", name: "LG 8kg Front Load Washing Machine FHM1408BDL", brand: "LG", category: "appliances",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
    description: "AI DD technology detects fabric, TurboWash 360°, 6 Motion technology, 5-star BEE rating.",
    specs: { capacity: "8kg", rpm: "1400 RPM", energyRating: "5 Star", programs: "14", steamCare: "Yes" }
  },
  {
    id: "p029", name: "Voltas 1.5 Ton 5-Star Inverter Split AC 185V Vectra Plus", brand: "Voltas", category: "appliances",
    image: "https://images.unsplash.com/photo-1631567091271-4b1c21f24ef2?w=400&q=80",
    description: "5-star BEE rating, adjustable inverter compressor, auto-clean, Wi-Fi enabled control.",
    specs: { capacity: "1.5 Ton", starRating: "5 Star", type: "Split AC", compressor: "Inverter", coverage: "150-180 sq ft" }
  },
  {
    id: "p030", name: "Prestige Electric Pressure Cooker PECSS 6L", brand: "Prestige", category: "appliances",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    description: "6L multi-function electric pressure cooker with 7-in-1 functions, stainless steel inner pot.",
    specs: { capacity: "6L", power: "1000W", functions: "7-in-1", material: "Stainless Steel inner pot", warranty: "1 year" }
  },

  // ── WEARABLES ────────────────────────────────────────────────────────────────
  {
    id: "p032", name: "Apple Watch Series 9 GPS 45mm Midnight", brand: "Apple", category: "wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    description: "S9 SiP chip, Double Tap gesture, always-on Retina display, ECG, blood oxygen sensor.",
    specs: { display: "45mm Always-On Retina", chip: "S9 SiP", battery: "18h", sensors: "ECG, Blood Oxygen, Temperature", waterResistance: "50m" }
  },
  {
    id: "p033", name: "Samsung Galaxy Watch 6 Classic 47mm Black", brand: "Samsung", category: "wearables",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80",
    description: "Classic rotating bezel, Exynos W930 chip, sapphire crystal glass, 40+ hour battery.",
    specs: { display: "47mm Super AMOLED", processor: "Exynos W930", battery: "44h", sensors: "BioActive, Accelerometer, Barometer", waterResistance: "5ATM" }
  },
  {
    id: "p034", name: "Garmin Fenix 7 Pro Sapphire Solar GPS Watch", brand: "Garmin", category: "wearables",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&q=80",
    description: "Solar charging, multi-band GPS, 22-day battery, built-in LED flashlight, topographic mapping.",
    specs: { display: "1.3-inch MIP solar", battery: "22 days (57d solar)", gps: "Multi-band GPS/GLONASS", sensors: "Pulse Ox, HRV, Body Battery", waterResistance: "10ATM" }
  },
  {
    id: "p035", name: "Fitbit Sense 2 Advanced Health Smartwatch", brand: "Fitbit", category: "wearables",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80",
    description: "Continuous EDA scan app, ECG, skin temperature, stress management score, 6-day battery.",
    specs: { display: "1.58-inch AMOLED", battery: "6 days", sensors: "EDA, ECG, SpO2, Skin Temperature", gps: "Built-in GPS", waterResistance: "5ATM" }
  },
  {
    id: "p036", name: "boAt Wave Flex Connect Bluetooth Calling Watch", brand: "boAt", category: "wearables",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&q=80",
    description: "1.83-inch HD display, Bluetooth calling, 100+ sports modes, 7-day battery life.",
    specs: { display: "1.83-inch HD TFT", battery: "7 days", calling: "Bluetooth Calling", modes: "100+ sports modes", waterResistance: "IP68" }
  },
  {
    id: "p037", name: "Noise ColorFit Ultra 3 Amoled BT Calling Watch", brand: "Noise", category: "wearables",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&q=80",
    description: "1.96-inch AMOLED display, Bluetooth calling, SpO2, heart rate, 150+ watch faces.",
    specs: { display: "1.96-inch AMOLED", battery: "7 days", calling: "Bluetooth Calling", healthTracking: "SpO2, HR, Stress", waterResistance: "IP68" }
  },

  // ── SPORTS & FITNESS ──────────────────────────────────────────────────────────
  {
    id: "p038", name: "Yonex Arcsaber 11 Pro Badminton Racket", brand: "Yonex", category: "sports",
    image: "https://images.unsplash.com/photo-1547941126-3d5322b218b0?w=400&q=80",
    description: "Ultra PE Fiber + Nanomesh Neo carbon graphite frame, high repulsion and control.",
    specs: { weight: "82g (4U)", balance: "Even balance", flexibility: "Stiff", recommendedString: "BG80 Power", grip: "G5" }
  },
  {
    id: "p039", name: "Decathlon Domyos Cross Training Shoes", brand: "Decathlon", category: "sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    description: "Reinforced toe box, flexible EVA foam midsole, mesh upper, ideal for gym workouts.",
    specs: { sole: "EVA foam", upper: "Mesh + synthetic", closure: "Lace-up", purpose: "Cross Training / Gym", sizes: "UK 6-12" }
  },
  {
    id: "p040", name: "Cosco Pro Jump Skipping Rope", brand: "Cosco", category: "sports",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&q=80",
    description: "PVC rope with foam handles, ball-bearing mechanism for smooth rotation, adjustable length.",
    specs: { material: "PVC + Foam handles", length: "Adjustable up to 9ft", bearings: "Ball bearing", weight: "120g", purpose: "Cardio / Fitness" }
  },
  {
    id: "p041", name: "Nivia Football Pro 32-Panel Size 5", brand: "Nivia", category: "sports",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&q=80",
    description: "32-panel thermally bonded football, PU outer casing, ideal for grass and turf pitches.",
    specs: { size: "Size 5", panels: "32", material: "PU outer casing", inflation: "Pre-inflated", recommended: "Grass / Turf pitch" }
  },
  {
    id: "p042", name: "Boldfit Resistance Bands Set of 5", brand: "Boldfit", category: "sports",
    image: "https://images.unsplash.com/photo-1517961880502-374dc90bd073?w=400&q=80",
    description: "5 progressive latex resistance bands (5–40 lbs), ideal for stretching, yoga and rehab.",
    specs: { pieces: "5 bands", resistance: "5 / 10 / 20 / 30 / 40 lbs", material: "Natural Latex", purpose: "Stretching, Yoga, Rehab", included: "Carry bag" }
  },
  {
    id: "p043", name: "Kalenji Run Support Road Running Shoes", brand: "Kalenji", category: "sports",
    image: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=400&q=80",
    description: "8mm heel-to-toe drop, EVA foam midsole, durable rubber outsole for road running.",
    specs: { drop: "8mm", midsole: "EVA foam", outsole: "Rubber", weight: "270g per shoe", purpose: "Road Running" }
  },

  // ── GROCERIES / FOOD ──────────────────────────────────────────────────────────
  {
    id: "p044", name: "Tata Gold Leaf Tea 1kg Pouch", brand: "Tata Tea", category: "groceries",
    image: "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=400&q=80",
    description: "Premium blend of Assam and Darjeeling tea leaves, strong flavour, airtight packaging.",
    specs: { weight: "1kg", type: "Leaf Tea", blend: "Assam + Darjeeling", packagingType: "Airtight Pouch", caffeineContent: "Medium-High" }
  },
  {
    id: "p045", name: "Aashirvaad Whole Wheat Atta 10kg Bag", brand: "Aashirvaad", category: "groceries",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80",
    description: "Select grains from the Sona Masoori wheat belt, stone-ground whole wheat flour.",
    specs: { weight: "10kg", type: "Whole Wheat Atta", grainSource: "Sona Masoori belt", milling: "Stone Ground", protein: "12g per 100g" }
  },
  {
    id: "p046", name: "Amul Pasteurised Butter 500g", brand: "Amul", category: "groceries",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Pasteurised table butter made from fresh cream, zero artificial flavours or colours.",
    specs: { weight: "500g", type: "Pasteurised Table Butter", fatContent: "80%", saltContent: "Salted", storageTemp: "Below 4°C" }
  },
  {
    id: "p047", name: "Organic India Tulsi Green Tea 25 Bags", brand: "Organic India", category: "groceries",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
    description: "USDA organic certified blend of green tea and holy basil (tulsi), antioxidant-rich.",
    specs: { bags: "25 tea bags", type: "Green Tea + Tulsi", certification: "USDA Organic, Non-GMO", caffeineContent: "Low", flavour: "Mild, Earthy" }
  },
  {
    id: "p048", name: "Quaker Oats 2kg Jar", brand: "Quaker", category: "groceries",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&q=80",
    description: "100% whole grain rolled oats, no added sugar, rich in beta-glucan soluble fibre.",
    specs: { weight: "2kg", type: "Rolled Oats", grain: "100% Whole Grain", fibre: "Beta-glucan", cookTime: "3-5 minutes" }
  },
  {
    id: "p049", name: "Tropicana 100% Orange Juice 1L Tetra Pack", brand: "Tropicana", category: "groceries",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80",
    description: "100% pure squeezed orange juice, no added sugar, rich in Vitamin C, no preservatives.",
    specs: { volume: "1 Litre", type: "100% Pure Fruit Juice", addedSugar: "None", vitaminC: "100% RDA", packaging: "Tetra Pak" }
  },
  {
    id: "p050", name: "Fortune Sunflower Refined Oil 5L PET Bottle", brand: "Fortune", category: "groceries",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80",
    description: "Refined sunflower oil, rich in Vitamin E, light texture, high smoke point of 230°C.",
    specs: { volume: "5 Litres", type: "Refined Sunflower Oil", vitaminE: "Yes", smokePoint: "~230°C", packaging: "PET Bottle" }
  },

  // ── FURNITURE ─────────────────────────────────────────────────────────────────
  {
    id: "p051", name: "Wakefit Orthopaedic Memory Foam Mattress Queen", brand: "Wakefit", category: "furniture",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
    description: "7-zone orthopedic support, memory foam top layer, 7.5-inch thickness, 10-year warranty.",
    specs: { size: "Queen (60×78 inch)", thickness: "7.5 inch", material: "Memory Foam + HR Foam", warranty: "10 years", trialPeriod: "100 nights free trial" }
  },
  {
    id: "p052", name: "IKEA ALEX 9-Drawer Unit White", brand: "IKEA", category: "furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    description: "9-drawer steel unit with smooth-running drawers, white powder coating, cable management hole.",
    specs: { drawers: "9", material: "Powder-coated Steel", color: "White", dimensions: "36×70×116cm", loadCapacity: "20kg per drawer" }
  },
  {
    id: "p053", name: "Nilkamal Stackable Plastic Chair Set of 4", brand: "Nilkamal", category: "furniture",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    description: "Virgin polypropylene material, UV-resistant, stackable design, 150kg load capacity.",
    specs: { material: "Virgin Polypropylene", capacity: "150kg per chair", color: "White", packOf: "4 chairs", uvResistant: "Yes" }
  },
  {
    id: "p054", name: "Urban Ladder Kowloon 3-Seater Fabric Sofa", brand: "Urban Ladder", category: "furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    description: "Solid hardwood frame, pocket-spring cushions, easy-clean polyester fabric, 6 colour options.",
    specs: { seats: "3-seater", frame: "Solid Hardwood", cushion: "Pocket Spring", fabric: "Easy-Clean Polyester", dimensions: "225×88×84cm" }
  },
  {
    id: "p055", name: "Hometown Mango Wood Computer Desk with Shelves", brand: "Hometown", category: "furniture",
    image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&q=80",
    description: "Solid mango wood top, keyboard tray, CPU holder, 2 open shelves, natural finish.",
    specs: { material: "Solid Mango Wood + MDF", color: "Natural Wood", finish: "Lacquer", dimensions: "120×60×75cm", weight: "28kg" }
  },

  // ── PERSONAL CARE ─────────────────────────────────────────────────────────────
  {
    id: "p056", name: "Philips Series 9000 Prestige Wet & Dry Shaver SP9860", brand: "Philips", category: "personal_care",
    image: "https://images.unsplash.com/photo-1587495399079-0fcd6e2cd7c9?w=400&q=80",
    description: "SkinIQ motor, 8-direction contour-following head, SmartClean Plus charging station.",
    specs: { blades: "V-Track Precision Blades Pro", battery: "60 min", cleaning: "SmartClean Plus system", waterResistance: "IPX7", display: "SmartClick display" }
  },
  {
    id: "p057", name: "Dyson Airwrap Complete Long Styler HS05", brand: "Dyson", category: "personal_care",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80",
    description: "Coanda effect styles and dries simultaneously with no extreme heat damage to hair.",
    specs: { type: "Multi-styler + Dryer", heatSettings: "3 heat / 3 speed", technology: "Coanda Airflow", attachments: "6 attachments (full set)", cableLength: "2.7m" }
  },
  {
    id: "p058", name: "Lakmé Absolute Matte Revolution Lip Color", brand: "Lakmé", category: "personal_care",
    image: "https://images.unsplash.com/photo-1586495777744-4e6232bf2f9a?w=400&q=80",
    description: "Matte finish, 12-hour colour stay, Vitamin E enriched formula, available in 30 shades.",
    specs: { finish: "Matte", wearTime: "12 hours", keyIngredient: "Vitamin E", shades: "30 shades available", weight: "3.7g" }
  },
  {
    id: "p059", name: "Himalaya Herbals Purifying Neem Face Wash 150ml", brand: "Himalaya", category: "personal_care",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
    description: "Purifying neem and turmeric blend, removes excess oil, dermatologist tested formula.",
    specs: { volume: "150ml", type: "Gel Face Wash", keyIngredients: "Neem + Turmeric", skinType: "All skin types", certified: "Dermatologist tested" }
  },
  {
    id: "p060", name: "Neutrogena Hydro Boost Water Gel SPF50+ Sunscreen 50ml", brand: "Neutrogena", category: "personal_care",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
    description: "SPF50+ PA++++ broad-spectrum sunscreen gel with hyaluronic acid, non-greasy finish.",
    specs: { volume: "50ml", spf: "SPF50+ PA++++", keyIngredient: "Hyaluronic Acid", texture: "Water Gel (non-greasy)", suitableFor: "All skin types" }
  },
  {
    id: "p061", name: "Havells HC4025 Professional Hair Dryer 2000W", brand: "Havells", category: "personal_care",
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=400&q=80",
    description: "2000W powerful motor, 3 heat settings, cool-shot button, concentrator nozzle, foldable.",
    specs: { power: "2000W", heatSettings: "3 heat + cool shot", attachments: "Concentrator nozzle", cable: "1.8m swivel cord", weight: "430g" }
  },
];

// ══════════════════════════════════════════════════════════════════════════════
//  PLATFORM LISTINGS
//  mkListing(price, originalPrice, rating, reviews, inStock, deliveryDays, seller, emi)
// ══════════════════════════════════════════════════════════════════════════════
export const PLATFORM_LISTINGS = {
  amazon: [
    // Smartphones
    { productId: "p001", ...mkListing(134900, 139900, 4.5, 8420,  true,  2, "Amazon Fulfilled") },
    { productId: "p002", ...mkListing(129999, 134999, 4.4, 6210,  true,  1, "Samsung Official Store") },
    { productId: "p007", ...mkListing(62999,  64999,  4.3, 9800,  true,  1, "OnePlus India") },
    { productId: "p012", ...mkListing(84999,  89999,  4.5, 4100,  true,  1, "Google Store India") },
    { productId: "p013", ...mkListing(28999,  34999,  4.2, 3200,  true,  2, "Motorola India") },
    { productId: "p014", ...mkListing(94999,  99999,  4.6, 2800,  true,  2, "Xiaomi India Official") },
    { productId: "p015", ...mkListing(29999,  35999,  4.3, 5100,  true,  1, "Realme India") },
    { productId: "p016", ...mkListing(49999,  54999,  4.4, 4600,  true,  1, "iQOO India Official") },
    // Laptops
    { productId: "p004", ...mkListing(189900, 199900, 4.7, 3200,  true,  3, "Apple Authorized Reseller") },
    { productId: "p009", ...mkListing(159990, 169990, 4.3, 1800,  true,  3, "Dell India") },
    { productId: "p017", ...mkListing(129990, 149990, 4.5, 1400,  true,  4, "HP India Official") },
    { productId: "p018", ...mkListing(109990, 124990, 4.4, 1100,  true,  3, "ASUS India") },
    { productId: "p019", ...mkListing(174900, 189900, 4.6, 820,   true,  5, "Lenovo India") },
    { productId: "p020", ...mkListing(89990,  99990,  4.3, 640,   false, 5, "Microsoft India") },
    // Audio
    { productId: "p003", ...mkListing(28990,  34990,  4.6, 15800, true,  2, "Sony India") },
    { productId: "p008", ...mkListing(29000,  32000,  4.5, 7600,  false, 4, "Bose India") },
    { productId: "p021", ...mkListing(24900,  26900,  4.7, 22100, true,  1, "Apple Authorized Reseller") },
    { productId: "p022", ...mkListing(13990,  17990,  4.4, 9200,  true,  2, "Samsung Official Store") },
    { productId: "p023", ...mkListing(9999,   12999,  4.5, 18400, true,  2, "JBL India") },
    { productId: "p024", ...mkListing(26990,  29990,  4.6, 8900,  true,  2, "Sony India") },
    { productId: "p025", ...mkListing(29900,  34900,  4.5, 3200,  true,  3, "Sennheiser India") },
    // TVs
    { productId: "p005", ...mkListing(139990, 159990, 4.5, 2100,  true,  5, "LG Electronics India") },
    { productId: "p010", ...mkListing(289990, 329990, 4.4, 780,   true,  5, "Samsung Official Store") },
    { productId: "p026", ...mkListing(129990, 149990, 4.5, 1600,  true,  6, "Sony India") },
    { productId: "p027", ...mkListing(79990,  99990,  4.2, 3400,  true,  4, "Xiaomi India Official") },
    // Appliances
    { productId: "p006", ...mkListing(52900,  59900,  4.4, 4300,  true,  2, "Dyson Official India") },
    { productId: "p011", ...mkListing(12995,  15995,  4.4, 22400, true,  2, "Philips India") },
    { productId: "p028", ...mkListing(44990,  54990,  4.5, 8600,  true,  5, "LG Electronics India") },
    { productId: "p029", ...mkListing(34990,  42990,  4.3, 5200,  true,  5, "Voltas India") },
    { productId: "p030", ...mkListing(3499,   4499,   4.4, 14200, true,  2, "Prestige India") },
    // Wearables
    { productId: "p032", ...mkListing(44900,  45900,  4.7, 12400, true,  1, "Apple Authorized Reseller") },
    { productId: "p033", ...mkListing(29999,  34999,  4.4, 6800,  true,  2, "Samsung Official Store") },
    { productId: "p034", ...mkListing(69990,  79990,  4.6, 2100,  true,  3, "Garmin India") },
    { productId: "p035", ...mkListing(18999,  22999,  4.2, 4100,  true,  2, "Fitbit India") },
    { productId: "p036", ...mkListing(1799,   3499,   4.0, 32000, true,  2, "boAt India", false) },
    { productId: "p037", ...mkListing(2299,   4499,   4.1, 28000, true,  2, "Noise India", false) },
    // Sports
    { productId: "p038", ...mkListing(6999,   8999,   4.5, 3400,  true,  3, "Yonex India") },
    { productId: "p039", ...mkListing(2999,   3999,   4.2, 8200,  true,  3, "Decathlon India") },
    { productId: "p040", ...mkListing(499,    799,    4.3, 21000, true,  2, "Cosco India", false) },
    { productId: "p041", ...mkListing(899,    1199,   4.1, 6500,  true,  3, "Nivia India", false) },
    { productId: "p042", ...mkListing(799,    1299,   4.4, 14500, true,  2, "Boldfit India", false) },
    { productId: "p043", ...mkListing(2499,   3499,   4.1, 5200,  true,  3, "Kalenji India") },
    // Groceries
    { productId: "p044", ...mkListing(549,    599,    4.5, 41000, true,  1, "Amazon Pantry", false) },
    { productId: "p045", ...mkListing(489,    549,    4.6, 52000, true,  1, "Amazon Fresh", false) },
    { productId: "p046", ...mkListing(269,    299,    4.7, 68000, true,  1, "Amazon Fresh", false) },
    { productId: "p047", ...mkListing(225,    299,    4.5, 19000, true,  2, "Organic India Store", false) },
    { productId: "p048", ...mkListing(449,    549,    4.6, 38000, true,  1, "Amazon Pantry", false) },
    { productId: "p049", ...mkListing(119,    145,    4.3, 28000, true,  1, "Amazon Fresh", false) },
    { productId: "p050", ...mkListing(699,    799,    4.4, 31000, true,  1, "Amazon Pantry", false) },
    // Furniture
    { productId: "p051", ...mkListing(9999,   14999,  4.6, 28000, true,  7, "Wakefit Direct") },
    { productId: "p052", ...mkListing(14990,  17990,  4.3, 1900,  true,  10, "IKEA India") },
    { productId: "p053", ...mkListing(2999,   3999,   4.1, 8400,  true,  5, "Nilkamal Home Solutions") },
    { productId: "p054", ...mkListing(34999,  44999,  4.4, 3200,  true,  10, "Urban Ladder Official") },
    { productId: "p055", ...mkListing(6999,   8999,   4.2, 5600,  true,  7, "Hometown Furniture") },
    // Personal Care
    { productId: "p056", ...mkListing(24990,  29990,  4.5, 4100,  true,  2, "Philips India") },
    { productId: "p057", ...mkListing(44900,  54900,  4.6, 5600,  true,  3, "Dyson Official India") },
    { productId: "p058", ...mkListing(399,    499,    4.3, 22000, true,  2, "Lakmé India", false) },
    { productId: "p059", ...mkListing(169,    210,    4.6, 89000, true,  1, "Himalaya Wellness Store", false) },
    { productId: "p060", ...mkListing(449,    549,    4.4, 41000, true,  2, "Neutrogena India", false) },
    { productId: "p061", ...mkListing(1299,   1799,   4.2, 14000, true,  2, "Havells India", false) },
  ],

  flipkart: [
    // Smartphones
    { productId: "p001", ...mkListing(132999, 139900, 4.4, 11200, true,  3, "RetailNet") },
    { productId: "p002", ...mkListing(127990, 134999, 4.3, 8900,  true,  2, "SuperComNet") },
    { productId: "p007", ...mkListing(59999,  64999,  4.4, 14200, true,  2, "MobileZone") },
    { productId: "p012", ...mkListing(82999,  89999,  4.4, 5600,  true,  2, "MobileKart") },
    { productId: "p013", ...mkListing(27999,  34999,  4.1, 2800,  true,  3, "PhoneDeals FK") },
    { productId: "p014", ...mkListing(92999,  99999,  4.5, 2100,  true,  3, "Xiaomi Flipkart") },
    { productId: "p015", ...mkListing(28499,  35999,  4.2, 6200,  true,  2, "Realme Official FK") },
    { productId: "p016", ...mkListing(47999,  54999,  4.3, 3800,  true,  2, "iQOO Official FK") },
    // Laptops
    { productId: "p004", ...mkListing(192900, 199900, 4.6, 2800,  true,  4, "Flipkart Assured") },
    { productId: "p009", ...mkListing(155990, 169990, 4.2, 2200,  false, 5, "LaptopKart") },
    { productId: "p017", ...mkListing(127990, 149990, 4.4, 1100,  true,  5, "TechStore FK") },
    { productId: "p018", ...mkListing(106990, 124990, 4.3, 920,   true,  4, "ASUS India FK") },
    { productId: "p019", ...mkListing(172900, 189900, 4.5, 610,   true,  6, "Lenovo Flipkart") },
    { productId: "p020", ...mkListing(87990,  99990,  4.2, 510,   true,  5, "Microsoft FK") },
    // Audio
    { productId: "p003", ...mkListing(27490,  34990,  4.5, 19200, true,  3, "AudioKart") },
    { productId: "p008", ...mkListing(28500,  32000,  4.4, 9100,  true,  3, "AudioWorld") },
    { productId: "p021", ...mkListing(24499,  26900,  4.6, 18900, true,  2, "AppleZone FK") },
    { productId: "p022", ...mkListing(12999,  17990,  4.3, 8100,  true,  3, "SoundKart FK") },
    { productId: "p023", ...mkListing(9499,   12999,  4.4, 22100, true,  3, "SoundKart FK") },
    { productId: "p024", ...mkListing(25990,  29990,  4.5, 7200,  true,  3, "Sony Zone FK") },
    { productId: "p025", ...mkListing(28500,  34900,  4.4, 2600,  true,  4, "AudioPremium FK") },
    // TVs
    { productId: "p005", ...mkListing(136490, 159990, 4.4, 3400,  true,  6, "TechRetailer FK") },
    { productId: "p010", ...mkListing(274990, 329990, 4.3, 420,   true,  7, "TVWorld FK") },
    { productId: "p026", ...mkListing(126990, 149990, 4.4, 1200,  true,  7, "Sony Zone FK") },
    { productId: "p027", ...mkListing(76990,  99990,  4.1, 5100,  true,  5, "Mi Official FK") },
    // Appliances
    { productId: "p006", ...mkListing(54990,  59900,  4.3, 3100,  true,  3, "ApplianceHub FK") },
    { productId: "p011", ...mkListing(11999,  15995,  4.5, 31000, true,  2, "KitchenMart FK") },
    { productId: "p028", ...mkListing(42990,  54990,  4.4, 7400,  true,  6, "ApplianceHub FK") },
    { productId: "p029", ...mkListing(33990,  42990,  4.2, 4600,  true,  6, "CoolZone FK") },
    { productId: "p030", ...mkListing(3299,   4499,   4.3, 13800, true,  3, "KitchenMart FK", false) },
    // Wearables
    { productId: "p032", ...mkListing(44500,  45900,  4.6, 10800, true,  2, "AppleZone FK") },
    { productId: "p033", ...mkListing(28999,  34999,  4.3, 5900,  true,  3, "Samsung Zone FK") },
    { productId: "p034", ...mkListing(67990,  79990,  4.5, 1800,  true,  4, "Garmin India FK") },
    { productId: "p035", ...mkListing(17999,  22999,  4.1, 3400,  true,  3, "FitZone FK") },
    { productId: "p036", ...mkListing(1699,   3499,   4.0, 41000, true,  2, "boAt Zone FK", false) },
    { productId: "p037", ...mkListing(2199,   4499,   4.0, 33000, true,  2, "Noise India FK", false) },
    // Sports
    { productId: "p038", ...mkListing(6799,   8999,   4.4, 2900,  true,  4, "SportsWorld FK") },
    { productId: "p039", ...mkListing(2799,   3999,   4.1, 7100,  true,  4, "Decathlon FK") },
    { productId: "p040", ...mkListing(449,    799,    4.2, 24000, true,  2, "SportsKart FK", false) },
    { productId: "p041", ...mkListing(849,    1199,   4.0, 7200,  true,  3, "SportsKart FK", false) },
    { productId: "p042", ...mkListing(749,    1299,   4.3, 16200, true,  2, "FitnessZone FK", false) },
    { productId: "p043", ...mkListing(2299,   3499,   4.0, 4800,  true,  4, "SportsWorld FK") },
    // Groceries
    { productId: "p044", ...mkListing(529,    599,    4.5, 38000, true,  2, "Flipkart Supermart", false) },
    { productId: "p045", ...mkListing(469,    549,    4.5, 48000, true,  2, "Flipkart Supermart", false) },
    { productId: "p046", ...mkListing(259,    299,    4.6, 62000, true,  2, "Flipkart Supermart", false) },
    { productId: "p047", ...mkListing(215,    299,    4.4, 18000, true,  3, "OrganicKart FK", false) },
    { productId: "p048", ...mkListing(429,    549,    4.5, 34000, true,  2, "Flipkart Supermart", false) },
    { productId: "p049", ...mkListing(109,    145,    4.2, 25000, true,  2, "Flipkart Supermart", false) },
    { productId: "p050", ...mkListing(679,    799,    4.3, 28000, true,  2, "Flipkart Supermart", false) },
    // Furniture
    { productId: "p051", ...mkListing(9499,   14999,  4.5, 24000, true,  8, "Wakefit FK") },
    { productId: "p052", ...mkListing(14490,  17990,  4.2, 1600,  true,  12, "IKEA FK") },
    { productId: "p053", ...mkListing(2799,   3999,   4.0, 9200,  true,  6, "Nilkamal FK") },
    { productId: "p054", ...mkListing(32999,  44999,  4.3, 2800,  true,  12, "Urban Ladder FK") },
    { productId: "p055", ...mkListing(6499,   8999,   4.1, 4900,  true,  8, "FurnitureKart FK") },
    // Personal Care
    { productId: "p056", ...mkListing(23990,  29990,  4.4, 3600,  true,  3, "Philips Zone FK") },
    { productId: "p057", ...mkListing(43900,  54900,  4.5, 4900,  true,  4, "DysonKart FK") },
    { productId: "p058", ...mkListing(379,    499,    4.2, 26000, true,  2, "BeautyKart FK", false) },
    { productId: "p059", ...mkListing(155,    210,    4.5, 94000, true,  2, "Himalaya FK", false) },
    { productId: "p060", ...mkListing(429,    549,    4.3, 38000, true,  2, "SkinKart FK", false) },
    { productId: "p061", ...mkListing(1249,   1799,   4.1, 13000, true,  2, "Havells FK", false) },
  ],

  croma: [
    // Smartphones
    { productId: "p001", ...mkListing(136900, 139900, 4.3, 1200,  true,  3, "Croma Retail") },
    { productId: "p002", ...mkListing(131490, 134999, 4.2, 890,   false, 4, "Croma Retail") },
    { productId: "p007", ...mkListing(61999,  64999,  4.2, 1800,  true,  3, "Croma Retail") },
    { productId: "p012", ...mkListing(86490,  89999,  4.3, 920,   true,  3, "Croma Retail") },
    { productId: "p013", ...mkListing(29490,  34999,  4.0, 640,   true,  4, "Croma Retail") },
    { productId: "p014", ...mkListing(96490,  99999,  4.4, 480,   true,  4, "Croma Retail") },
    { productId: "p015", ...mkListing(30490,  35999,  4.1, 890,   true,  3, "Croma Retail") },
    { productId: "p016", ...mkListing(50490,  54999,  4.2, 720,   true,  3, "Croma Retail") },
    // Laptops
    { productId: "p004", ...mkListing(194900, 199900, 4.5, 680,   true,  5, "Croma Retail") },
    { productId: "p009", ...mkListing(161990, 169990, 4.1, 340,   true,  4, "Croma Retail") },
    { productId: "p017", ...mkListing(131990, 149990, 4.3, 280,   true,  6, "Croma Retail") },
    { productId: "p018", ...mkListing(111990, 124990, 4.2, 210,   true,  5, "Croma Retail") },
    { productId: "p019", ...mkListing(177900, 189900, 4.4, 180,   true,  7, "Croma Retail") },
    { productId: "p020", ...mkListing(91990,  99990,  4.1, 140,   true,  5, "Croma Retail") },
    // Audio
    { productId: "p003", ...mkListing(29990,  34990,  4.4, 3400,  true,  4, "Croma Retail") },
    { productId: "p008", ...mkListing(30490,  32000,  4.3, 1100,  true,  5, "Croma Retail") },
    { productId: "p021", ...mkListing(25490,  26900,  4.5, 4200,  true,  3, "Croma Retail") },
    { productId: "p022", ...mkListing(14490,  17990,  4.2, 1800,  true,  4, "Croma Retail") },
    { productId: "p023", ...mkListing(10490,  12999,  4.3, 3200,  true,  4, "Croma Retail") },
    { productId: "p024", ...mkListing(27490,  29990,  4.4, 1600,  true,  4, "Croma Retail") },
    { productId: "p025", ...mkListing(30490,  34900,  4.3, 580,   true,  5, "Croma Retail") },
    // TVs
    { productId: "p005", ...mkListing(141990, 159990, 4.3, 510,   true,  7, "Croma Retail") },
    { productId: "p010", ...mkListing(294990, 329990, 4.2, 180,   false, 10, "Croma Retail") },
    { productId: "p026", ...mkListing(131990, 149990, 4.3, 420,   true,  8, "Croma Retail") },
    { productId: "p027", ...mkListing(81990,  99990,  4.0, 1100,  true,  6, "Croma Retail") },
    // Appliances
    { productId: "p006", ...mkListing(51490,  59900,  4.5, 720,   true,  3, "Croma Retail") },
    { productId: "p011", ...mkListing(13490,  15995,  4.3, 4200,  true,  3, "Croma Retail") },
    { productId: "p028", ...mkListing(46990,  54990,  4.3, 2100,  true,  7, "Croma Retail") },
    { productId: "p029", ...mkListing(36490,  42990,  4.2, 1400,  true,  7, "Croma Retail") },
    { productId: "p030", ...mkListing(3699,   4499,   4.1, 2200,  true,  4, "Croma Retail", false) },
    // Wearables
    { productId: "p032", ...mkListing(45900,  45900,  4.6, 3200,  true,  3, "Croma Retail") },
    { productId: "p033", ...mkListing(31490,  34999,  4.2, 1900,  true,  4, "Croma Retail") },
    { productId: "p034", ...mkListing(71990,  79990,  4.4, 680,   true,  5, "Croma Retail") },
    { productId: "p035", ...mkListing(19990,  22999,  4.0, 980,   true,  4, "Croma Retail") },
    { productId: "p036", ...mkListing(1999,   3499,   3.9, 8200,  true,  3, "Croma Retail", false) },
    { productId: "p037", ...mkListing(2499,   4499,   4.0, 7100,  true,  3, "Croma Retail", false) },
    // Sports (Croma carries limited sports goods)
    { productId: "p038", ...mkListing(7299,   8999,   4.3, 480,   true,  5, "Croma Retail") },
    // Personal Care
    { productId: "p056", ...mkListing(25490,  29990,  4.4, 1200,  true,  3, "Croma Retail") },
    { productId: "p057", ...mkListing(46490,  54900,  4.5, 1800,  true,  4, "Croma Retail") },
    { productId: "p061", ...mkListing(1399,   1799,   4.1, 3200,  true,  3, "Croma Retail", false) },
    // Croma does not stock groceries or furniture
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
//  PRICE HISTORY GENERATOR — deterministic per (productId, platform)
// ══════════════════════════════════════════════════════════════════════════════
export function generatePriceHistory(productId, platform) {
  const listingEntry = PLATFORM_LISTINGS[platform]?.find(l => l.productId === productId);
  if (!listingEntry) return [];

  const { originalPrice, price: currentPrice } = listingEntry;
  const now = new Date();
  const history = [];

  // Stable pseudo-random seeded on productId + platform (no Math.random)
  const seed = productId.charCodeAt(1) * 31 + platform.charCodeAt(0) * 17;
  const rand = (i) => ((Math.sin(seed * 9301 + i * 49297 + 233995) + 1) / 2);

  for (let i = 11; i >= 0; i--) {
    const date = new Date(now);
    date.setMonth(date.getMonth() - i);

    // Trend: starts near originalPrice, converges toward currentPrice
    const progress = (11 - i) / 11;
    const trend = originalPrice - (originalPrice - currentPrice) * Math.pow(progress, 1.4);
    const noise = (rand(i) - 0.5) * originalPrice * 0.05; // ±2.5% noise
    const price = Math.max(currentPrice, Math.round((trend + noise) / 100) * 100);

    history.push({ date: date.toISOString().slice(0, 7), price });
  }

  history[history.length - 1].price = currentPrice;
  return history;
}
