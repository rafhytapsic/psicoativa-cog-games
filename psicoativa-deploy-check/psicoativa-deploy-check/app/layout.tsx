export const metadata = { title: 'Deploy OK', description: 'Teste de deploy' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="pt-BR"><body style={{fontFamily:'sans-serif'}}>{children}</body></html>)
}
