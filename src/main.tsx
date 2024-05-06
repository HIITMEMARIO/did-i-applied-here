import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './styles/GlobalStyle.ts';
import { Provider } from 'react-redux';
import store from './redux/config/configStore.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </QueryClientProvider>
);
