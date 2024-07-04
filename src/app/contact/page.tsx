import { Contact } from '../components/Contact'

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="text-4xl font-bold my-8">Contáctenos</h1>
      <Contact />
    </main>
  )
}