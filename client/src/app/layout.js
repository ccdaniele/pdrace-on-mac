import './globals.css'
import DatadogInit from '@/lib/datadog.init'
import DatadogLogsInit from '@/lib/datadog.logs'


export default function RootLayout({ children }) {



  return (
    <html>
      <head><title>pdrace - home</title></head>
      <body>
      <DatadogInit />
      <DatadogLogsInit/> 
        <main>              
          {children}
        </main> 
      </body>
    </html>
  )
}
