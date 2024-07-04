import { Services } from '../components/Services'

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="text-4xl font-bold my-8">Nuestros Servicios</h1>
      <Services />
    </main>
  )
}