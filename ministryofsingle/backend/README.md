# 🔧 ministryofsingle.com — Backend API
## Node.js + Express + TypeScript + Prisma

---

## Claude Code — อ่านก่อนทำงาน

**Purpose:** REST API สำหรับ ministryofsingle.com (web + mobile)  
**Port:** 4000  
**Auth:** JWT Bearer tokens  
**DB:** PostgreSQL via Prisma  

---

## API Endpoints

### Auth
```
POST   /api/auth/register          Register new member
POST   /api/auth/login             Login → returns JWT
POST   /api/auth/logout            Invalidate token
POST   /api/auth/refresh           Refresh JWT
GET    /api/auth/me                Get current user (auth required)
```

### Articles
```
GET    /api/articles               List articles (paginated, filterable)
GET    /api/articles/:slug         Get single article
GET    /api/articles/featured      Get featured articles (homepage)
POST   /api/articles               Create article (admin)
PUT    /api/articles/:id           Update article (admin)
POST   /api/articles/:id/view      Increment view count
```

### Newsletter
```
POST   /api/newsletter/subscribe   Subscribe email
DELETE /api/newsletter/unsubscribe Unsubscribe
```

### Members
```
GET    /api/members/me             Get profile
PUT    /api/members/me             Update profile
GET    /api/members/me/saved       Saved articles
POST   /api/members/me/saved/:id   Save article
DELETE /api/members/me/saved/:id   Unsave article
```

---

## Setup

```bash
npm init -y
npm install express cors helmet morgan dotenv
npm install @prisma/client prisma
npm install jsonwebtoken bcryptjs
npm install resend
npm install zod
npm install -D typescript ts-node-dev @types/express @types/node @types/jsonwebtoken @types/bcryptjs
```

---

## Folder Structure

```
backend/
├── src/
│   ├── index.ts              → Express app entry
│   ├── routes/
│   │   ├── auth.ts
│   │   ├── articles.ts
│   │   ├── newsletter.ts
│   │   └── members.ts
│   ├── middleware/
│   │   ├── auth.ts           → JWT verification
│   │   ├── validate.ts       → Zod validation
│   │   └── errorHandler.ts
│   ├── models/               → Prisma query helpers
│   │   ├── user.model.ts
│   │   └── article.model.ts
│   └── lib/
│       ├── prisma.ts         → Prisma client singleton
│       ├── jwt.ts            → Token helpers
│       └── email.ts          → Resend client
├── prisma/
│   └── schema.prisma
├── .env
└── tsconfig.json
```
