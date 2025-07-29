# 🌍 GeoLocation API (Express.js + MongoDB + JWT)

GeoLocation API adalah RESTful API berbasis **Node.js (Express.js)** dengan **MongoDB** untuk mengelola data lokasi geografis.  
API ini dilengkapi dengan **autentikasi JWT** untuk mengamankan endpoint CRUD serta dokumentasi interaktif menggunakan **Swagger UI**.

---

## 🚀 Fitur Utama
- ✅ CRUD Lokasi (Create, Read, Update, Delete)
- ✅ Cari lokasi berdasarkan kategori
- ✅ Validasi input (latitude, longitude, dll.)
- ✅ Autentikasi JWT (Login & Register)
- ✅ Dokumentasi API via Swagger UI

---

## 🛠️ Teknologi yang Digunakan
- **Node.js** + **Express.js**
- **MongoDB** (Mongoose)
- **JWT** untuk autentikasi
- **Swagger UI** untuk dokumentasi API
- **Joi** untuk validasi data

---

## 📦 Instalasi & Menjalankan Aplikasi

### 1️⃣ Clone Repository
```bash
git clone https://github.com/username/geo-location-api.git
cd geo-location-api
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Konfigurasi Environment
Salin file .env.example menjadi .env:

bash
Copy
Edit
cp .env.example .env
Isi variabel berikut di .env:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/geo_location_db
JWT_SECRET=supersecretkey
4️⃣ Jalankan Server
bash
Copy
Edit
npm run dev
Server akan berjalan di:

arduino
Copy
Edit
http://localhost:5000
📖 Dokumentasi API (Swagger)
Swagger UI tersedia di endpoint:

bash
Copy
Edit
http://localhost:5000/api-docs
Melalui Swagger, Anda dapat mencoba langsung semua endpoint API.

🔐 Autentikasi JWT
Register User Baru

Endpoint: POST /api/auth/register

Body:

json
Copy
Edit
{ "username": "admin", "password": "123456" }
Login untuk Mendapatkan Token

Endpoint: POST /api/auth/login

Body:

json
Copy
Edit
{ "username": "admin", "password": "123456" }
Gunakan Token JWT

Sertakan token di setiap request CRUD (POST/PUT/DELETE) menggunakan header:

makefile
Copy
Edit
Authorization: Bearer <your_jwt_token>
📌 Endpoint Utama
Method	Endpoint	Deskripsi	Auth
GET	/api/locations	Ambil semua lokasi	❌
GET	/api/locations/{id}	Ambil lokasi berdasarkan ID	❌
GET	/api/locations/search	Cari lokasi berdasarkan kategori	❌
POST	/api/locations	Tambah lokasi baru	✅
PUT	/api/locations/{id}	Update lokasi berdasarkan ID	✅
DELETE	/api/locations/{id}	Hapus lokasi berdasarkan ID	✅

📝 Contoh Request Tambah Lokasi (JWT)
makefile
Copy
Edit
POST /api/locations
Headers: Authorization: Bearer <token>
Body:
{
  "name": "Kampus ITB",
  "latitude": -6.914744,
  "longitude": 107.609810,
  "description": "Institut Teknologi Bandung",
  "category": "Kampus"
}
✅ Commit History yang Direkomendasikan
Gunakan commit dengan pesan yang jelas:

bash
Copy
Edit
git commit -m "chore: inisialisasi project Express.js"
git commit -m "feat: tambah model Location dan koneksi MongoDB"
git commit -m "feat: implementasi CRUD lokasi dengan validasi Joi"
git commit -m "feat: implementasi autentikasi JWT (register & login)"
git commit -m "docs: tambahkan swagger.yaml dan README.md"
📄 Lisensi
Proyek ini dibuat untuk tujuan pembelajaran.

✨ Author
Ahmad Mayghinansyah
eghinansyah554@gmail.com
