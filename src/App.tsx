import { type ReactNode, useCallback, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  AdminPage,
  AuthPage,
  DashboardPage,
  DiscoverPage,
  ListenPage,
  LiveStudioPage,
  ProfilePage,
  StudioPage,
  SuspendedPage,
  TestAudioPage,
} from '@/pages/preacher-pages';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function useHashLocation(): [string, (path: string) => void] {
  const readHash = useCallback(
    () => window.location.hash.replace(/^#/, '') || '/',
    [],
  );
  const [location, setLocation] = useState(readHash);

  useEffect(() => {
    const handleHashChange = () => setLocation(readHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [readHash]);

  const navigate = useCallback(
    (path: string) => {
      window.location.hash = path.startsWith('/') ? path : `/${path}`;
    },
    [],
  );

  return [location, navigate];
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
         <Route path="/" component={DiscoverPage} />
         <Route path="/listen/:id" component={ListenPage} />
         <Route path="/auth" component={AuthPage} />
         <Route path="/broadcaster/dashboard" component={DashboardPage} />
         <Route path="/broadcaster/profile" component={ProfilePage} />
         <Route path="/broadcaster/studio" component={StudioPage} />
         <Route path="/broadcaster/studio/test" component={TestAudioPage} />
         <Route path="/broadcaster/studio/live" component={LiveStudioPage} />
         <Route path="/admin" component={AdminPage} />
         <Route path="/suspended" component={SuspendedPage} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter hook={useHashLocation}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
