// src/index.ts
// ministryofsingle.com — Backend API Entry Point
// ============================================================

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'

import authRoutes       from './routes/auth'
import articleRoutes    from './routes/articles'
import newsletterRoutes from './routes/newsletter'
import memberRoutes     from './routes/members'
import { errorHandler } from './middleware/errorHandler'

dotenv.config()

const app  = express()
const PORT = process.env.PORT ?? 4000

// ─── Middleware ───────────────────────────────────────────────
app.use(helmet())
app.use(cors({ origin: process.env.ALLOWED_ORIGINS?.split(',') ?? '*' }))
app.use(morgan('dev'))
app.use(express.json())

// ─── Health ───────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'ministryofsingle-api', ts: new Date() })
})

// ─── Routes ───────────────────────────────────────────────────
app.use('/api/auth',       authRoutes)
app.use('/api/articles',   articleRoutes)
app.use('/api/newsletter', newsletterRoutes)
app.use('/api/members',    memberRoutes)

// ─── Error Handler ────────────────────────────────────────────
app.use(errorHandler)

// ─── Start ────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🏛️  ministryofsingle API running on http://localhost:${PORT}`)
})

export default app
