---
sidebar_position: 2
---

# State Management

## Overview

The application uses TanStack Query (formerly React Query) for state management and data fetching. This choice provides several benefits:

-   Built-in caching
-   Automatic background updates
-   Loading & error states
-   Optimistic UI updates

## Implementation

```typescript
const {
	data: cryptoData,
	isLoading,
	isError,
	refetch,
} = useQuery({
	queryKey: ["cryptoData"],
	queryFn: fetchCryptoData,
	refetchInterval: 60000, // Auto-refresh every minute
	staleTime: 30000, // Consider data stale after 30 seconds
});
```

## Caching Strategy

-   **Stale Time**: 30 seconds
-   **Cache Time**: 5 minutes
-   **Refetch Interval**: 60 seconds
-   **Retry Configuration**: 3 retries with exponential backoff
