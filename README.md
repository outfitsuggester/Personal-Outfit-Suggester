
 **AI-Powered Virtual Try-On & Outfit Recommendation System**  

 **An AI-driven fashion recommendation and virtual try-on platform that suggests outfits based on body shape & complexion and allows real-time outfit visualization.**  

## ** Features**  
✅ **User Authentication** – Secure login/signup (Firebase/Auth0).  
✅ **AI-Based Outfit Recommendations** – Body shape & complexion detection using AI.  
✅ **Virtual Try-On** – Real-time outfit overlay using OpenPose, StyleGAN, and Blender API.  
✅ **Affiliate Shopping Integration** – Direct outfit purchase links from Amazon, Myntra, etc.  
✅ **Admin Dashboard** – Manage AI recommendations, track user interactions.  
✅ **Responsive UI** – Colorful, interactive, and mobile-friendly design.  


## ** Tech Stack**  

### **Frontend:**  
- **React.js + Next.js** – Fast, SEO-friendly UI.  
- **Three.js / WebGL** – 3D rendering for virtual try-on.  
- **TailwindCSS** – Modern, customizable UI components.  

### **Backend:**  
- **Node.js + Express.js** – API handling & authentication.  
- **MongoDB / Firebase** – User data & preferences storage.  

### **AI / ML:**  
- **Pose Estimation** → OpenPose / MediaPipe (detect body key points).  
- **Outfit Transfer AI** → StyleGAN / ClothFlow (realistic outfit fitting).  
- **3D Model Creation** → Blender API / TensorFlow 3D.  
- **Real-time AI Processing** → WebRTC + TensorFlow Serving.  

### **API Integration:**  
- **Amazon, Myntra API** – Fetch real-time outfit links.  
- **Cloud GPU (AWS, Google Colab)** – AI model hosting.  



## **🖥️ Installation & Setup**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/ai-virtual-tryon.git
cd ai-virtual-tryon
```

### **2️⃣ Backend Setup**  
```bash
cd backend
npm install
npm start
```

### **3️⃣ Frontend Setup**  
```bash
cd frontend
npm install
npm run dev
```

### **4️⃣ AI Model Setup**  
- Ensure **Python 3.8+** is installed.  
- Install dependencies:  
```bash
cd ai-models
pip install -r requirements.txt
```
- Start AI server:  
```bash
python app.py
```



## ** Usage**  

1️⃣ **Sign up/Login** to your account.  
2️⃣ **Enter body measurements & upload a photo**.  
3️⃣ **AI suggests outfits** based on body shape & complexion.  
4️⃣ **Try outfits in real-time** using the virtual try-on feature.  
5️⃣ **Click on outfit links** to buy from Amazon/Myntra.  



## ** Folder Structure**  

/ai-virtual-tryon
│── /frontend            # React.js + Next.js UI
│── /backend             # Node.js + Express.js API
│── /ai-models           # AI/ML models (Pose Estimation, Outfit Transfer)
│── /public              # Images, assets
│── README.md            # Project documentation



## ** Roadmap**  
🚀 **Phase 1:** UI & Authentication (React.js + Firebase).  
🚀 **Phase 2:** AI Model Integration (Pose Estimation + Outfit Transfer).  
🚀 **Phase 3:** Affiliate Shopping API Integration.  
🚀 **Phase 4:** Admin Dashboard & Final Testing.  



## ** Contributors**  
A.Ramya Lahari

K.Brundha Sai

V.Bhavitha  


## ** License**  
This project is **open-source** under the MIT License.  



