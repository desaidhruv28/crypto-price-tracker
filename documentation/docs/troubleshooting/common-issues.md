---
sidebar_position: 1
---

# Common Issues

## API Rate Limits

The CoinGecko API has rate limits that may affect data fetching:

-   Wait a few minutes before retrying
-   Reduce refresh interval in development
-   Consider implementing a proxy server for production

## Development Server Issues

If the development server fails to start:

1. Ensure all dependencies are installed: `npm install`
2. Clear npm cache: `npm cache clean --force`
3. Delete node_modules and reinstall:

```bash
rm -rf node_modules
npm install
```

## TypeScript Errors

If you encounter TypeScript errors:

1. Ensure TypeScript is installed: `npm install typescript --save-dev`
2. Update type definitions: `npm install @types/react @types/react-dom --save-dev`
3. Run TypeScript compiler: `npx tsc --noEmit`
