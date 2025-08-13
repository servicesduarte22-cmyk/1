# Services Duarte - Deployment Configuration

## Railway Configuration
railway.json:
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "numReplicas": 1,
    "sleepApplication": false
  }
}
```

## Environment Variables Needed:

### Frontend:
```
REACT_APP_BACKEND_URL=https://your-backend-url.railway.app
```

### Backend:
```
MONGO_URL=mongodb://mongo:password@containers-us-west-X.railway.app:XXXX
DB_NAME=services_duarte
PORT=8001
```

## Automatic Detection:
- ✅ Railway detects React app in /frontend
- ✅ Railway detects Python app in /backend  
- ✅ Railway detects requirements.txt
- ✅ Railway detects package.json

## Build Commands (Automatic):
- **Frontend**: `yarn install && yarn build && yarn start`
- **Backend**: `pip install -r requirements.txt && python -m uvicorn server:app --host 0.0.0.0 --port $PORT`

## Custom Domain Setup:
1. Go to Railway Dashboard
2. Select your app
3. Settings > Domains
4. Add Custom Domain: yourdomain.com
5. Update your DNS: CNAME record pointing to railway

## SSL Certificate:
- ✅ Automatic with custom domains
- ✅ Let's Encrypt integration
- ✅ Auto-renewal