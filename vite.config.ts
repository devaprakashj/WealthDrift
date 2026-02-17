import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'api-middleware',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url?.startsWith('/api/subscribe') && req.method === 'POST') {
            console.log('📬 Newsletter request received...');
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', async () => {
              try {
                const { email } = JSON.parse(body);
                console.log(`📧 Attempting to subscribe: ${email}`);

                const response = await fetch("https://api.resend.com/emails", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer re_iTkVhjK9_BJ16SN9eeD7cJHwDA8D3qg91`,
                  },
                  body: JSON.stringify({
                    from: 'WealthDrift Newsletter <onboarding@resend.dev>',
                    to: email, // Free tier: must be your own verified email
                    subject: 'Welcome to WealthDrift!',
                    html: `<p>Welcome to WealthDrift! You've joined via Local Development.</p>`
                  }),
                });

                const data = await response.json();

                if (response.ok) {
                  console.log('✅ Email sent successfully!');
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true }));
                } else {
                  console.error('❌ Resend API Error:', data);
                  res.statusCode = response.status;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify(data));
                }
              } catch (error) {
                console.error('💥 Middleware Crash:', error);
                res.statusCode = 500;
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
              }
            });
            return;
          }
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
