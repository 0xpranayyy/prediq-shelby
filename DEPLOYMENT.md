# 🚀 PREDIQ Production Deployment Guide

## ✅ System Status

- **Smart Contract**: Deployed on Aptos testnet
- **Frontend**: Ready for Vercel deployment
- **Backend**: Ready for cloud deployment
- **Database**: SQLite (production-ready)

## 📋 Deployment Checklist

### Frontend (Vercel)

1. **Environment Variables**:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.com
   NEXT_PUBLIC_CONTRACT_ADDRESS=0x4ebe6f7473ba656f37243cc70ab808c8b2e02c3dcd429450ff17f387d10970df
   NEXT_PUBLIC_SHELBY_GATEWAY=https://gateway.shelby.xyz
   NEXT_PUBLIC_SHELBY_API=https://api.shelby.xyz/v1
   ```

2. **Build Settings**:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Deploy**:
   ```bash
   git push origin main
   # Then deploy via Vercel dashboard
   ```

### Backend (Railway/Render)

1. **Environment Variables**:
   ```
   DB_TYPE=sqlite
   DB_PATH=./data/prediq.db
   PORT=3002
   APTOS_TESTNET_RPC=https://fullnode.testnet.aptoslabs.com/v1
   SHELBY_TESTNET_RPC=https://rpc.shelby.xyz/v1
   PREDICTION_MARKET_ADDRESS=0x4ebe6f7473ba656f37243cc70ab808c8b2e02c3dcd429450ff17f387d10970df
   ADMIN_ADDRESS=0x4ebe6f7473ba656f37243cc70ab808c8b2e02c3dcd429450ff17f387d10970df
   ```

2. **Start Command**: `npm start`

## 🔧 Quick Deploy Commands

```bash
# Build everything
./deploy.sh

# Push to Git
git push origin main

# Deploy Frontend
# Use Vercel dashboard

# Deploy Backend
# Use Railway/Render dashboard
```

## ✅ Verification

After deployment:

1. **Frontend**: Visit your Vercel URL
2. **Backend**: Check `/api/health` endpoint
3. **Integration**: Test wallet connection and market creation

## 🎯 Contract Information

- **Contract Address**: `0x4ebe6f7473ba656f37243cc70ab808c8b2e02c3dcd429450ff17f387d10970df`
- **Transaction**: `0x127f6fbc1fecbd849ee51ab7fdb139bc9bdb817e077bacf9e24c8660fb9c0afd`
- **Network**: Aptos Testnet

## 🔒 Security Notes

- Private keys removed from configuration
- Only read-only RPC endpoints used
- Environment variables properly configured
- Database uses SQLite for simplicity

## 📞 Support

If issues arise:
1. Check build logs
2. Verify environment variables
3. Test API endpoints
4. Check browser console for errors
