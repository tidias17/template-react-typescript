// import { ErrorPage } from 'components/ErrorPage';
import { ReactNode } from 'react';
import { NotificationProvider } from 'providers/notification';
import { AuthProvider } from 'providers/auth';
import { QueryProvider } from './query';
// import { ErrorBoundary } from 'utils/error-logger';

// The ErrorPage can't be used directly
// const errorFallback = () => <ErrorPage />;

type AppProvidersProps = { children: ReactNode };

function AppProviders({ children }: AppProvidersProps) {
  return (
    // <ErrorBoundary fallback={errorFallback}>
      <QueryProvider>
        <NotificationProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </NotificationProvider>
      </QueryProvider>
    // </ErrorBoundary>
  );
}

export default AppProviders;
