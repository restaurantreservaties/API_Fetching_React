import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Method1FetchUseEffect } from './components/Method1FetchUseEffect';
import { Method2AsyncAwaitUseEffect } from './components/Method2AsyncAwaitUseEffect';
import { Method3TanstackQuery } from './components/Method3TanstackQuery';
import { Method4CustomHook } from './components/Method4CustomHook';
import { BookOpen } from 'lucide-react';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8 gap-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">API Fetching Techniques</h1>
          </div>

          <div className="space-y-8">
            {/* Method 1: Fetch + useEffect */}
            <section className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Method 1: Fetch + useEffect
              </h2>
              <Method1FetchUseEffect />
            </section>

            {/* Method 2: Async/Await + useEffect */}
            <section className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Method 2: Async/Await + useEffect
              </h2>
              <Method2AsyncAwaitUseEffect />
            </section>

            {/* Method 3: TanStack Query */}
            <section className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Method 3: TanStack Query
              </h2>
              <Method3TanstackQuery />
            </section>

            {/* Method 4: Custom Hook */}
            <section className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Method 4: Custom Hook with AbortController
              </h2>
              <Method4CustomHook />
            </section>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;