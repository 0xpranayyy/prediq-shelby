#!/bin/bash

echo "🚀 PREDIQ Complete Deployment Script"
echo "=================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run from project root."
    exit 1
fi

echo "📋 Step 1: Building Frontend..."
cd frontend
npm install
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed!"
    exit 1
fi
echo "✅ Frontend build successful!"

echo "📋 Step 2: Building Backend..."
cd ../backend
npm install
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Backend build failed!"
    exit 1
fi
echo "✅ Backend build successful!"

echo "📋 Step 3: Preparing for deployment..."
cd ..

echo "📋 Step 4: Git preparation..."
git add .
git commit -m "chore: prepare for production deployment"

echo "🎉 All builds successful! Ready for deployment!"
echo ""
echo "📝 Next Steps:"
echo "1. Push to Git: git push origin main"
echo "2. Deploy Frontend on Vercel"
echo "3. Deploy Backend on Railway/Render"
echo "4. Update environment variables"
echo ""
echo "🔗 Environment Variables Needed:"
echo "- Frontend: NEXT_PUBLIC_API_URL, NEXT_PUBLIC_CONTRACT_ADDRESS"
echo "- Backend: DB_TYPE, APTOS_TESTNET_RPC, SHELBY_TESTNET_RPC"
