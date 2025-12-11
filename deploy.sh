#!/bin/bash

# Exit on error
set -e

# Load .env variables if present
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Configuration
BUCKET_NAME="nitsite"
DIST_DIR="dist"
REGION="eu-north-1" # Update if different

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting deployment to s3://${BUCKET_NAME}...${NC}"

# 1. Build the project
echo -e "${BLUE}📦 Building project...${NC}"
pnpm build

# 2. Check for AWS CLI
if ! command -v aws &> /dev/null; then
    echo "Error: AWS CLI is not installed or not in PATH."
    exit 1
fi

# 3. Deploy to S3 with optimal caching strategies

echo -e "${BLUE}☁️  Syncing files to S3...${NC}"

# A. Upload Assets (Long Cache - 1 Year, Immutable)
# Includes: _astro (hashed), fonts, images
echo "   • Uploading immutable assets (1 year cache)..."
aws s3 sync $DIST_DIR s3://$BUCKET_NAME \
    --exclude "*" \
    --include "_astro/*" \
    --include "fonts/*" \
    --include "styles/*" \
    --include "*.png" \
    --include "*.jpg" \
    --include "*.jpeg" \
    --include "*.webp" \
    --include "*.svg" \
    --include "*.ico" \
    --cache-control "public, max-age=31536000, immutable" \
    --delete

# B. Upload HTML Files (Short Cache - 1 Hour, Must Revalidate)
# Ensures users see updates quickly while still allowing some caching
echo "   • Uploading HTML files (1 hour cache)..."
aws s3 sync $DIST_DIR s3://$BUCKET_NAME \
    --exclude "*" \
    --include "*.html" \
    --cache-control "public, max-age=3600, must-revalidate"

# C. Upload Root Static Files (Medium Cache - 1 Day)
# Robots.txt, sitemap, manifest, etc.
echo "   • Uploading config files (1 day cache)..."
aws s3 sync $DIST_DIR s3://$BUCKET_NAME \
    --exclude "*" \
    --include "robots.txt" \
    --include "sitemap*.xml" \
    --include "*.json" \
    --include "*.webmanifest" \
    --cache-control "public, max-age=86400"

# D. Upload Everything Else (Default - 1 Day)
# Catch-all for any other files not covered above
echo "   • Uploading remaining files..."
aws s3 sync $DIST_DIR s3://$BUCKET_NAME \
    --cache-control "public, max-age=86400"

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}🌍 Your site is live at: http://${BUCKET_NAME}.s3-website.${REGION}.amazonaws.com${NC}"
