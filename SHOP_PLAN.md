# Txchyon Shop - Implementation Plan

## Executive Summary

Transform `txchyon.com/shop` from a "Coming Soon" page into a **Txchyon Knowledge Vault** - an institutional-grade research access portal that positions products as systems, not PDFs.

**Core Philosophy Shift:**
- From: "Buy a guide" → To: "Enter a system"
- From: "Premium DeFi Guides" → To: "Access Institutional-Grade Crypto Playbooks"
- From: Product grid → To: Operational classes with clear progression

---

## Technical Architecture

### Architecture: Next.js (Separate Project)
- **Framework**: Next.js 14 (App Router)
- **Location**: `txchyon-shop` repo
- **Routing**: `txchyon.com/shop` -> Cloudflare Worker -> `txchyon-shop.pages.dev`
- **Styling**: Tailwind CSS (matching main site)
- **State**: React Context for cart/auth (future proofing)

### Frontend Structure
```
src/
├── app/
│   ├── layout.tsx                  # Root layout with ThemeProvider
│   ├── page.tsx                    # Main shop landing
│   ├── [slug]/                     # Dynamic product pages
│   │   └── page.tsx
│   └── access/
│       └── granted/                # Post-purchase confirmation
│           └── page.tsx
├── components/
│   ├── ui/                         # shadcn/ui components
│   ├── shop/                       # Shop-specific components
│   └── layout/                     # Header, Footer
└── lib/
    ├── utils.ts                    # Helpers
    └── products.ts                 # Product data
```

### Payment Integration

**Phase 1 (Immediate):**
1. **Stripe Payment Links** - Auto-fulfillment for card payments
2. **Manual SOL Payments** - For crypto purists
   - Display SOL wallet address
   - User emails transaction hash to shop@txchyon.com
   - Manual verification + email PDF (2x daily check)

---

## Product Catalog (Initial Launch)

### Playbooks ($10-20 each)

#### 1. Pump.fun Memecoin Playbook - $15
**Who it's for:** Traders who've already lost money on memecoins
**Problem eliminated:** Random aping without strategy

#### 2. Airdrop Farming Blueprint - $12
**Who it's for:** DeFi users who missed major airdrops
**Problem eliminated:** Wasting gas on non-qualifying activities

#### 3. Crypto Security Playbook - $10
**Who it's for:** Anyone who's been phished or hacked
**Problem eliminated:** Losing funds to preventable attacks

### Access Packs (Bundles)

#### Txchyon Starter Access - $29
- 3 playbooks of choice
- Immediate download

#### Txchyon Operator Pack - $59
- All playbooks

---

## Deployment & Verification

### Checklist
- [x] Project Initialized (Next.js 14)
- [x] Design Ported (Tailwind v4 -> v3 compat)
- [x] Pages Built (`/`, `/product/[slug]`, `/access/granted`)
- [x] Password Protection (Middleware Basic Auth)
- [ ] Deploy to Cloudflare Pages (`txchyon-shop`)
- [ ] Update Router (`txchyon-labs`)

### Credentials
- **Basic Auth User**: `admin`
- **Basic Auth Pass**: `txchyon2024` (Change in `middleware.ts`)
